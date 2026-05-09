import { createGoal } from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, locals }) => {
        if (!locals.user) return { success: false, message: "Not authenticated" };

        const data = await request.formData();
        const newGoal = {
            title: data.get("title") || "Unbenanntes Ziel",
            type: data.get("type") || "Circle Checkbox",
            due_date: data.get("due_date") || "",
            notes: data.get("notes") || "",
            target_count: parseInt(data.get("target_count")) || 0,
            current_count: parseInt(data.get("current_count")) || 0,
            userId: locals.user.id 
        };

        try {
            await createGoal(newGoal);
        } catch (err) {
            console.error("Error saving goal", err);
            return { success: false, message: "Error saving goal" };
        }
        
        throw redirect(303, "/goals?success=true");
    }
};