<template>
  <div id="portfolio" class="font-body">
    <nav class="flex">
      <!--Menu icon-->
    </nav>
    <div class="fixed top-0 flex flex-col items-center justify-between w-l h-screen nav-bar">
      <div class="flex flex-col flex-wrap mx-auto items-center justify-center w-full px-8">
        <g-image class="logo" src="/images/uploads/logo.svg" alt />
        <g-link
          class="hover:bg-white hover:text-logo-gray text-white font-bold py-2 px-6 rounded inline-flex items-center justify-center w-full"
          to="/"
          active-class="border border-white"
          exact
        >
          <font-awesome class="mr-2" :icon="['fas', 'home']" size="lg" />
          <span>Home</span>
        </g-link>
        <g-link
          class="hover:bg-white hover:text-logo-gray text-white font-bold py-2 px-6 rounded inline-flex items-center justify-center w-full"
          to="/about"
          active-class="border border-white"
        >
          <font-awesome class="mr-2" :icon="['fas', 'user']" size="lg" />
          <span>About</span>
        </g-link>
        <g-link
          class="hover:bg-white hover:text-logo-gray text-white font-bold py-2 px-6 rounded inline-flex items-center justify-center w-full"
          to="/skills"
          active-class="border border-white"
        >
          <font-awesome class="mr-2" :icon="['fas', 'code']" size="lg" />
          <span>Skillset</span>
        </g-link>
        <g-link
          class="hover:bg-white hover:text-logo-gray text-white font-bold py-2 px-6 rounded inline-flex items-center justify-center w-full"
          to="/work"
          active-class="border border-white"
        >
          <font-awesome class="mr-2" :icon="['fas', 'project-diagram']" size="lg" />
          <span>Work</span>
        </g-link>
      </div>
      <div class="flex items-center justify-around mx-auto py-10 px-6 w-full">
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
    <div class="flex flex-1 items-center pl-xl py-5 h-full mx-auto bg-content-bg text-white">
      <slot></slot>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 300px;
  background: -webkit-linear-gradient(121deg, #292f35 50%, #84161b 50%);
  background: -o-linear-gradient(121deg, #292f35 50%, #84161b 50%);
  background: -moz-linear-gradient(121deg, #292f35 50%, #84161b 50%);
  background: linear-gradient(121deg, #292f35 50%, #84161b 50%);
}

.logo {
  width: 100%;
  height: 220px;
  padding: 20px;
}
</style>
