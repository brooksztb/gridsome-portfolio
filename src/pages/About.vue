<script>
export default {
  metaInfo: {
    title: 'About Me'
  }
}
</script>

<template>
  <Layout>
    <h1>{{$page.allAbout.edges[0].node.title}}</h1>
  </Layout>
</template>

<page-query>
query AboutPage {
  allAbout {
    edges {
      node {
        title
    		intro
      }
    }
  }
}
</page-query>