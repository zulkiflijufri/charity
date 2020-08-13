<script>
import CharityList from './CharityList.svelte'

	let name = "Mari Berbagi"
	setTimeout(function() {
		name = "Mari Berdonasi"
	}, 2000);
</script>

<main>
	<h1>{name}</h1>
	<CharityList />
</main>

<style>
	main {
		/*text-align: center;*/
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>