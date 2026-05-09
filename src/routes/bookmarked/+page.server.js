import { getBooks } from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user) throw redirect(303, '/');

    try {
        const collection = await getBooks();
        const booksFromDB = await collection.find({ 
            userId: locals.user.id,
            status: "bookmarked" 
        }).toArray();
        
        const serializedBooks = booksFromDB.map(book => ({
            ...book,
            _id: book._id.toString()
        }));

        return {
            books: serializedBooks
        };
    } catch (error) {
        console.error("Error loading bookmarked books:", error);
        return {
            books: []
        };
    }
}