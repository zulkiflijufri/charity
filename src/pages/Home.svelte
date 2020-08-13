<script>
import CharityList from '../components/CharityList.svelte'

	let name = "Mari Berbagi"
	setTimeout(function() {
		name = "Mari Berdonasi"
	}, 2000);

	let charities = ['Charity 1', 'Charity 2', 'Charity 3'];
</script>

<main>
	<h1>{name}</h1>
	<CharityList />
	<CharityList {charities}/>
</main>

<style>
	main {
		/*text-align: center;*/
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		border: 0.5em solid #1a1a1a;
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