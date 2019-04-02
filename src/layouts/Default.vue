<template>
  <div class="layout">
      <nav class="flex items-center justify-between flex-wrap bg-primary p-6">
        <div class="flex items-center flex-no-shrink text-grey mr-6">
          <g-link class="font-semibold text-xl tracking-tight text-grey">Zachary Brooks</g-link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-grey border-teal-grey hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-white mr-4" to="/">Home</g-link>
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-white mr-4" to="/about">About</g-link>
            <g-link class="block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-white mr-4" to="/projects">Projects</g-link>
          </div>
        </div>
      </nav>
    <slot/>
  </div>
</template>

<style>
</style>
