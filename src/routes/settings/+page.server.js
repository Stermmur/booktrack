import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user) throw redirect(303, '/?login=true');
    return {};
}

export const actions = {
    logout: async ({ cookies }) => {
        cookies.delete('session', { path: '/' });
        throw redirect(303, '/');
    }
};