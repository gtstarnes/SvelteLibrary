<script lang="ts">
    import {page} from '$app/stores'
	import { error } from '@sveltejs/kit';
</script>


<div>
    <h1>Oops. There was an error.</h1>
    <h3>{$page.status}: {$page.error?.message}</h3>
    <div><a href="/">Go back Home</a></div>
</div>