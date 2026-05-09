<script>
    import { enhance } from '$app/forms';
    import Modal from '$lib/components/Modal.svelte';

    let { data } = $props();
    let user = $derived(data.user); 
    let showLogoutModal = $state(false);

    function openLogoutModal() {
        showLogoutModal = true;
    }

    function closeLogoutModal() {
        showLogoutModal = false;
    }
</script>

{#if showLogoutModal}
    <Modal
        title="Log Out?"
        description="Are you sure you want to log out of your account?"
    >
        {#snippet actions()}
            <form method="POST" action="?/logout" use:enhance>
                <button type="submit" class="btn btn-danger px-4 py-2 fw-bold rounded-pill">
                    Yes, log out
                </button>
            </form>
            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closeLogoutModal}>
                No, cancel
            </button>
        {/snippet}
    </Modal>
{/if}

<div class="container mt-5" style="max-width: 800px;">
    <h1 class="display-5 fw-bold mb-5">Settings:</h1>

    <div class="card border-0 shadow-sm p-5 mb-4" style="border-radius: 20px; background-color: #f8f9fa;">
        <h3 class="fw-bold mb-4">Profile</h3>
        
        <div class="mb-4">
            <p class="text-secondary mb-1">Username:</p>
            <p class="text-secondary fw-bold mb-1">{user?.username}</p>
        </div>
        
        <hr class="my-5" style="border-color: #dee2e6;">

        <h3 class="fw-bold mb-4">Account Actions</h3>
        <div>
            <p class="text-secondary mb-3">Leave your session securely.</p>
            <button class="btn btn-outline-danger px-4 py-2 fw-bold rounded-pill shadow-sm" onclick={openLogoutModal}>
                Log Out
            </button>
        </div>
    </div>
</div>