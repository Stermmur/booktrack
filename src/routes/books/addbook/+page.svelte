<script>
    import BookLayout from '$lib/components/BookLayout.svelte';

    let { form } = $props();
    
    let rating = $state(0);
    let status = $state("");
    let finishing_date = $state("");
    let coverPreview = $state(null);

    const genres = ["Romance", "Thriller/Horror", "Fantasy", "Non-Fiction", "Biography", "Literary Fiction", "YA", "Sci-Fi"];

    $effect(() => {
        if (status === "read") {
            if (!finishing_date) {
                const date = new Date();
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0'); // Monat als Zahl (01-12)
                const year = date.getFullYear();
                finishing_date = `${year}-${month}-${day}`; // Format YYYY-MM-DD für Datepicker
            }
        }
    });

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) coverPreview = URL.createObjectURL(file);
    }
</script>

{#if form?.success}
    <div class="alert alert-success text-center fw-bold mt-3 mx-auto" style="max-width: 500px;">
        Book successfully created!
    </div>
{/if}

<div>
    <br>
    <h1 class="fw-bold display-5 mb-0 text-center text-lg-start text-decoration-none">New Book:</h1>
</div>

<form method="POST" action="?/create" enctype="multipart/form-data">
    <BookLayout bind:rating={rating} readonly={false}>
        <input type="hidden" name="rating" value={rating} />

        <div class="mb-2">
            <label class="form-label fw-bold mb-0" for="title">Title:</label>
            <input id="title" name="title" type="text" class="form-control fw-bold" required>
        </div>
        
        <div class="mb-2">
            <label class="form-label fw-bold mb-0" for="author">Author:</label>
            <input id="author" name="author" type="text" class="form-control fw-bold">
        </div>
        

        <div class="mb-2">
            <label class="form-label text-secondary mb-0" for="genre">Genre:</label>
            <select id="genre" name="genre" class="form-control" required>
                <option value="" disabled selected>Select a Genre...</option>
                {#each genres as genre}
                    <option value={genre}>{genre}</option>
                {/each}
            </select>
        </div>
        
        <div class="mb-2">
            <label class="form-label text-secondary mb-0" for="release_date">Released:</label>
            <input id="release_date" name="release_date" type="date" class="form-control">
        </div>
        
        <div class="mb-2">
            <label class="form-label text-secondary mb-0" for="notes">Notes:</label>
            <textarea id="notes" name="notes" class="form-control" rows="3"></textarea>
        </div>

        <div class="mb-2">
            <label class="form-label text-secondary mb-0" for="status">Status:</label>
            <select id="status" name="status" class="form-control" bind:value={status} required>
                <option value="" disabled selected>choose Status</option>
                <option value="bookmarked">Bookmarked</option>
                <option value="reading">Currently Reading</option>
                <option value="read">Read (Finished)</option>
            </select>
        </div>
        
        <div class="mb-2">
            <label class="form-label text-secondary mb-0" for="finishing_date">Finishing Date:</label>
            <input id="finishing_date" name="finishing_date" type="date" class="form-control" bind:value={finishing_date}>
        </div>

        {#snippet actions()}
            <div class="d-flex gap-3">
                <button type="submit" class="btn btn-dark px-5 py-2 fw-bold">Save</button>
                <a href="/" class="btn btn-outline-dark px-5 py-2 fw-bold">Cancel</a>
            </div>
        {/snippet}

        {#snippet cover()}
            <div class="book-cover-placeholder" style={coverPreview ? `background-image: url(${coverPreview}); background-size: cover; border: none;` : ''}>
                {#if !coverPreview}
                    <span class="text-muted">Upload Cover</span>
                {/if}
                <input type="file" name="bookcover" accept="image/*" class="form-control form-control-sm mt-auto" onchange={handleFileChange} >
            </div>
        {/snippet}
    </BookLayout>
</form>

<style>
    .book-cover-placeholder {
        width: 100%; max-width: 350px; aspect-ratio: 2 / 3;
        background-color: #e0e0e0; display: flex; flex-direction: column;
        justify-content: center; align-items: center; border-radius: 8px; padding: 15px;
    }
</style>