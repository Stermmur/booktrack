import { getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user) throw redirect(303, '/');

    try {
        const collection = await getBooks();
        const currentBook = await collection.findOne({ 
            userId: locals.user.id,
            status: "reading" 
        });

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
    finishBook: async ({ request, locals }) => {
        if (!locals.user) return { success: false };

        const data = await request.formData();
        const bookId = data.get('bookId');

        if (bookId) {
            try {
                const collection = await getBooks();
                const date = new Date();
                const day = String(date.getDate()).padStart(2, '0');
                const month = date.toLocaleString('en-US', { month: 'long' });
                const year = date.getFullYear();
                const formattedDate = `${day}. ${month} ${year}`;

                await collection.updateOne(
                    { _id: new ObjectId(bookId), userId: locals.user.id },
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
        return { success: false };
    }
};