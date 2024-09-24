<script lang="ts">
    //component imports
    import Add from "./Add.svelte";
	import MediaForm from "./MediaForm.svelte";

    let mediaType = "";
</script>

<div>
    <h3>Add New Media Item</h3>
    <form>        
        <div>
            <label for="type">Type: </label>
            <select name="type" id="type" bind:value={mediaType}>
                <option disabled>Media Type</option>
                <option value="Album">Album</option>
                <option value="Book">Book</option>
                <option value="Movie">Movie</option>
                <option value="TV Show">TV Show</option>
                <option value="Video Game">Video Game</option>
            </select>
        </div>
        <MediaForm {mediaType} />
    </form>
    <div>
        <Add message="Close" />
    </div>
</div>

<style>

</style>

