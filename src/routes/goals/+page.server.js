import { getGoals } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    if (!locals.user) throw redirect(303, '/');

    try {
        const collection = await getGoals();
        const goalsFromDB = await collection.find({ userId: locals.user.id }).toArray();
        
        const serializedGoals = goalsFromDB.map(goal => ({
            ...goal,
            _id: goal._id.toString(), 
            target_count: Number(goal.target_count) || 0, 
            current_count: Number(goal.current_count) || 0
        }));

        serializedGoals.sort((a, b) => {
            const aCompleted = a.current_count >= a.target_count;
            const bCompleted = b.current_count >= b.target_count;
            
            if (aCompleted && !bCompleted) return 1;  
            if (!aCompleted && bCompleted) return -1; 
            return 0;                                
        });

        return { goals: serializedGoals };
    } catch (err) {
        return { goals: [] };
    }
}

export const actions = {
    deleteGoal: async ({ request, locals }) => {
        if (!locals.user) return { success: false };

        const data = await request.formData();
        const goalId = data.get('goalId'); 

        if (!goalId || !ObjectId.isValid(goalId)) throw error(400, "Invalid Goal ID");

        try {
            const collection = await getGoals();
            await collection.deleteOne({ _id: new ObjectId(goalId), userId: locals.user.id });
        } catch (err) {
            return { success: false, message: "Could not delete goal." };
        }

        throw redirect(303, "/goals?deleted=true");
    },

    incrementGoal: async ({ request, locals }) => {
        if (!locals.user) return { success: false };

        const data = await request.formData();
        const goalId = data.get('goalId');

        if (!goalId || !ObjectId.isValid(goalId)) return { success: false, message: "Invalid Goal ID" };

        try {
            const collection = await getGoals();
            await collection.updateOne(
                { _id: new ObjectId(goalId), userId: locals.user.id },
                { $inc: { current_count: 1 } }
            );
            return { success: true };
        } catch (err) {
            return { success: false, message: "Could not update goal." };
        }
    }
};