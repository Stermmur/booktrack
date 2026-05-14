<script>
    import { enhance } from '$app/forms';
    import Modal from '$lib/components/Modal.svelte';
    
    let { data, form } = $props();
    let user = $derived(data.user);
    let readCount = $derived(data.readCount || 0);
    let currentReadCount = $derived(data.currentReadCount || 0);
    let watchlistCount = $derived(data.watchlistCount || 0);
    let genreCounts = $derived(data.genreCounts || {});
    let totalGenreCount = $derived(Object.values(genreCounts).reduce((sum, count) => sum + count, 0));

const chartColors = [
    '#FFB7B2', 
    '#FF9AA2', 
    '#FFAFCC', 
    '#FFC8DD', 
    '#F1CBFF', 
    '#BDB2FF', 
    '#C7CEEA', 
    '#BDE0FE', 
    '#A2D2FF', 
    '#A0C4FF', 
    '#B5EAD7', 
    '#E2F0CB', 
    '#CCD5AE', 
    '#FFF5BA', 
    '#FAEDCD', 
    '#FFDAC1' 
];

    let pieChartGradient = $derived((() => {
        if (totalGenreCount === 0) return 'transparent';
        let gradientSegments = [];
        let currentPercent = 0;
        let colorIndex = 0;
        
        const sortedEntries = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
        
        for (const [genre, count] of sortedEntries) {
            const percent = (count / totalGenreCount) * 100;
            const nextPercent = currentPercent + percent;
            const color = chartColors[colorIndex % chartColors.length];
            
            gradientSegments.push(`${color} ${currentPercent}% ${nextPercent}%`);
            currentPercent = nextPercent;
            colorIndex++;
        }
        
        return `conic-gradient(${gradientSegments.join(', ')})`;
    })());

    let showLogoutModal = $state(false);
    let showPasswordModal = $state(false);
    let passwordFormElement;

    function openLogoutModal() { showLogoutModal = true; }
    function closeLogoutModal() { showLogoutModal = false; }

    function openPasswordModal() {
        if (passwordFormElement.checkValidity()) {
            showPasswordModal = true;
        } else {
            passwordFormElement.reportValidity();
        }
    }
    function closePasswordModal() { showPasswordModal = false; }
</script>

