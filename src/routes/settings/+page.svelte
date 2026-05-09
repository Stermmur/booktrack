<script>
    import { enhance } from '$app/forms';
    import Modal from '$lib/components/Modal.svelte';

    let { data, form } = $props();
    let user = $derived(data.user);
    let showLogoutModal = $state(false);
    let showPasswordModal = $state(false);
    let passwordFormElement;

    function openLogoutModal() {
        showLogoutModal = true;
    }

    function closeLogoutModal() {
        showLogoutModal = false;
    }

    function openPasswordModal() {
        if (passwordFormElement.checkValidity()) {
            showPasswordModal = true;
        } else {
            passwordFormElement.reportValidity();
        }
    }

    function closePasswordModal() {
        showPasswordModal = false;
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

{#if showPasswordModal}
    <Modal
        title="Change Password?"
        description="Are you sure you want to definitely change your password?"
    >
        {#snippet actions()}
            <button type="submit" form="passwordForm" class="btn btn-dark px-4 py-2 fw-bold rounded-pill">
                Yes, change it
            </button>
            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closePasswordModal}>
                No, cancel
            </button>
        {/snippet}
    </Modal>
{/if}

<div>
    <br>
    <h1 class="fw-bold display-5 mb-4 text-center text-lg-start text-decoration-none">Settings:</h1>
</div>

<div class="container mt-5 mb-5" style="max-width: 800px;">
    {#if form?.success}
        <div class="alert alert-success text-center fw-bold shadow-sm mb-4" style="border-radius: 15px;">
            {form.message}
        </div>
    {/if}
    {#if form?.error}
        <div class="alert alert-danger text-center fw-bold shadow-sm mb-4" style="border-radius: 15px;">
            {form.error}
        </div>
    {/if}

    <div class="card border-0 shadow-sm p-4 p-md-5 mb-4" style="border-radius: 20px; background-color: #f8f9fa;">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h3 class="fw-bold mb-4">Profile:</h3>
                <p class="text-secondary fw-bold mb-1">Username</p>
                <p class="text-secondary fw-4 mb-4">{user?.username}</p>
            </div>
            
            <div class="profile-image-wrapper">
                <img src="/favicon.png" alt="User Icon" class="profile-avatar shadow-sm">
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm p-4 p-md-5 mb-4" style="border-radius: 20px; background-color: #f8f9fa;">
        <h3 class="fw-bold mb-4">Change Password:</h3>
        
        <form id="passwordForm" bind:this={passwordFormElement} method="POST" action="?/changePassword" use:enhance={() => {
            return async ({ update }) => {
                await update();
                showPasswordModal = false;
            };
        }}>
            <div class="mb-4">
                <label class="form-label text-secondary fw-bold" for="currentPassword">Current Password</label>
                <input type="password" id="currentPassword" name="currentPassword" class="form-control" required>
            </div>
            
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label text-secondary" for="newPassword">New Password</label>
                    <input type="password" id="newPassword" name="newPassword" class="form-control" required>
                </div>
                <div class="col-md-6">
                    <label class="form-label text-secondary" for="confirmPassword">Confirm New Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" required>
                </div>
            </div>
            
            <button type="button" class="btn btn-dark px-4 py-2 fw-bold rounded-pill shadow-sm" onclick={openPasswordModal}>
                Update Password
            </button>
        </form>
    </div>

    <div class="card border-0 shadow-sm p-4 p-md-5 mb-5" style="border-radius: 20px; background-color: #f8f9fa;">
        <h3 class="fw-bold mb-4">Account Actions:</h3>
        <div>
            <p class="text-secondary mb-3">Leave your session securely.</p>
            <button class="btn btn-outline-danger px-4 py-2 fw-bold rounded-pill shadow-sm" onclick={openLogoutModal}>
                Log Out
            </button>
        </div>
    </div>
</div>

<style>
    .profile-image-wrapper {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile-avatar {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 15px;
        background-color: white;
        padding: 10px;
    }

    @media (max-width: 576px) {
        .profile-image-wrapper {
            width: 70px;
            height: 70px;
        }
    }
</style>