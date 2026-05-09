<script>
    let { books = [] } = $props();

    const genres = [
        "Biography",
        "Children's",
        "Classics",
        "Crime",
        "Fantasy",
        "Fiction",
        "History",
        "Literary Fiction",
        "Manga",
        "Non-Fiction",
        "Poetry",
        "Psychology",
        "Romance",
        "Sci-Fi",
        "Thriller/Horror",
        "YA",
    ];
    let currentSearchTerm = $state("");
    let currentGenre = $state("");
    let filteredBooks = $derived(
        books
            .filter((book) => {
                const titleToSearch = book.title
                    ? book.title.toLowerCase()
                    : "";
                const matchesSearch = titleToSearch.includes(
                    currentSearchTerm.toLowerCase(),
                );
                const matchesGenre =
                    currentGenre === "" || book.genre === currentGenre;

                return matchesSearch && matchesGenre;
            })
            .sort((a, b) => {
                const titleA = a.title || "";
                const titleB = b.title || "";
                return titleA.localeCompare(titleB);
            }),
    );
</script>

<div class="container my-5" style="max-width: 900px;">
    <div class="search-container">
        <input
            type="text"
            bind:value={currentSearchTerm}
            class="form-control search-input"
            placeholder="Which book are you looking for?"
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
            bind:value={currentGenre}
        >
            <option value="">All Genres</option>

            {#each genres as genre}
                <option value={genre}>{genre}</option>
            {/each}
        </select>
    </div>

    <div class="divider">
        <span>{currentGenre === "" ? "All Genres" : currentGenre}</span>
    </div>

    <div class="row g-5">
        {#if filteredBooks.length === 0}
            <div class="col-12 text-center text-muted mt-5">
                No books found!
            </div>
        {:else}
            {#each filteredBooks as book}
                <div class="col-12 col-md-6">
                    <div class="book-card">
                        <a href="/books/bookinfodemo?id={book._id}">
                            <img
                                src={book.cover_url}
                                alt={book.title}
                                class="book-cover"
                            />
                        </a>

                        <div
                            class="d-flex justify-content-between align-items-start mt-2"
                        >
                            <div>
                                <h3 class="book-title">
                                    <a
                                        href="/books/bookinfodemo?id={book._id}"
                                        class="text-dark"
                                    >
                                        {book.title}
                                    </a>
                                </h3>
                                <div class="book-author">
                                    {book.author || "Unknown author"}
                                </div>
                            </div>

                            <div
                                class="book-meta d-flex flex-column align-items-end"
                            >
                                <span>{book.genre}</span>
                                {#if book.rating}
                                    <div class="d-flex align-items-center mt-1">
                                        <span>{book.rating}</span>
                                        <span class="ms-1">★</span>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>

<style>
    .search-container {
        background-color: #e9ecef;
        border-radius: 8px;
        padding: 5px 15px;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
    }

    .search-input {
        background: transparent;
        border: none;
        box-shadow: none;
        font-weight: 500;
    }

    .search-input:focus {
        background: transparent;
        box-shadow: none;
        outline: none;
    }

    .divider {
        position: relative;
        text-align: center;
        margin: 2rem 0;
    }

    .divider::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        background-color: #dee2e6;
        z-index: 1;
    }

    .divider span {
        background-color: #fff;
        padding: 0 15px;
        position: relative;
        z-index: 2;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .book-card {
        border: none;
        background: transparent;
    }

    .book-title {
        font-weight: bold;
        text-decoration: underline;
        font-size: 1.05rem;
        margin-bottom: 0.2rem;
    }

    .book-title a {
        color: inherit;
        text-decoration: inherit;
    }

    .book-author {
        color: #666;
        font-size: 0.9rem;
    }

    .book-meta {
        font-size: 0.8rem;
        color: #888;
        text-align: right;
    }
</style>
