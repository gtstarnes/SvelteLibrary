<script lang="ts">
    // component imports
    import Add from "./Add.svelte";
	import Genres from "./Genres.svelte";

    // type imports
    import type { MediaType } from "../types/types";

    // variables
    export let mediaType:MediaType = "Book"
    let mediaGenres:string[];
    let title:string
    let creator:string
    let release_year:number = 2024
    $: creatorVar = () => {
            switch (mediaType) {
                case "Album":
                    mediaGenres = [];
                    return "Composer / Band"
                case "Book":
                    mediaGenres = [];
                    return  "Author"
                case "Movie":
                    mediaGenres = [];
                case "TV Show":
                    mediaGenres = [];
                    return "Director"
                case "Video Game":
                    mediaGenres = [];
                    return "Production Company"
                default:
                    mediaGenres = [];
                    return "Creator"
            }
        }

    // functions
    const sortGenres = (genreList: string[]) => {
        return genreList.sort((a,b) => {
            return a.localeCompare(b)
        })
    }
</script>


<div>
    {#if mediaType === ""}
        <div>Please Select a type of media</div>
    {:else}
    <div>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" bind:value={title} required />
    </div>
    <div>
        <label for="creator">{creatorVar()}: </label>
        <input type="text" id="creator" name="creator" bind:value={creator} />
    </div>
    <div>
        <label for="year">Release Year:</label>
        <input type="number" id="year" name="year" bind:value={release_year} max=2024 />
    </div>
    <fieldset>
        <legend>Genres</legend>
        <Genres {mediaType} bind:mediaGenres />
    </fieldset>
    <div>{sortGenres(mediaGenres)}</div>
    <Add message="Add Media" />
    {/if}
</div>


<style>

</style>