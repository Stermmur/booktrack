<script>
    import { page } from "$app/state";
    import { enhance } from "$app/forms";

    let { data, form } = $props();
    let books = $derived(data.books || []);
    let user = $derived(data.user);
    let isCreated = $derived(page.url.searchParams.get("success") === "true");
    let isDeleted = $derived(page.url.searchParams.get("deleted") === "true");
    let showLoginPrompt = $derived(
        page.url.searchParams.get("login") === "true",
    );

    let showAuthModal = $state(false);
    let isLoginMode = $state(true);
    let errorMessage = $state(null);

    $effect(() => {
        if (showLoginPrompt) {
            showAuthModal = true;
        }

        if (isCreated || isDeleted || showLoginPrompt) {
            const url = new URL(window.location.href);
            url.searchParams.delete("success");
            url.searchParams.delete("deleted");
            url.searchParams.delete("login");
            window.history.replaceState({}, "", url);
        }

        if (form?.error) {
            errorMessage = form.error;
        }
    });

    function toggleMode() {
        isLoginMode = !isLoginMode;
        errorMessage = null;
    }

    let repeatCount = $derived(books.length > 0 && books.length < 6 ? 4 : 1);
    let animationSpeed = $derived(books.length * repeatCount * 4);
</script>

<div class="container">
    {#if isCreated}
        <div
            class="alert alert-success text-center fw-bold mt-4 mx-auto shadow-sm"
            style="max-width: 500px; border-radius: 50px;"
        >
            Book successfully created!
        </div>
    {/if}

    {#if isDeleted}
        <div
            class="alert alert-warning text-center fw-bold mt-4 mx-auto shadow-sm"
            style="max-width: 500px; border-radius: 50px;"
        >
            Book successfully deleted!
        </div>
    {/if}
</div>

{#if showAuthModal && !user}
    <div class="auth-overlay">
        <div class="auth-box shadow-lg">
            <h3 class="fw-bold mb-4">{isLoginMode ? "Sign In" : "Sign Up"}</h3>

            {#if errorMessage}
                <div class="alert alert-danger py-2">{errorMessage}</div>
            {/if}

            <form
                method="POST"
                action={isLoginMode ? "?/login" : "?/register"}
                use:enhance={() => {
                    return async ({ update, result }) => {
                        await update();
                        if (result.type === "success") {
                            showAuthModal = false;
                        }
                    };
                }}
            >
                <div class="mb-3 text-start">
                    <label
                        class="form-label text-secondary fw-bold"
                        for="username">Username</label
                    >
                    <input
                        type="text"
                        id="username"
                        name="username"
                        class="form-control"
                        required
                    />
                </div>

                <div class="mb-3 text-start">
                    <label
                        class="form-label text-secondary fw-bold"
                        for="password">Password</label
                    >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control"
                        required
                    />
                </div>

                {#if !isLoginMode}
                    <div class="mb-4 text-start">
                        <label
                            class="form-label text-secondary fw-bold"
                            for="confirmPassword">Confirm Password</label
                        >
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            class="form-control"
                            required
                        />
                    </div>
                {/if}

                <button
                    type="submit"
                    class="btn btn-dark w-100 fw-bold py-2 mb-3"
                >
                    {isLoginMode ? "Sign In" : "Sign Up"}
                </button>
            </form>

            <button
                class="btn btn-link text-secondary text-decoration-none"
                onclick={toggleMode}
            >
                {isLoginMode
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
            </button>
            <br />
            <button
                class="btn btn-sm btn-outline-secondary mt-3"
                onclick={() => (showAuthModal = false)}>Cancel</button
            >
        </div>
    </div>
{/if}

<div class="text-center d-flex flex-column align-items-center mb-4">
    <br />
    <h2 class="fw-bold display-4 mb-3">Every great story deserves a place</h2>
    <h3 class="text-secondary mb-5">
        Start building your personal library today!
    </h3>

    <div>
        {#if user}
            <a
                class="btn btn-dark px-3 py-2 fs-4 shadow-sm"
                style="font-weight: 450;"
                id="addbookBtn"
                href="/books/addbook"
            >
                <span class="text">+Add Book</span>
            </a>

        {:else}
            <button
                class="btn btn-dark px-5 py-2 fs-4 shadow-sm fw-bold rounded-pill"
                onclick={() => (showAuthModal = true)}
            >
                Login
            </button>
        {/if}
    </div>
</div>

{#if !user}
    <div class="container mt-5 mb-5 pt-4">
        <div class="row g-4">
            <div class="col-md-4">
                <div
                    class="card h-100 border-0 shadow-sm p-4"
                    style="border-radius: 20px; background-color: #f8f9fa;"
                >
                    <div
                        class="d-flex justify-content-center align-items-center mb-4 icon-circle purple"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            class="bi bi-book"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.814 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.814 8.985.936 8 1.783"
                            />
                        </svg>
                    </div>
                    <h5 class="fw-bold">Track your current reads</h5>
                    <p class="text-secondary mb-0">
                        Keep track of the books you're reading and never lose
                        your place again.
                    </p>
                </div>
            </div>

            <div class="col-md-4">
                <div
                    class="card h-100 border-0 shadow-sm p-4"
                    style="border-radius: 20px; background-color: #f8f9fa;"
                >
                    <div
                        class="d-flex justify-content-center align-items-center mb-4 icon-circle green"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            class="bi bi-bookmark"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.582a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"
                            />
                        </svg>
                    </div>
                    <h5 class="fw-bold">Save books for later</h5>
                    <p class="text-secondary mb-0">
                        Bookmark books you want to read and build your personal
                        watchlist.
                    </p>
                </div>
            </div>

            <div class="col-md-4">
                <div
                    class="card h-100 border-0 shadow-sm p-4"
                    style="border-radius: 20px; background-color: #f8f9fa;"
                >
                    <div
                        class="d-flex justify-content-center align-items-center mb-4 icon-circle yellow"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            class="bi bi-bullseye"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            />
                            <path
                                d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
                            />
                            <path
                                d="M8 11A3 3 0 1 1 8 5a3 3 0 0 1 0 6m0 1A4 4 0 1 0 8 4a4 4 0 0 0 0 8"
                            />
                            <path
                                d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                            />
                        </svg>
                    </div>
                    <h5 class="fw-bold">Set reading goals</h5>
                    <p class="text-secondary mb-0">
                        Stay motivated by setting goals and tracking your
                        reading progress.
                    </p>
                </div>
            </div>
        </div>
    </div>
{/if}

{#if user && books.length > 0}
    <div class="carousel-container mt-4">
        <div
            class="carousel-track"
            style="animation-duration: {animationSpeed}s;"
        >
            <div class="carousel-items">
                {#each Array(repeatCount) as _, i}
                    {#each books as book}
                        <a href="/books/bookinfodemo?id={book._id}">
                            <img
                                src={book.cover_url}
                                alt="Book Cover"
                                class="book-cover"
                            />
                        </a>
                    {/each}
                {/each}
            </div>

            <div class="carousel-items" aria-hidden="true">
                {#each Array(repeatCount) as _, i}
                    {#each books as book}
                        <a href="/books/bookinfodemo?id={book._id}">
                            <img
                                src={book.cover_url}
                                alt="Book Cover"
                                class="book-cover"
                            />
                        </a>
                    {/each}
                {/each}
            </div>
        </div>
    </div>
{/if}

<div class="container text-center mt-5 pt-3 mb-5">
    <p class="fw-bold fs-5 text-dark">
        Your personal space to track what you read, what you want to read, and
        everything in between :)
    </p>
</div>

<style>
    .auth-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1050;
        backdrop-filter: blur(5px);
    }
    .auth-box {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        width: 100%;
        max-width: 400px;
        text-align: center;
    }

    .icon-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .purple {
        background-color: #f0edff;
        color: #5a4bda;
    }
    .green {
        background-color: #eaf5ee;
        color: #2e7d32;
    }
    .yellow {
        background-color: #fdf5e6;
        color: #b8860b;
    }

    .carousel-container {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        overflow: hidden;
        padding: 1rem 0;
    }
    .carousel-track {
        display: flex;
        width: max-content;
        animation-name: scroll;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .carousel-track:hover {
        animation-play-state: paused;
    }
    .carousel-items {
        display: flex;
        gap: 2rem;
        padding-right: 2rem;
    }
    .book-cover {
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
    }
    .book-cover:hover {
        transform: scale(1.03);
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
