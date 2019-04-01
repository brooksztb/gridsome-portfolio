<template>
  <Layout>
    <h1>Hello, world!</h1>
  </Layout>
</template>

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

<style>
</style>
