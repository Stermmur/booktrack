import { getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit";

export async function load({ url }) {
    const id = url.searchParams.get('id');

    if (!id) {
        throw error(400, "No book ID found in the URL");
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
    default: async ({ request }) => {
        const data = await request.formData();
        const bookId = data.get('bookId');

        if (!bookId) {
            return { success: false, message: "No book ID provided" };
        }

        try {
            const collection = await getBooks();

            await collection.updateOne(
                { _id: new ObjectId(bookId) },
                {
                    $set: {
                        title: data.get('title'),
                        author: data.get('author'),
                        genre: data.get('genre'),
                        release_date: data.get('release_date'),
                        notes: data.get('notes'),
                        finishing_date: data.get('finishing_date'),
                        rating: parseInt(data.get('rating')) || 0,
                        status: data.get('status')
                    }
                }
            );

        } catch (err) {
            console.error("Error saving changes:", err);
            return { success: false, message: "Error saving changes" };
        }

        throw redirect(303, `/books/bookinfodemo?id=${bookId}&updated=true`);
    }
};