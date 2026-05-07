import { getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb"; 

export async function load() {
    try {
        const collection = await getBooks();
        const currentBook = await collection.findOne({ status: "reading" });

        if (!currentBook) {
            return { book: null };
        }
        return {
            book: {
                ...currentBook,
                _id: currentBook._id.toString()
            }
        };
    } catch (error) {
        console.error("Error loading current book", error);
        return { book: null };
    }
}

export const actions = {
    finishBook: async ({ request }) => {
        const data = await request.formData();
        const bookId = data.get('bookId');

        if (!bookId) {
            return { success: false };
        }

        try {
            const collection = await getBooks();
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'long' });
            const year = date.getFullYear();
            const formattedDate = `${day}. ${month} ${year}`;

            await collection.updateOne(
                { _id: new ObjectId(bookId) }, 
                {
                    $set: {
                        status: "read", 
                        finishing_date: formattedDate 
                    }
                }
            );
            return { success: true };
        } catch (error) {
            console.error("Error finishing book", error);
            return { success: false };
        }
    }
};