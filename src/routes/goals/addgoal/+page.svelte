<script>
    import { enhance } from '$app/forms';
    import GoalForm from '$lib/components/GoalForm.svelte';
    
    let goal = $state({ title: '', type: 'Circle Checkbox', current_count: 0, target_count: 20, due_date: '', notes: '' });
</script>

<div class="container mt-5">
    <h1 class="fw-bold mb-5">New Goal:</h1>

    <form method="POST" use:enhance class="row g-4">
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