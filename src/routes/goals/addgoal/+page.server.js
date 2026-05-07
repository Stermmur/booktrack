import { createGoal } from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const newGoal = {
            title: data.get("title") || "Unbenanntes Ziel",
            type: data.get("type") || "Circle Checkbox",
            due_date: data.get("due_date") || "",
            notes: data.get("notes") || "",
            target_count: parseInt(data.get("target_count")) || 0,
            current_count: parseInt(data.get("current_count")) || 0
        };

        try {
            await createGoal(newGoal);
        } catch (err) {
            console.error("Error saving goal to Database", err);
            return { 
                success: false, 
                message: "Not able to save the goal. Please try again." 
            };
        }
        throw redirect(303, "/goals?success=true");
    }
};