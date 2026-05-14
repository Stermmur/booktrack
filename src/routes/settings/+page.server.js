import { redirect, fail } from "@sveltejs/kit";
import { getUsers, getBooks } from "$lib/db.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";

export async function load({ locals }) {
    if (!locals.user) throw redirect(303, '/?login=true');

    try {
        const booksCollection = await getBooks();
        const userBooks = await booksCollection.find({ userId: locals.user.id }).toArray();
        const readCount = userBooks.filter(book => book.status === 'read').length;
        const currentReadCount = userBooks.filter(book => book.status === 'reading').length;
        const watchlistCount = userBooks.filter(book => book.status === 'bookmarked').length;

        const genreCounts = {};
        userBooks.forEach(book => {
            const genre = book.genre || 'Uncategorized';
            genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });

        return {
            readCount,
            currentReadCount,
            watchlistCount,
            genreCounts
        };
    } catch (error) {
        console.error("Error loading stats:", error);
        return {
            readCount: 0,
            currentReadCount: 0,
            watchlistCount: 0,
            genreCounts: {}
        };
    }
}

export const actions = {
    logout: async ({ cookies }) => {
        cookies.delete('session', { path: '/' });
        throw redirect(303, '/');
    },

    changePassword: async ({ request, locals }) => {
        if (!locals.user) return fail(401, { error: 'Not authenticated' });

        const data = await request.formData();
        const currentPassword = data.get('currentPassword');
        const newPassword = data.get('newPassword');
        const confirmPassword = data.get('confirmPassword');

        if (!currentPassword || !newPassword || !confirmPassword) {
            return fail(400, { error: 'All fields are required.' });
        }

        if (newPassword !== confirmPassword) {
            return fail(400, { error: 'New passwords do not match.' });
        }

        try {
            const usersCollection = await getUsers();
            const user = await usersCollection.findOne({ _id: new ObjectId(locals.user.id) });

            if (!user || !(await bcrypt.compare(currentPassword, user.passwordHash))) {
                return fail(400, { error: 'Incorrect current password.' });
            }

            const newPasswordHash = await bcrypt.hash(newPassword, 10);

            await usersCollection.updateOne(
                { _id: new ObjectId(locals.user.id) },
                { $set: { passwordHash: newPasswordHash } }
            );
            return { success: true, message: 'Password successfully updated!' };

        } catch (error) {
            console.error("Error changing password:", error);
            return fail(500, { error: 'Internal server error.' });
        }
    }
};