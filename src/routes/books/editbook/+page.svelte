<script>
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
    import BookLayout from "$lib/components/BookLayout.svelte";

    let { data } = $props();
    let book = $derived(data.book);

    const genres = [
        "Romance",
        "Thriller/Horror",
        "Fantasy",
        "Non-Fiction",
        "Biography",
        "Literary Fiction",
        "YA",
        "Sci-Fi",
    ];

    $effect(() => {
        if (book.status === "read") {
            if (
                !book.finishing_date ||
                book.finishing_date === "Open" ||
                book.finishing_date === "Not finished yet"
            ) {
                const date = new Date();
                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const year = date.getFullYear();
                book.finishing_date = `${year}-${month}-${day}`;
            }
        }
    });

    function cancelEdit() {
        goto(`/books/bookinfodemo?id=${book._id}`);
    }
</script>

<form method="POST" use:enhance>
    <input type="hidden" name="bookId" value={book._id} />
    <input type="hidden" name="rating" value={book.rating} />

    <BookLayout title="Edit Book:" bind:rating={book.rating} readonly={false}>
        <div class="mb-2">
            <label
                class="form-label fw-bold mb-0 text-decoration-none"
                for="title">Title</label
            >
            <input
                id="title"
                name="title"
                type="text"
                class="form-control fw-bold"
                bind:value={book.title}
            />
        </div>

        <div class="mb-2">
            <label
                class="form-label fw-bold mb-0 text-decoration-none"
                for="author">Author</label
            >
            <input
                id="author"
                name="author"
                type="text"
                class="form-control fw-bold"
                bind:value={book.author}
            />
        </div>

        <div class="mb-2">
            <label
                class="form-label text-secondary mb-0 text-decoration-none"
                for="genre">Genre</label
            >
            <select
                id="genre"
                name="genre"
                class="form-control"
                bind:value={book.genre}
            >
                <option value="" disabled selected={!book.genre}
                    >Select a Genre...</option
                >
                {#each genres as genre}
                    <option value={genre}>{genre}</option>
                {/each}
            </select>
        </div>

        <div class="mb-2">
            <label
                class="form-label text-secondary mb-0 text-decoration-none"
                for="release_date">Released</label
            >
            <input
                id="release_date"
                name="release_date"
                type="date"
                class="form-control"
                bind:value={book.release_date}
            />
        </div>

        <div class="mb-2">
            <label
                class="form-label text-secondary mb-0 text-decoration-none"
                for="status">Status</label
            >
            <select
                id="status"
                name="status"
                class="form-control"
                bind:value={book.status}
            >
                <option value="bookmarked">Bookmarked</option>
                <option value="reading">Currently Reading</option>
                <option value="read">Read (Finished)</option>
            </select>
        </div>

        <div class="mb-2">
            <label
                class="form-label text-secondary mb-0 text-decoration-none"
                for="notes">Notes</label
            >
            <textarea
                id="notes"
                name="notes"
                class="form-control"
                rows="4"
                bind:value={book.notes}
            ></textarea>
        </div>

        <div class="mb-2">
            <label
                class="form-label text-secondary mb-0 text-decoration-none"
                for="finishing_date">Finishing Date</label
            >
            <input
                id="finishing_date"
                name="finishing_date"
                type="date"
                class="form-control"
                bind:value={book.finishing_date}
            />
        </div>

        {#snippet actions()}
            <div class="d-flex gap-3">
                <button
                    type="submit"
                    class="btn btn-dark px-5 py-2 fw-bold text-decoration-none"
                >
                    Save
                </button>
                <button
                    type="button"
                    class="btn btn-outline-dark px-5 py-2 fw-bold text-decoration-none"
                    onclick={cancelEdit}
                >
                    Cancel
                </button>
            </div>
        {/snippet}

        {#snippet cover()}
            <img
                src={book.cover_url}
                alt="Cover Preview"
                class="book-cover-preview"
            />
        {/snippet}
    </BookLayout>
</form>

<style>
    .book-cover-preview {
        width: 100%;
        max-width: 350px;
        height: auto;
        aspect-ratio: 2 / 3;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 992px) {
        .book-cover-preview {
            height: clamp(300px, 65vh, 700px);
            width: auto;
            max-width: 100%;
        }
    }
</style>
