<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>
<main>
  <h1>Svelte Remote 5</h1>
  <button on:click={handleClick}>
	clicks: {count}
</button>
</main>
