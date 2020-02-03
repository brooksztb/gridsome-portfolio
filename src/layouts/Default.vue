<template>
	<div id="portfolio" class="font-body">
		<div
			class="fixed top-0 flex flex-col items-center justify-between h-screen nav-bar w-10 sm:w-15 md:w-20 lg:w-xl"
		>
			<div
				class="flex flex-col items-center justify-start mx-auto w-full px-6 md:px-8 md:h-full"
			>
				<g-image
					class="flex md:inline-flex w-full h-6 sm:h-8 md:h-16 lg:h-logo p-2 lg:pb-5"
					src="/uploads/logo.svg"
					alt
				/>
				<g-link
					class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
					to="/"
					active-class="border border-white"
					exact
				>
					<font-awesome class="mr-2" :icon="['fas', 'home']" size="lg" />
					<span>Home</span>
				</g-link>
				<g-link
					class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
					to="/about"
					active-class="border border-white"
				>
					<font-awesome class="mr-2" :icon="['fas', 'user']" size="lg" />
					<span>About</span>
				</g-link>
				<g-link
					class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
					to="/skills"
					active-class="border border-white"
				>
					<font-awesome class="mr-2" :icon="['fas', 'code']" size="lg" />
					<span>Skillset</span>
				</g-link>
				<g-link
					class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
					to="/work"
					active-class="border border-white"
				>
					<font-awesome
						class="mr-2"
						:icon="['fas', 'project-diagram']"
						size="lg"
					/>
					<span>Work</span>
				</g-link>
			</div>
			<div
				class="flex flex-col items-center md:flex-row justify-around md:mx-auto py-3 md:py-10 px-6 md:px-8 w-full"
			>
				<a
					href="https://twitter.com/zacann0n"
					target="_blank"
					title="Twitter Profile"
					class="text-white mx-2"
				>
					<font-awesome :icon="['fab', 'twitter']" size="lg" />
				</a>
				<a
					href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
					target="_blank"
					title="Linkedin Profile"
					class="text-white mx-2"
				>
					<font-awesome :icon="['fab', 'linkedin']" size="lg" />
				</a>
				<a
					href="https://github.com/brooksztb"
					target="_blank"
					title="Github Profile"
					class="text-white mx-2"
				>
					<font-awesome :icon="['fab', 'github']" size="lg" />
				</a>
				<a
					href="https://gitlab.com/Brooksztb"
					target="_blank"
					title="Gitlab Profile"
					class="text-white mx-2"
				>
					<font-awesome :icon="['fab', 'gitlab']" size="lg" />
				</a>
			</div>
		</div>
		<div
			class="flex flex-1 items-center pl-12 pr-2 lg:pl-xl lg:pr-5 py-5 h-full min-h-screen mx-auto bg-content-bg text-white"
		>
			<slot></slot>
		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	name: 'App',
};
</script>

<style lang="scss" scoped>
.nav-bar {
	background: -webkit-linear-gradient(121deg, #292f35 50%, #84161b 50%);
	background: -o-linear-gradient(121deg, #292f35 50%, #84161b 50%);
	background: -moz-linear-gradient(121deg, #292f35 50%, #84161b 50%);
	background: linear-gradient(121deg, #292f35 50%, #84161b 50%);
}
</style>
