import { getBooks } from "$lib/db.js";

export async function load() {
    try {
        const collection = await getBooks();
        const booksFromDB = await collection.find({}).toArray();
        const serializedBooks = booksFromDB.map(book => ({
            ...book,
            _id: book._id.toString()
        }));
        return {
            books: serializedBooks
        };
    } catch (error) {
        console.error("Error loading books:", error);
        return {
            books: []
        };
    }
}