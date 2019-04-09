<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  mounted() {
    let netlifyScript = document.createElement('script');
    netlifyScript.setAttribute('src', 'https://identity.netlify.com/v1/netlify-identity-widget.js');
    document.head.appendChild(netlifyScript);
  }
}
</script>

<template>
  <Layout>
    <v-layout justify-start align-center>
    <v-flex>
      <h1>Hello, world!</h1>
    </v-flex>
  </v-layout>
  </Layout>
  
</template>

<style>
</style>
