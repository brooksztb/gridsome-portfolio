<template>
  <Layout>
    <v-layout justify-start align-center>
      <v-flex>
        <div class="title-container">
          <h1 class="title-animated">Full Stack Developer, Front End Passion</h1>
        </div>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  mounted() {
    let netlifyScript = document.createElement("script");
    netlifyScript.setAttribute(
      "src",
      "https://identity.netlify.com/v1/netlify-identity-widget.js"
    );
    document.head.appendChild(netlifyScript);
  }
};
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.title-animated {
  position: relative;
  display: block;
  margin: 0;
  font-size: 4rem;
  line-height: 1;
  transform: translateY(6rem);
  animation: up 500ms linear forwards;
  z-index: 1;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 1);

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 0px;
    height: 1px;
    left: 0;
    background-color: rgba(34, 40, 49, 0.2);
    z-index: -1;
  }

  &::before {
    top: 1.4rem;
    animation: draw 500ms linear 1s forwards;
  }

  &::after {
    bottom: 0.4rem;
    animation: draw 500ms linear 1s forwards;
  }
}

.title-container {
  font-size: 0;
  position: relative;
  overflow: hidden;
  padding-bottom: 0.4rem;
}

@keyframes up {
  100% {
    transform: translateY(0);
  }
}

@keyframes draw {
  100% {
    width: 100%;
  }
}
</style>
