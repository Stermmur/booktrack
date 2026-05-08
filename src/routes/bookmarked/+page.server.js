import { getBooks } from "$lib/db.js";

export async function load() {
    try {
        const collection = await getBooks();
        const booksFromDB = await collection.find({ status: "bookmarked" }).toArray();
        console.log("Found bookmarked books in DB"); 

        const serializedBooks = booksFromDB.map(book => ({
            ...book,
            _id: book._id.toString() 
        }));

        return {
            bookmarkedBooks: serializedBooks
        };
    } catch (error) {
        console.error("Error loading bookmarked books:", error);
    }
}