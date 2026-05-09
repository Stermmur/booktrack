<script>
    import { page } from '$app/state';
    let { data } = $props();
    let books = $derived(data.books);
    let isCreated = $derived(page.url.searchParams.get('success') === 'true');
    let isDeleted = $derived(page.url.searchParams.get('deleted') === 'true');

    $effect(() => {
        if (isCreated || isDeleted) {
            const url = new URL(window.location.href);
            url.searchParams.delete('success');
            url.searchParams.delete('deleted');
            window.history.replaceState({}, '', url);
        }
    });
</script>

<div class="container">
    {#if isCreated}
        <div class="alert alert-success text-center fw-bold mt-4 mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Book successfully created!
        </div>
    {/if}

    {#if isDeleted}
        <div class="alert alert-warning text-center fw-bold mt-4 mx-auto shadow-sm" style="max-width: 500px; border-radius: 50px;">
            Book successfully deleted!
        </div>
    {/if}
</div>

<div class="text-center d-flex flex-column align-items-center mb-4">
    <br />
    <h2 class="fw-bold display-4 mb-3">Every great story deserves a place</h2>
    <h3 class="text-secondary mb-5">
        Start building your personal library today!
    </h3>

    <div>
        <a class="btn btn-dark px-3 py-2 fs-4 shadow-sm" style="font-weight: 450;" id="addbookBtn" href="/books/addbook">
            <span class="text">+Add Book</span>
        </a>
    </div>
</div>

<div class="carousel-container">
    <div class="carousel-track">
        {#each books as book}
            <a href="/books/bookinfodemo?id={book._id}">
                <img src={book.cover_url} alt="Book Cover" class="book-cover" />
            </a>
        {/each}
        {#each books as book}
            <a href="/books/bookinfodemo?id={book._id}">
                <img src={book.cover_url} alt="Book Cover" class="book-cover" />
            </a>
        {/each}
    </div>
</div>

<div class="container text-center mt-4 mb-5">
    <p class="fw-bold fs-5">
        Your personal space to track what you read, what you want to read, and everything in between :)
    </p>
</div>

<style>
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
        animation: scroll 30s linear infinite;
        gap: 2rem;
        padding-left: 2rem;
    }
    .carousel-track:hover { animation-play-state: paused; }
    .book-cover {
        width: 200px; height: 300px; object-fit: cover;
        border-radius: 12px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
    }
    .book-cover:hover { transform: scale(1.03); }
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 1rem)); }
    }
</style>