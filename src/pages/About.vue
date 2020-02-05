<template>
	<layout>
		<div class="flex-wrap">
			<div class="max-w-sm lg:w-4/5 lg:max-w-full lg:flex">
				<img
					class="w-full h-full rounded mr-4"
					:src="$page.content.photo"
					alt="Avatar of Zach Brooks"
				/>
				<div
					class="border rounded border-white-400 p-4 flex flex-col justify-between leading-normal"
				>
					<div class="mb-2">
						<div class="text-white font-bold text-xl mb-2">
							{{ $page.content.title }}
						</div>
						<p class="text-white">{{ $page.content.personal_description }}</p>
					</div>
				</div>
			</div>
			<time-line :data="$page.content.personal_history"></time-line>
		</div>
	</layout>
</template>

<page-query>
query getAboutPageData {
  content(path: "/about") {
    title,
    intro,
    photo,
    personal_description,
    personal_history {
      title,
      work_title,
      history_info {
        description
      },
      start_date,
      end_date,
      location
    }
  }
}
</page-query>

<script>
import TimeLine from '@/components/TimeLine.vue';

export default {
	metaInfo: {
		title: 'About Me',
	},
	components: {
		TimeLine,
	},
};
</script>
