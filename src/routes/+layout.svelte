<script>
    import "./style.css";
    let { children } = $props();
</script>

<nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-light"
    data-bs-theme="light"
>
    <div class="container-fluid">
        <b><a class="navbar-brand" href="/">BOOK TRACK</a></b>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/currentread">Current Read</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/bookmarked">Bookmarked</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/myreads">My Reads</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/goals"
                        >Goals</a
                    >
                </li>
                 <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/books/addbook">Add Book</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/settings">Settings</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container mt-3">
    {@render children()}
</div>