<template>
	<section>
		<ul>
			<g-link
				class="hover:opacity-100"
				v-for="post in posts"
				:key="post.node.title"
				:to="post.node.path"
			>
				<li
					class="flex md:flex-row flex-col justify-center md:min-h-px250 min-h-38 md:h-screen-1/3 mb-0 opacity-inherit"
				>
					<div class="w-full md:h-full h-screen-1/3 overflow-hidden bg-white">
						<g-image
							class="object-cover opacity-100 md:h-full min-h-full md:min-h-0 md:min-w-full md:w-auto transition-opacity duration-300 ease-in-out hover:opacity-80"
							:src="post.node.hero_image"
							:alt="post.node.title"
							width="300"
							height="300"
							quality="75"
						></g-image>
					</div>
					<div
						class="flex flex-col justify-center py-6 px-5 xl:p-12 border border-solid border-gray-300 md:min-w-70"
					>
						<h2
							class="font-display mb-2 md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
						>
							{{ post.node.title }}
						</h2>
						<h3
							class="mb-4 xl:mb-5 md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
						>
							{{ formatDate(post.node.date) }}
						</h3>
						<p
							class="font-body max-w-px900 text-gray-700 md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
							v-html="formatExcerpt(post.node.content)"
						></p>
					</div>
				</li>
			</g-link>
		</ul>
	</section>
</template>

<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	methods: {
		formatDate(date) {
			return new Date(date).toDateString().slice(4);
		},
		formatExcerpt(excerpt) {
			const blurb = excerpt.slice(3, 200).trim();
			return blurb.indexOf('</p>') !== -1
				? blurb.slice(0, blurb.indexOf('</p>')).trim() + '...'
				: blurb + '...';
		},
	},
};
</script>

<style lang="scss" scoped></style>
