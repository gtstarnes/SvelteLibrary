<script lang="ts">
    // component imports
    import Add from "./Add.svelte";
	import Genres from "./Genres.svelte";

    export let mediaType = "Book"

 $: creator = () => {
        switch (mediaType) {
            case "Album":
                return "Composer / Band"
            case "Book":
                return  "Author"
            case "Movie":
            case "TV Show":
                return "Director"
            case "Video Game":
                return "Production Company"
            default:
                return "Creator"
        }
    }
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
        <label for="creator">{creator()}: </label>
        <input type="text" />
    </div>
    <div>
        <label for="year">Release Year:</label>
        <input type="number" max=2024 />
    </div>
    <fieldset>
        <legend>Media Genre</legend>
        <Genres {mediaType}/>
    </fieldset>
    <Add message="Add Media" />
    {/if}
</div>


<style>

</style>