{#if showLogoutModal}
    <Modal title="Log Out?" description="Are you sure you want to log out of your account?">
        {#snippet actions()}
            <form method="POST" action="?/logout" use:enhance>
                <button type="submit" class="btn btn-danger px-4 py-2 fw-bold rounded-pill">Yes, log out</button>
            </form>
            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closeLogoutModal}>No, cancel</button>
        {/snippet}
    </Modal>
{/if}

{#if showPasswordModal}
    <Modal title="Change Password?" description="Are you sure you want to definitely change your password?">
        {#snippet actions()}
            <button type="submit" form="passwordForm" class="btn btn-dark px-4 py-2 fw-bold rounded-pill">Yes, change it</button>
            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closePasswordModal}>No, cancel</button>
        {/snippet}
    </Modal>
{/if}

<div>
    <br>
    <h1 class="fw-bold display-5 mb-4 text-center text-lg-start text-decoration-none">Settings:</h1>
</div>

<div class="container mt-5 mb-5" style="max-width: 800px;">
    {#if form?.success}
        <div class="alert alert-success text-center fw-bold shadow-sm mb-4" style="border-radius: 15px;">{form.message}</div>
    {/if}
    {#if form?.error}
        <div class="alert alert-danger text-center fw-bold shadow-sm mb-4" style="border-radius: 15px;">{form.error}</div>
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
        <h3 class="fw-bold mb-4">My Library Stats:</h3>
        
        <div class="row text-center mb-5">
            <div class="col-4 border-end">
                <h4 class="display-6 fw-bold text-dark">{watchlistCount}</h4>
                <p class="text-secondary mb-0 small">On Watchlist</p>
            </div>
            <div class="col-4 border-end">
                <h4 class="display-6 fw-bold text-dark">{currentReadCount}</h4>
                <p class="text-secondary mb-0 small">Current Reads</p>
            </div>
            <div class="col-4">
                <h4 class="display-6 fw-bold text-dark">{readCount}</h4>
                <p class="text-secondary mb-0 small">Books Read</p>
            </div>
        </div>

        <h5 class="fw-bold mb-4">Genres in your library:</h5>
        {#if totalGenreCount > 0}
            <div class="d-flex flex-column flex-md-row align-items-center gap-5">
                <div class="pie-chart shadow-sm" style="background: {pieChartGradient};"></div>
                
                <div class="legend d-flex flex-column gap-2">
                    {#each Object.entries(genreCounts).sort((a, b) => b[1] - a[1]) as [genre, count], i}
                        <div class="d-flex align-items-center gap-3">
                            <span class="color-box shadow-sm" style="background-color: {chartColors[i % chartColors.length]};"></span>
                            <span class="text-secondary fw-bold small" style="min-width: 110px;">{genre}:</span>
                            <span class="text-dark fw-bold small">
                                {count} <span class="text-muted fw-normal">({Math.round((count / totalGenreCount) * 100)}%)</span>
                            </span>
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <p class="text-secondary">No books found to generate statistics.</p>
        {/if}
    </div>

    <div class="card border-0 shadow-sm p-4 p-md-5 mb-4" style="border-radius: 20px; background-color: #f8f9fa;">
        <h3 class="fw-bold mb-4">Data Management:</h3>
        <p class="text-secondary mb-4 small">Export your library data to a CSV file for backup or external use.</p>
        
        <a href="/settings/export" download="booktrack_export.csv" data-sveltekit-reload class="btn btn-dark px-4 py-2 fw-bold rounded-pill shadow-sm d-inline-flex align-items-center gap-2" style="width: fit-content;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Export Library to CSV
        </a>
    </div>

    <div class="card border-0 shadow-sm p-4 p-md-5 mb-4" style="border-radius: 20px; background-color: #f8f9fa;">
        <h3 class="fw-bold mb-4">Change Password:</h3>
        <form id="passwordForm" bind:this={passwordFormElement} method="POST" action="?/changePassword" use:enhance={() => {
            return async ({ update }) => { await update(); showPasswordModal = false; };
        }}>
            <div class="mb-4">
                <label class="form-label text-secondary fw-bold small" for="currentPassword">Current Password</label>
                <input type="password" id="currentPassword" name="currentPassword" class="form-control" required>
            </div>
            <div class="row g-3 mb-4">
                <div class="col-md-6">
                    <label class="form-label text-secondary small" for="newPassword">New Password</label>
                    <input type="password" id="newPassword" name="newPassword" class="form-control" required>
                </div>
                <div class="col-md-6">
                    <label class="form-label text-secondary small" for="confirmPassword">Confirm New Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" required>
                </div>
            </div>
            <button type="button" class="btn btn-dark px-4 py-2 fw-bold rounded-pill shadow-sm" onclick={openPasswordModal}>Update Password</button>
        </form>
    </div>

    <div class="card border-0 shadow-sm p-4 p-md-5 mb-5" style="border-radius: 20px; background-color: #f8f9fa;">
        <h3 class="fw-bold mb-4">Account Actions:</h3>
        <div>
            <p class="text-secondary mb-3 small">Leave your session securely.</p>
            <button class="btn btn-outline-danger px-4 py-2 fw-bold rounded-pill shadow-sm" onclick={openLogoutModal}>Log Out</button>
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

    .pie-chart {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .color-box {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        display: inline-block;
    }

    @media (max-width: 576px) {
        .profile-image-wrapper {
            width: 70px;
            height: 70px;
        }
        
        .pie-chart {
            width: 150px;
            height: 150px;
        }
    }
</style>