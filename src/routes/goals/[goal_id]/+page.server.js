import { getGoals } from "$lib/db.js";
import { ObjectId } from "mongodb";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const id = params.goal_id;

    if (!id || !ObjectId.isValid(id)) {
        throw error(400, "Invalid Goal ID");
    }

    try {
        const collection = await getGoals();
        const goal = await collection.findOne({ _id: new ObjectId(id) });

        if (!goal) {
            throw error(404, "Goal not found");
        }

        return {
            goal: {
                ...goal,
                _id: goal._id.toString()
            }
        };
    } catch (err) {
        console.error("Error loading goal:", err);
        throw error(500, "Server Error");
    }
}

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const goalId = params.goal_id; 

        try {
            const collection = await getGoals();
            await collection.updateOne(
                { _id: new ObjectId(goalId) },
                {
                    $set: {
                        title: data.get('title'),
                        type: data.get('type'),
                        due_date: data.get('due_date'),
                        notes: data.get('notes'),
                        target_count: parseInt(data.get('target_count')) || 0,
                        current_count: parseInt(data.get('current_count')) || 0
                    }
                }
            );
        } catch (err) {
            console.error("Update Error:", err);
            return { success: false };
        }

        throw redirect(303, "/goals"); 
    }
};