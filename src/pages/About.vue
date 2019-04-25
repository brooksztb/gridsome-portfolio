<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
}
</script>

<template>
  <Layout>
    <h1>{{$page.contentPage.title}}</h1>
  </Layout>
</template>

<page-query>
query About {
  contentPage(path: "/src/content/pages/about") {
    title
  }
}
</page-query>