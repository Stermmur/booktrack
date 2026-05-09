import { getBooks, getUsers } from "$lib/db.js";
import { fail } from "@sveltejs/kit";
import bcrypt from "bcryptjs";

export async function load({ locals }) {
    if (!locals.user) {
        return { books: [] };
    }

    try {
        const collection = await getBooks();
        const booksFromDB = await collection.find({ userId: locals.user.id }).toArray();

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

export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        const usersCollection = await getUsers();
        const user = await usersCollection.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
            return fail(400, { error: 'Invalid username or password', isLoginMode: true });
        }

        cookies.set('session', user._id.toString(), { path: '/', maxAge: 60 * 60 * 24 * 7 });
        return { success: true };
    },

    register: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const confirm = data.get('confirmPassword');

        if (password !== confirm) {
            return fail(400, { error: 'Passwords do not match', isLoginMode: false });
        }

        const usersCollection = await getUsers();
        if (await usersCollection.findOne({ username })) {
            return fail(400, { error: 'Username already exists', isLoginMode: false });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const result = await usersCollection.insertOne({ username, passwordHash });

        cookies.set('session', result.insertedId.toString(), { path: '/', maxAge: 60 * 60 * 24 * 7 });
        return { success: true };
    }
};