<template>
<div id="portfolio" class="font-body">
  <header
    class="fixed top-0 flex flex-col items-center justify-between h-screen nav-bar w-10 md:w-15 lg:w-px300 xl:w-px320"
  >
    <div
      class="flex flex-col items-center justify-start mx-auto w-full pt-0 md:pt-9 px-0 lg:px-8 md:h-full"
    >
      <g-link to="/">
        <g-image
          class="flex md:inline-flex w-full h-6 sm:h-8 md:h-16 lg:h-logo p-2 lg:pb-5"
          src="/uploads/logo.svg"
          alt="zachary brooks logo"
        />
      </g-link>

      <g-link
        class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
        to="/about"
        active-class="border border-white"
      >
        <font-awesome class="lg:mr-2" :icon="['fas', 'user']" size="lg" />
        <span class="hidden lg:block">About</span>
      </g-link>
      <g-link
        class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
        to="/blog"
        active-class="border border-white"
      >
        <font-awesome class="lg:mr-2" :icon="['fas', 'newspaper']" size="lg" />
        <span class="hidden lg:block">Blog</span>
      </g-link>
      <g-link
        class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
        to="/skills"
        active-class="border border-white"
      >
        <font-awesome class="lg:mr-2" :icon="['fas', 'code']" size="lg" />
        <span class="hidden lg:block">Skillset</span>
      </g-link>
      <g-link
        class="flex md:inline-flex items-center justify-center hover:bg-white hover:text-logo-gray text-white font-bold my-1 py-2 lg:px-6 rounded w-full"
        to="/work"
        active-class="border border-white"
      >
        <font-awesome class="lg:mr-2" :icon="['fas', 'project-diagram']" size="lg" />
        <span class="hidden lg:block">Work</span>
      </g-link>
    </div>
    <div
      class="flex flex-col items-center lg:flex-row justify-around md:mx-auto py-8 lg:py-10 px-4 lg:px-8 w-full"
    >
      <a
        href="https://github.com/brooksztb"
        target="_blank"
        title="Github Profile"
        class="text-white mx-2 my-2 lg:my-0"
      >
        <font-awesome :icon="['fab', 'github']" size="lg" />
      </a>
      <a
        href="https://dev.to/zacann0n"
        target="_blank"
        title="Dev.to Profile"
        class="text-white mx-2 my-2 lg:my-0"
      >
        <font-awesome :icon="['fab', 'dev']" size="lg" />
      </a>
      <a
        href="https://twitter.com/zacann0n"
        target="_blank"
        title="Twitter Profile"
        class="text-white mx-2 my-2 lg:my-0"
      >
        <font-awesome :icon="['fab', 'twitter']" size="lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
        target="_blank"
        title="Linkedin Profile"
        class="text-white mx-2 my-2 lg:my-0"
      >
        <font-awesome :icon="['fab', 'linkedin']" size="lg" />
      </a>
    </div>
  </header>
  <body
    class="flex flex-1 items-center pl-12 pr-2 lg:pl-px320 xl:pl-px340 lg:pr-5 py-5 h-full min-h-screen mx-auto bg-content-bg text-white"
  >
    <slot></slot>
  </body>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.nav-bar {
  background: -webkit-linear-gradient(121deg, #292f35 50%, #84161b 50%);
  background: -o-linear-gradient(121deg, #292f35 50%, #84161b 50%);
  background: -moz-linear-gradient(121deg, #292f35 50%, #84161b 50%);
  background: linear-gradient(121deg, #292f35 50%, #84161b 50%);
}
</style>
