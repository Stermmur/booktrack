import { getGoals } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const collection = await getGoals();
        const goalsFromDB = await collection.find({}).toArray();
        const serializedGoals = goalsFromDB.map(goal => ({
            ...goal,
            _id: goal._id.toString(), 
            target_count: Number(goal.target_count) || 0, 
            current_count: Number(goal.current_count) || 0
        }));

        return {
            goals: serializedGoals
        };
    } catch (err) {
        console.error("Error loading goals:", err);
        return { goals: [] };
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    deleteGoal: async ({ request }) => {
        const data = await request.formData();
        const goalId = data.get('goalId'); 

        if (!goalId || !ObjectId.isValid(goalId)) {
            throw error(400, "Invalid Goal ID");
        }

        try {
            const collection = await getGoals();
            await collection.deleteOne({ _id: new ObjectId(goalId) });
        } catch (err) {
            console.error("Error deleting goal:", err);
            return { success: false, message: "Could not delete goal." };
        }

        throw redirect(303, "/goals?deleted=true");
    }
};
