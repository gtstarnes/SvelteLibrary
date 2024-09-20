<script lang="ts">
    import Add from "./Add.svelte";

    let mediaType = "";
</script>

<div>
    <h3>Add New Media Item</h3>
    <form>
        <div>
            <label for="title">Title: </label>
            <input id="title" name="title" type="text" />
        </div>
        <div>
            <label for="creator">Creator: </label>
            <input id="creator" name="creator" type="text" />
        </div>
        <div>
            <label for="type">Type: </label>
            <select name="type" id="type" bind:value={mediaType}>
                <option disabled>Media Type</option>
                <option value="Album">Album</option>
                <option value="Book">Book</option>
                <option value="Movie">Movie</option>
                <option value="TV Show">TV Show</option>
                <option value="Video Game">Video Game</option>
                <option value="Board Game">Board Game</option>
            </select>
        </div>
        <div>
            <label for="genre">Genre: </label>
            <fieldset>
                {#if mediaType === "TV Show" || mediaType === "Movie"}
                <div>
                    <input type="checkbox" name="ActionAdventure" id="ActionAdventure" />
                    <lable for="ActionAdventure">Action / Adventure</lable>
                    <input type="checkbox" name="Horror" id="Horror" />
                    <lable for="Horror">Horror</lable>
                    <input type="checkbox" name="Romance" id="Romance" />
                    <lable for="Romance">Romance</lable>
                    <input type="checkbox" name="Thriller" id="Thriller" />
                    <lable for="Thriller">Thriller</lable>
                    <input type="checkbox" name="Historical" id="Historical" />
                    <lable for="Historical">Historical</lable>
                    <input type="checkbox" name="Historical Fiction" id="Historical Fiction" />
                    <lable for="Historical Fiction">Historical Fiction</lable>
                    <input type="checkbox" name="Drama" id="Drama" />
                    <lable for="Drama">Drama</lable>
                    <input type="checkbox" name="ComicManga" id="ComicManga" />
                    <lable for="ComicManga">Animation / Anime</lable>
                    <input type="checkbox" name="Fantasy" id="Fantasy" />
                    <lable for="Fantasy">Fantasy</lable>
                </div>
                {:else if mediaType === "Album"}
                    <div>
                        <input type="checkbox" name="classical" id="classical" />
                        <label for="classical">Classical</label>
                        <input type="checkbox" name="Rock" id="Rock" />
                        <label for="Rock">Rock</label>
                        <input type="checkbox" name="Metal" id="Metal" />
                        <label for="Metal">Metal</label>
                        <input type="checkbox" name="Jazz" id="Jazz" />
                        <label for="Jazz">Jazz</label>
                        <input type="checkbox" name="Country" id="Country" />
                        <label for="Country">Country</label>
                        <input type="checkbox" name="Folk" id="Folk" />
                        <label for="Folk">Folk</label>
                        <input type="checkbox" name="Rap / Hip Hop" id="Rap / Hip Hop" />
                        <label for="Rap / Hip Hop">Rap / Hip Hop</label>
                        <input type="checkbox" name="Electronic" id="Electronic" />
                        <label for="Electronic">Electronic</label>
                    </div>
                {/if}
            </fieldset>
        </div>
        <div>
            <label for="">Release Year</label>
            <input type="number" />
        </div>
    </form>
    <div>
        <Add message="Add Media" />
        <Add message="Close" />
    </div>
</div>

<style>

</style>

