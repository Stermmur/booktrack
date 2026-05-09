<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/state";
    import Modal from "$lib/components/Modal.svelte";

    let { data } = $props();
    let goals = $derived(data.goals || []);
    let isSaved = $derived(page.url.searchParams.get("success") === "true");
    let isUpdated = $derived(page.url.searchParams.get("updated") === "true");
    let isDeleted = $derived(page.url.searchParams.get("deleted") === "true");

    $effect(() => {
        if (isSaved || isUpdated || isDeleted) {
            const url = new URL(window.location.href);
            url.searchParams.delete("success");
            url.searchParams.delete("updated");
            url.searchParams.delete("deleted");
            window.history.replaceState({}, "", url);
        }
    });

    let showDeleteModal = $state(false);
    let activeGoalId = $state(null);

    function openDeleteModal(id) {
        activeGoalId = id;
        showDeleteModal = true;
    }

    function closeDeleteModal() {
        activeGoalId = null;
        showDeleteModal = false;
    }

    function getTimeLeft(dueDateString) {
        if (!dueDateString) return "No date set";
        const target = new Date(dueDateString);
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return "Goal reached or expired";
        const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
        const months = Math.floor(daysTotal / 30);
        const days = daysTotal % 30;
        return `${months} Months, ${days} Days`;
    }

    function formatDate(dateString) {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    function getPercentage(current, target) {
        const c = Number(current) || 0;
        const t = Number(target) || 0;
        if (t <= 0) return 0;
        let percent = Math.round((c / t) * 100);
        return percent > 100 ? 100 : percent;
    }
</script>

{#if showDeleteModal}
    <Modal
        title="Delete Goal?"
        description="Are you sure you want to permanently delete this goal?"
    >
        {#snippet actions()}
            <form
                method="POST"
                action="?/deleteGoal"
                use:enhance={() => {
                    return async ({ update }) => {
                        closeDeleteModal();
                        await update(); 
                    };
                }}
            >
                <input type="hidden" name="goalId" value={activeGoalId} />
                <button type="submit" class="btn btn-danger px-4 py-2 fw-bold rounded-pill">
                    Yes, delete
                </button>
            </form>

            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closeDeleteModal}>
                No, cancel
            </button>
        {/snippet}
    </Modal>
{/if}

    <div>
        <br>
        <h1  class="fw-bold display-5 mb-4 text-center text-lg-start text-decoration-none">My Goals:</h1>
    </div>
    
<div class="container mt-5">
    {#if isSaved}
        <div class="alert alert-success text-center fw-bold mt-3 mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Goal successfully created!
        </div>
    {/if}

    {#if isUpdated}
        <div class="alert alert-info text-center fw-bold mt-3 mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Goal successfully updated!
        </div>
    {/if}

    {#if isDeleted}
        <div class="alert alert-warning text-center fw-bold mt-3 mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Goal successfully deleted!
        </div>
    {/if}

    {#each goals as goal, index}
        <div class="goal-card position-relative">
            <button
                type="button"
                class="btn-delete-icon"
                aria-label="Delete goal"
                onclick={() => openDeleteModal(goal._id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
            </button>

            <h2 class="fw-bold mb-4 pe-5">{goal.title}</h2>

            <div class="row mb-4">
                <div class="col-md-5">
                    <p class="mb-1">
                        <span class="text-secondary">Due Date:</span>
                        {formatDate(goal.due_date)}
                    </p>
                    <p class="mb-1">
                        <span class="text-secondary">Time Left:</span>
                        {getTimeLeft(goal.due_date)}
                    </p>
                </div>
                <div class="col-md-7">
                    <p class="mb-1 text-secondary">Notes:</p>
                    <p>{goal.notes || "No notes added."}</p>
                </div>
            </div>

            <div class="mb-4">
                <p class="text-secondary mb-2">
                    Book-Count: <span class="text-dark fw-bold">({goal.current_count} / {goal.target_count})</span>
                </p>

                {#if goal.type === "Progress Bar"}
                    <div class="progress mt-2" style="height: 25px; border-radius: 20px;">
                        <div
                            class="progress-bar bg-dark"
                            style="width: {getPercentage(goal.current_count, goal.target_count)}%"
                        ></div>
                    </div>
                {:else}
                    <div class="d-flex flex-wrap gap-2">
                        {#each Array(Math.max(0, Number(goal.target_count) || 0)) as _, i}
                            <div class="circle {i < Number(goal.current_count) ? 'filled' : 'empty'}"></div>
                        {/each}
                    </div>
                {/if}
            </div>

            <a href="/goals/editgoal?id={goal._id}" class="btn btn-light border px-4 py-1 fw-bold rounded-pill text-secondary shadow-sm">
                Edit Goal
            </a>
        </div>

        {#if index < goals.length - 1}
            <hr class="my-5" style="border-color: #e0e0e0; border-width: 2px;" />
        {/if}
    {:else}
        <p class="text-secondary fs-5">You haven't set any goals yet.</p>
    {/each}

    <div class="d-flex justify-content-end mt-5 mb-5">
        <a href="/goals/addgoal" class="btn btn-dark px-4 py-2 fw-bold shadow">
            +Add Goal
        </a>
    </div>
</div>

<style>
    .goal-card {
        background: white;
        border-radius: 15px;
    }
    .circle {
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    .filled {
        background-color: #000;
    }
    .empty {
        background-color: #e0e0e0;
    }
    .btn-delete-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: #dc3545;
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .btn-delete-icon:hover {
        background-color: #f8d7da;
        color: #a71d2a;
    }
</style>