<script>
    let { title, description, actions } = $props();
</script>

<div class="modal-overlay">
    <div class="modal-box shadow-lg">
        <h3 class="fw-bold mb-3">{title}</h3>
        <p class="fs-5 mb-4 text-secondary text-decoration-none">{description}</p>
        
        <div class="d-flex justify-content-center gap-3">
            {@render actions()}
        </div>
    </div>
</div>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1050;
        backdrop-filter: blur(3px);
    }
    .modal-box {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        max-width: 450px;
        text-align: center;
    }
</style>