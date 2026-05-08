import { getBooks } from "$lib/db.js";

export async function load() {
    try {
        const collection = await getBooks();
        const booksFromDB = await collection.find({ status: "read" }).toArray();
        console.log("Found read books in DB");

        const serializedBooks = booksFromDB.map(book => ({
            ...book,
            _id: book._id.toString()
        }));

        return {
            readBooks: serializedBooks
        };
        
    } catch (error) {
        console.error("Error loading read books", error);
    }
}