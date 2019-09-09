<template>
  <Layout>
    <div class="flex-wrap">
      <div class="max-w-sm lg:w-4/5 lg:max-w-full lg:flex">
        <img
          class="w-full h-full rounded mr-4"
          src="/images/uploads/file_000.jpeg"
          alt="Avatar of Zach Brooks"
        />
        <div
          class="border rounded border-white-400 p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-2">
            <div class="text-white font-bold text-xl mb-2">
              {{ $page.contentPage.title }}
            </div>
            <p class="text-white">{{ $page.contentPage.description }}</p>
          </div>
        </div>
      </div>
      <time-line :data="$page.contentPage.history"></time-line>
    </div>
  </Layout>
</template>

<page-query>
query About {
  contentPage(path: "/src/content/pages/about") {
    title,
    intro,
    description,
    history {
      descriptor,
      infoItems,
      start,
      end,
      title,
      location
    }
  }
}
</page-query>

<script>
import TimeLine from "@/components/TimeLine.vue";

export default {
  metaInfo: {
    title: "About Me"
  },
  components: {
    TimeLine
  }
};
</script>