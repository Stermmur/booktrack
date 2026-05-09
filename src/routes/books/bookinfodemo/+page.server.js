import { getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { redirect, error } from "@sveltejs/kit";

export async function load({ url, locals }) {
    if (!locals.user) throw redirect(303, '/');

    const id = url.searchParams.get('id');
    if (!id) throw error(400, "Keine Buch-ID gefunden");

    try {
        const collection = await getBooks();
        const book = await collection.findOne({ 
            _id: new ObjectId(id),
            userId: locals.user.id 
        });

        if (!book) throw error(404, "Buch nicht gefunden");

        return { 
            book: {
                ...book,
                _id: book._id.toString()
            }
        };
    } catch (err) {
        console.error("Error loading book details:", err);
        throw error(500, "Interner Server Fehler");
    }
}

export const actions = {
    deleteBook: async ({ request, locals }) => {
        if (!locals.user) return { success: false };

        const data = await request.formData();
        const bookId = data.get('bookId');

        if (bookId) {
            try {
                const collection = await getBooks();
                await collection.deleteOne({ 
                    _id: new ObjectId(bookId), 
                    userId: locals.user.id 
                });
            } catch (err) {
                console.error("Error deleting book", err);
                return { success: false, message: "Fehler beim Löschen." };
            }
        }
        
        throw redirect(303, '/?deleted=true');
    }
};