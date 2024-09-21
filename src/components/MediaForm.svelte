<script lang="ts">
    // component imports
    import Add from "./Add.svelte";

    export let mediaType = "Book"
</script>


<div>
    {#if mediaType === ""}
        <div>Please Select a type of media</div>
    {:else}
    <div>
        <label for="title">Title:</label>
        <input type="text" required />
    </div>
    <div>
        <label for="year">Release Year:</label>
        <input type="number" max=2024 />
    </div>
    <Add message="Add Media" />
    {/if}
</div>


<style>

</style>