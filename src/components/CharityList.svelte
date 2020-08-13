<script>
	export let charities;
</script>
<main>
	<h2>Daftar Charity</h2>
	{#if charities !== undefined}
	{#each charities as charity}
		<ul>
			<li>{charity.title} - {charity.profile_name}</li>
		</ul>
	{/each}
	{:else}
		<p>Charity not avalible</p>
	{/if}
</main>