<script>
    import BookCard from '$lib/components/BookCard.svelte';
    let { data } = $props();
</script>

<div>
    <br>
    <h1 class="fw-bold display-5 mb-4 text-center text-lg-start text-decoration-none">Bookmarks:</h1>
</div>

<BookCard books={data.bookmarkedBooks} />