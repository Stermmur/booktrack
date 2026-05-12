import { getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit";

export async function load({ url, locals }) {
    if (!locals.user) throw redirect(303, '/');

    const id = url.searchParams.get('id');
    if (!id) throw error(400, "No book ID found in the URL");

    try {
        const collection = await getBooks();
        const book = await collection.findOne({ _id: new ObjectId(id), userId: locals.user.id });

        if (!book) throw error(404, "Book not found or unauthorized");

        return {
            book: {
                ...book,
                _id: book._id.toString()
            }
        };
    } catch (err) {
        console.error("Error loading book for editing", err);
        throw error(500, "Internal Server Error");
    }
}

export const actions = {
    default: async ({ request, locals, url }) => {
        if (!locals.user) return { success: false, message: "Not authenticated" };

        const data = await request.formData();
        const bookId = data.get('bookId');

        if (!bookId) return { success: false, message: "No book ID provided" };

        const coverFile = data.get("bookcover");
        let coverUrlUpdate = {}; 

        if (coverFile && coverFile.size > 0 && coverFile.type.startsWith('image/')) {
            try {
                const arrayBuffer = await coverFile.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const base64String = buffer.toString('base64');
                const mimeType = coverFile.type; 
                coverUrlUpdate.cover_url = `data:${mimeType};base64,${base64String}`;
            } catch (err) {
                console.error("Fehler bei der Bildumwandlung in Base64:", err);
            }
        }

        try {
            const collection = await getBooks();
            await collection.updateOne(
                { _id: new ObjectId(bookId), userId: locals.user.id }, 
                {
                    $set: {
                        title: data.get('title'),
                        author: data.get('author'),
                        genre: data.get('genre'),
                        release_date: data.get('release_date'),
                        notes: data.get('notes'),
                        finishing_date: data.get('finishing_date'),
                        rating: parseInt(data.get('rating')) || 0,
                        status: data.get('status'),
                        ...coverUrlUpdate 
                    }
                }
            );
        } catch (err) {
            console.error("Error saving changes:", err);
            return { success: false, message: "Error saving changes" };
        }

        const returnUrl = url.searchParams.get('from');

        if (returnUrl) {
            throw redirect(303, `${returnUrl}?updated=true`);
        } else {
            throw redirect(303, `/books/bookinfodemo?id=${bookId}&updated=true`);
        }
    }
};