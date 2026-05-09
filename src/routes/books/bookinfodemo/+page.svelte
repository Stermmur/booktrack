<script>
    import { page } from "$app/state";
    import BookLayout from "$lib/components/BookLayout.svelte";
    import Modal from "$lib/components/Modal.svelte";

    let { data } = $props();
    let book = $derived(data.book);
    let showDeleteModal = $state(false);
    let isUpdated = $derived(page.url.searchParams.get("updated") === "true");

    $effect(() => {
        if (isUpdated) {
            const url = new URL(window.location.href);
            url.searchParams.delete("updated");
            window.history.replaceState({}, "", url);
        }
    });

    function openDeleteModal() {
        showDeleteModal = true;
    }
    function closeDeleteModal() {
        showDeleteModal = false;
    }
</script>

<div class="container mt-3">
    {#if isUpdated}
        <div class="alert alert-info text-center fw-bold mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Book successfully updated!
        </div>
    {/if}
</div>

{#if showDeleteModal}
    <Modal 
        title="Delete Book?" 
        description="Are you sure you want to permanently delete this book?"
    >
        {#snippet actions()}
            <form method="POST" action="?/deleteBook">
                <input type="hidden" name="bookId" value={book._id} />
                <button type="submit" class="btn btn-danger px-4 py-2 fw-bold rounded-pill">Yes, delete</button>
            </form>
            <button class="btn btn-outline-dark px-4 py-2 fw-bold rounded-pill" onclick={closeDeleteModal}>No, cancel</button>
        {/snippet}
    </Modal>
{/if}

<BookLayout title="Book Details:" bind:rating={book.rating}>
    <h2 class="fw-bold mb-2 text-decoration-none">Title: {book.title}</h2>
    <h3 class="fw-bold mb-3 text-decoration-none">
        Author: {book.author || "Unknown author"}
    </h3>
    <p class="text-secondary fs-6 mb-1 text-decoration-none">
        Genre: {book.genre}
    </p>
    <p class="text-secondary fs-6 mb-3 text-decoration-none">
        Released: {book.release_date || "-"}
    </p>
    <p class="text-secondary fs-6 mb-0 text-decoration-none">Notes:</p>
    <p class="text-secondary fs-6 mb-3 text-decoration-none" style="line-height: 1.5;">
        {book.notes || "No notes added."}
    </p>
    <p class="text-secondary fs-6 mb-1 text-decoration-none">
        Status: {book.status || "-"}
    </p>
    <p class="text-secondary fs-6 mb-3 text-decoration-none">
        Finishing Date: {book.finishing_date || "Open"}
    </p>

    {#snippet actions()}
        <div class="d-flex gap-3">
            <a href="/books/editbook?id={book._id}" class="btn btn-dark px-4 py-2 fw-bold text-decoration-none">Edit</a>
            <button class="btn btn-outline-dark px-4 py-2 fw-bold text-decoration-none" onclick={openDeleteModal}>Delete</button>
        </div>
    {/snippet}

    {#snippet cover()}
        <img src={book.cover_url} alt="Cover" class="book-cover-large" />
    {/snippet}
</BookLayout>

<style>
    @media (min-width: 992px) {
        .book-cover-large {
            height: clamp(300px, 65vh, 700px);
            width: auto;
        }
    }
</style>