<script>
    import { enhance } from '$app/forms';
    import GoalForm from '$lib/components/GoalForm.svelte';
    
    let { data } = $props();
    let goal = $derived(data.goal);
</script>

<div class="container mt-5">
    <h1 class="fw-bold mb-5">Edit Goal:</h1>

    <form method="POST" use:enhance class="row g-4">
        <input type="hidden" name="goalId" value={goal._id}>

        <GoalForm bind:goal>
            {#snippet actions()}
                <button type="submit" class="btn btn-dark px-5 py-2 fw-bold rounded-pill">
                    Save
                </button>
                <a href="/goals" class="btn btn-outline-dark px-5 py-2 fw-bold rounded-pill">
                    Cancel
                </a>
            {/snippet}
        </GoalForm>
    </form>
</div>