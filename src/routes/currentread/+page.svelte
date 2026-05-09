<script>
    import { page } from "$app/state";
    import { enhance } from '$app/forms'; 
    import BookLayout from '$lib/components/BookLayout.svelte';
    import Modal from '$lib/components/Modal.svelte';

    let { data } = $props();
    let books = $derived(data.books || []); 
    
    let isUpdated = $derived(page.url.searchParams.get("updated") === "true");

    $effect(() => {
        if (isUpdated) {
            const url = new URL(window.location.href);
            url.searchParams.delete("updated");
            window.history.replaceState({}, "", url);
        }
    });

    let showFinishedModal = $state(false);
    let activeBook = $state(null);

    function openFinishedModal(bookToFinish) { 
        activeBook = bookToFinish;
        showFinishedModal = true;
    }
    
    function closeFinishedModal() { 
        showFinishedModal = false;
        activeBook = null;
    }

    function formatNiceDate(dateString) {
        if (!dateString || dateString === "Open" || dateString === "-") {
            return dateString;
        }
        const date = new Date(dateString);
        if (isNaN(date)) return dateString;
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }
</script>

<div>
    <br>
    <h1 class="fw-bold display-5 mb-0 text-center text-lg-start text-decoration-none">Currently reading:</h1>
</div>

<div class="container mt-3">
    {#if isUpdated}
        <div class="alert alert-info text-center fw-bold mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Book successfully updated!
        </div>
    {/if}
</div>

{#if showFinishedModal && activeBook}
    <Modal
        title="Are you finished reading?"
        description="This will mark the book as read and set today's date."
        >
        {#snippet actions()}
            <form method="POST" action="?/finishBook" use:enhance={() => {
                return async ({ update }) => {
                    showFinishedModal = false;
                    activeBook = null;
                    await update(); 
                };
            }}>
                <input type="hidden" name="bookId" value={activeBook._id} />
                <button type="submit" class="btn btn-dark px-4 py-2 fw-bold rounded-pill">Yes</button>
            </form>

            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closeFinishedModal}>
                No, cancel
            </button>
        {/snippet}
    </Modal>
{/if}

{#if books.length > 0}
    {#each books as book, index}
        <BookLayout bind:rating={book.rating}>
            <h2 class="fw-bold mb-2 text-decoration-none">Title: {book.title}</h2>
            <h3 class="fw-bold mb-3 text-decoration-none">Author: {book.author || "Unknown Author"}</h3>
            
            <p class="text-secondary fs-6 mb-1 text-decoration-none">Genre: {book.genre}</p>
            
            <p class="text-secondary fs-6 mb-3 text-decoration-none">
                Released: {formatNiceDate(book.release_date || "-")}
            </p>
           
            <p class="text-secondary fs-6 mb-0 text-decoration-none">Notes:</p>
            <p class="text-secondary fs-6 mb-4 text-decoration-none" style="line-height: 1.5;">
                {book.notes || "+ Add Text"}
            </p>
            
            <p class="text-secondary fs-6 mb-1 text-decoration-none">Status: {book.status}</p>
            
            <p class="text-secondary fs-6 mb-3 text-decoration-none">
                Finishing Date: {formatNiceDate(book.finishing_date || "Open")}
            </p>

            {#snippet actions()}
                <div class="d-flex gap-3">
                    <a href="/books/editbook?id={book._id}&from=/currentread" class="btn btn-dark px-4 py-2 fw-bold text-decoration-none">
                        Edit
                    </a>

                    <button type="button" class="btn btn-outline-dark px-4 py-2 fw-bold text-decoration-none" onclick={() => openFinishedModal(book)}>
                        Finished
                    </button>
                </div>
            {/snippet}

            {#snippet cover()}
                <img src={book.cover_url} alt="Cover" class="book-cover-large" />
            {/snippet}
        </BookLayout>

        {#if index < books.length - 1}
            <hr class="my-5" style="border-color: #e0e0e0; border-width: 2px;" />
        {/if}
    {/each}

{:else}
    <div class="container text-center mt-5">
        <br><br><br><br><br>
        <h2 class="fw-bold mb-3">You are not reading any book right now.</h2>
        <p class="text-secondary fs-5 mb-4">Go to your library and pick up your next great story!</p>
        <br>
  
        <a href="/bookmarked" class="btn btn-dark px-4 py-2 fs-5 shadow-sm fw-bold">Go to library</a>
    </div>
{/if}