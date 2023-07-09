<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRailTile, AppRailAnchor, AppRail, LightSwitch } from '@skeletonlabs/skeleton';

	let currentTile: number = 0;

	function setCurrentTile(theTile: number){
		currentTile = theTile;
	}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Tiket</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a href="/auth/login">
					<i class="fa-regular fa-user"></i> Login
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<!-- <svelte:fragment slot="lead">
				<AppRailAnchor href="/" >
					<i class="fa-solid fa-image text-2xl" />
				</AppRailAnchor>
			</svelte:fragment> -->
			<!-- --- -->
			<AppRailAnchor href="/booking" on:click={()=> setCurrentTile(0)}>
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
						<svelte:fragment slot="lead">
							<i class="fa-solid fa-plane text-2xl" />
						</svelte:fragment>
						<span>Booking</span>
				</AppRailTile>
			</AppRailAnchor>
			
			<AppRailAnchor href="/passengers" on:click={()=> setCurrentTile(1)}>
				<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
					<svelte:fragment slot="lead">
						<i class="fa-solid fa-person text-2xl" />
					</svelte:fragment>
					<span>Persons</span>
				</AppRailTile>
			</AppRailAnchor>

			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account"><i class="fa-solid fa-gear text-2xl" /></AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	
	<!-- Page Route Content -->
	<slot />
</AppShell>
