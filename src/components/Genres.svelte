<script lang="ts">
    // object imports
    import { genres } from "../objects/genres";
    export let mediaType: keyof typeof genres;

    $: media = genres[mediaType];
    export let mediaGenres: string[] = [];
</script>

<div class="container">
        {#each media as genre (genre)}
            <div class="item">
                <input type="checkbox" id={genre} name="genre" value={genre} bind:group={mediaGenres} />
                <label for={genre}>{genre}</label>
            </div>
        {/each}
</div>


<style>
 .container {
    display: grid;
    grid-template-columns: auto auto auto;
 }
 .item input, label {
    cursor: pointer;
 }
</style>