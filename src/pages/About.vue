<template>
  <Layout>
    <time-line :data="$page.contentPage.history"></time-line>
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