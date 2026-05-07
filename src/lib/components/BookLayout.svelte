<script>
        let { 
        title, 
        children, 
        cover, 
        actions, 
        rating = $bindable(0), 
        readonly = true
    } = $props();

    function setRating(stars) {
        if (!readonly) {
            rating = stars;
        }
    }
</script>

<div class="container page-wrapper">
    <h1 class="fw-bold display-5 mb-4 text-center text-lg-start text-decoration-none">{title}</h1>

    <div class="row gx-5 align-items-center">
        <div class="col-lg-6 mb-3 mb-lg-0 d-flex flex-column justify-content-center">
            
            {@render children()}
            <p class="text-secondary fs-6 mb-0 mt-2 text-decoration-none">Rating:</p>
            <div class="rating-stars mb-4" class:readonly>
                {#each [1, 2, 3, 4, 5] as star}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span 
                        class="star {star <= rating ? 'filled' : ''}" 
                        onclick={() => setRating(star)}
                    >
                        ★
                    </span>
                {/each}
            </div>

            {#if actions}
                {@render actions()}
            {/if}
        </div>

        <div class="col-lg-6 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
            {#if cover}
                {@render cover()}
            {/if}
        </div>
    </div>
</div>

<style>
    .page-wrapper {
        max-width: 1100px;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 3rem;
    }

    @media (min-width: 992px) {
        .page-wrapper { 
            min-height: calc(100vh - 130px); 
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
        }
    }

    .rating-stars {
        font-size: 2.2rem;
        user-select: none;
        display: inline-block;
    }
    
    .rating-stars:not(.readonly) { cursor: pointer; }
    .rating-stars:not(.readonly) .star:hover ~ .star { color: #e0e0e0 !important; }
    .rating-stars:not(.readonly):hover .star { color: #666666; }

    .star { color: #e0e0e0; transition: color 0.2s ease; }
    .star.filled { color: #000000; }
</style>