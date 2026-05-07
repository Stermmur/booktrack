<script>
    // Wir nehmen 'goal' als bindable (für Two-Way-Binding) 
    // und 'actions' als Snippet für die Buttons entgegen
    let { goal = $bindable(), actions } = $props();
</script>

<div class="col-12">
    <label class="form-label fw-bold fs-4" for="title">Goal:</label>
    <input type="text" id="title" name="title" class="form-control form-control-lg border-dark" 
           bind:value={goal.title} placeholder='e.g., "Read 20 books in a Year"' required>
</div>

<div class="col-md-6">
    <div class="mb-4">
        <label class="form-label text-secondary" for="type">Type:</label>
        <select id="type" name="type" class="form-select border-dark" bind:value={goal.type}>
            <option value="Circle Checkbox">Circle Checkbox</option>
            <option value="Progress Bar">Progress Bar</option>
        </select>
    </div>
    
    <div class="row mb-4">
        <div class="col-6">
            <label class="form-label text-secondary" for="current_count">Current Progress:</label>
            <input type="number" id="current_count" name="current_count" 
                   class="form-control border-dark" bind:value={goal.current_count}>
        </div>
        <div class="col-6">
            <label class="form-label text-secondary" for="target_count">Target:</label>
            <input type="number" id="target_count" name="target_count" 
                   class="form-control border-dark" bind:value={goal.target_count} required>
        </div>
    </div>

    <div class="mb-4">
        <label class="form-label text-secondary" for="due_date">Due Date:</label>
        <input type="date" id="due_date" name="due_date" class="form-control border-dark" 
               bind:value={goal.due_date} required>
    </div>
</div>

<div class="col-md-6">
    <label class="form-label text-secondary" for="notes">Notes:</label>
    <textarea id="notes" name="notes" class="form-control border-dark" 
              style="height: 220px;" bind:value={goal.notes} placeholder="+ Add Text"></textarea>
</div>

<div class="col-12 d-flex gap-3 mt-4">
    {@render actions?.()}
</div>