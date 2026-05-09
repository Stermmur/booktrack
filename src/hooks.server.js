import { getUsers } from '$lib/db.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    const session = event.cookies.get('session');

    if (session) {
        try {
            const usersCollection = await getUsers();
            const user = await usersCollection.findOne({ _id: new ObjectId(session) });
            if (user) {
                event.locals.user = { 
                    id: user._id.toString(), 
                    username: user.username 
                };
            }
        } catch (err) {
            console.error("Session Error:", err);
        }
    }

  
    const protectedPaths = ['/books', '/goals', '/currentread', '/bookmarked', '/myreads', '/settings'];
    const isProtected = protectedPaths.some(path => event.url.pathname.startsWith(path));

    if (isProtected && !event.locals.user) {
        throw redirect(303, '/?login=true');
    }

    return await resolve(event);
}