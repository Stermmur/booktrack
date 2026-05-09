import { createBook } from "$lib/db.js";
import fs from 'fs';
import path from 'path';
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({ request, locals }) => {
        if (!locals.user) {
            return { success: false, error: "Not authenticated" };
        }

        const data = await request.formData();
        const coverFile = data.get("bookcover");
        let coverUrl = "/coverplaceholder/gemini_generated_spaceholder.png"; 

        if (coverFile && coverFile.size > 0 && coverFile.type.startsWith('image/')) {
            const fileName = `cover_${Date.now()}_${coverFile.name.replace(/\s+/g, '_')}`;
            const filePath = path.join(process.cwd(), 'static', 'covers', fileName);
            
            try {
                if (!fs.existsSync(path.join(process.cwd(), 'static', 'covers'))) {
                    fs.mkdirSync(path.join(process.cwd(), 'static', 'covers'), { recursive: true });
                }
                const buffer = Buffer.from(await coverFile.arrayBuffer());
                fs.writeFileSync(filePath, buffer);
                coverUrl = `/covers/${fileName}`;
            } catch (err) {
                console.error("Fehler beim Bild-Speichern:", err);
            }
        }

        let authorInput = data.get("author");
        let ratingInput = data.get("rating");
        let finishing_dateInput = data.get("finishing_date");

        let book = {
            title: data.get("title"),
            genre: data.get("genre"),
            status: data.get("status"),
            author: (!authorInput || authorInput.trim() === "") ? "Unknown Author" : authorInput,
            released: data.get("released") || "",
            notes: data.get("notes") || "",
            finishing_date: (!finishing_dateInput || finishing_dateInput.trim() === "") ? null : finishing_dateInput,
            rating: (!ratingInput || ratingInput === "0") ? null : Number(ratingInput),
            cover_url: coverUrl,
            userId: locals.user.id 
        };

        try {
            await createBook(book); 
        } catch (error) {
            console.error("Error saving book to Database:", error);
            return { success: false, error: "Error saving book to Database" };
        }

        throw redirect(303, '/?success=true');
    },
};