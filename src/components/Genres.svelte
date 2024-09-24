<script lang="ts">
    // object imports
    import { genres } from "../objects/genres";
    export let mediaType;

    $: media = genres[mediaType];
</script>

<div class="container">
    {#if mediaType === ""}
        <div></div>
    {:else}
        {#each media as genre (genre)}
            <div class="item">
                <input type="checkbox" id={genre} name="genre" />
                <label for={genre}>{genre}</label>
            </div>
        {/each}
    {/if}
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