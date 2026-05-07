import { getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit"; 

export async function load({ url }) {
    const id = url.searchParams.get('id');

    if (!id) {
        throw error(400, "No book ID found in the URL");
    }

    if (!ObjectId.isValid(id)) {
        throw error(400, "Invalid book ID format");
    }

    try {
        const collection = await getBooks();
        const book = await collection.findOne({ _id: new ObjectId(id) });

        if (!book) {
            throw error(404, "Book not found");
        }

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
    deleteBook: async ({ request }) => {
        const data = await request.formData();
        const bookId = data.get('bookId');

        if (bookId) {
            try {
                const collection = await getBooks();
                await collection.deleteOne({ _id: new ObjectId(bookId) });
            } catch (err) {
                console.error("Error deleting book", err);
                return { success: false };
            }
        }

       throw redirect(303, '/?deleted=true');
    }
};