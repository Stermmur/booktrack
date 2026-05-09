import { getBooks } from "$lib/db.js"; // Korrekt: Benannter Import
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const id = params.book_id;
    if (!ObjectId.isValid(id)) throw error(400, "Invalid ID");

    try {
        const collection = await getBooks();
        const book = await collection.findOne({ _id: new ObjectId(id) });
        if (!book) throw error(404, "Not found");
        return { book: { ...book, _id: book._id.toString() } };
    } catch (err) {
        throw error(500, "Internal Server Error");
    }
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        try {
            const collection = await getBooks();
            await collection.deleteOne({ _id: new ObjectId(id) });
        } catch (err) {
            return { success: false };
        }
        throw redirect(303, "/?deleted=true");
    }
};