import { createBook } from "$lib/db.js";
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
            try {
                const arrayBuffer = await coverFile.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const base64String = buffer.toString('base64');
                const mimeType = coverFile.type; 
                coverUrl = `data:${mimeType};base64,${base64String}`;
            } catch (err) {
                console.error("Fehler bei der Bildumwandlung in Base64:", err);
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
            release_date: data.get("release_date") || "",
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