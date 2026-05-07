<script>
    import { goto } from '$app/navigation';
    import { enhance } from '$app/forms'; 
    import BookLayout from '$lib/components/BookLayout.svelte';

    let { data } = $props();
    let book = $derived(data.book);

    let showFinishedModal = $state(false);

    function openFinishedModal() { showFinishedModal = true; }
    function closeFinishedModal() { showFinishedModal = false; }
</script>

{#if showFinishedModal && book}
    <div class="modal-overlay">
        <div class="modal-box">
            <h3 class="fw-bold mb-3">Are you finished reading?</h3>
            <p class="fs-6 mb-4 text-secondary">This will mark the book as read and set today's date.</p>
            
            <div class="d-flex justify-content-center gap-3">
                
                <form method="POST" action="?/finishBook" use:enhance={() => {
                    return async ({ update }) => {
                        showFinishedModal = false; 
                        await update(); 
                        book = data.book; 
                    };
                }}>
                    <input type="hidden" name="bookId" value={book._id} />
                    <button type="submit" class="btn btn-dark px-4 py-2 fw-bold">Yes</button>
                </form>

                <button class="btn btn-outline-dark px-4 py-2 fw-bold" onclick={closeFinishedModal}>
                    No, cancel
                </button>
            </div>
        </div>
    </div>
{/if}

{#if book}
    <BookLayout title="Currently reading:" bind:rating={book.rating}>
        <h2 class="fw-bold mb-2 text-decoration-none">Title: {book.title}</h2>
        <h3 class="fw-bold mb-3 text-decoration-none">Author: {book.author || "Unknown Author"}</h3>
        <p class="text-secondary fs-6 mb-1 text-decoration-none">Genre: {book.genre}</p>
        <p class="text-secondary fs-6 mb-3 text-decoration-none">Released: {book.release_date}</p>
        <p class="text-secondary fs-6 mb-0 text-decoration-none">Notes:</p>
        <p class="text-secondary fs-6 mb-4 text-decoration-none" style="line-height: 1.5;">{book.notes || "+ Add Text"}</p>
        <p class="text-secondary fs-6 mb-1 text-decoration-none">Status: {book.status}</p>
        <p class="text-secondary fs-6 mb-3 text-decoration-none">Finishing Date: {book.finishing_date || "Open"}</p>

        {#snippet actions()}
            <div class="d-flex gap-3">
                <a href="/books/editbook?id={book._id}" class="btn btn-dark px-4 py-2 fw-bold text-decoration-none">
                    Edit
                </a>

                <button type="button" class="btn btn-outline-dark px-4 py-2 fw-bold text-decoration-none" onclick={openFinishedModal}>
                    Finished
                </button>
            </div>
        {/snippet}

        {#snippet cover()}
            <img src={book.cover_url} alt="Cover" class="book-cover-large" />
        {/snippet}

    </BookLayout>

{:else}
    <br>
    <h1 class="fw-bold display-5 mb-4 text-center text-lg-start text-decoration-none">Currently reading:</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container text-center mt-5">
        <h2 class="fw-bold mb-3">You are not reading any book right now.</h2>
        <p class="text-secondary fs-5 mb-4">Go to your library and pick up your next great story!</p>
        <br>
        <a href="/bookmarked" class="btn btn-dark px-4 py-2 fs-5 shadow-sm fw-bold">Go to library</a>
    </div>
{/if}

<style>
    .book-cover-large {
        width: 100%; max-width: 350px; height: auto;
        aspect-ratio: 2 / 3; object-fit: cover;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2); border-radius: 8px;
    }

    .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: rgba(0, 0, 0, 0.6); display: flex;
        justify-content: center; align-items: center; z-index: 1050; 
        backdrop-filter: blur(3px); 
    }
    
    .modal-box { 
        background: white; padding: 2.5rem; border-radius: 12px; max-width: 450px; text-align: center; 
    }

    @media (min-width: 992px) {
        .book-cover-large { height: clamp(300px, 65vh, 700px); width: auto; }
    }
</style>