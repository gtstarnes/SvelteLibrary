<script lang="ts">
    // object imports
    import { genres } from "../objects/genres";
    export let mediaType: keyof typeof genres;

    $: media = genres[mediaType];
</script>

<div class="container">
        {#each media as genre (genre)}
            <div class="item">
                <input type="checkbox" id={genre} name="genre" />
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