<template>
  <v-app id="portfolio">
    <v-navigation-drawer class="primary" fixed app mobile-break-point="960">
      <v-layout fill-height justify-center align-center column py-4>
        <v-flex>
          <img src="/images/uploads/logo.svg" alt=""/>
          <div class="accent--text">{{ $static.metaData.siteName }}</div>
          <v-spacer></v-spacer>
          <div class="justify-center">
            <v-btn class="accent--text" flat to="/">Home</v-btn>
          </div>
          <div>
            <v-btn class="accent--text" flat to="/about">About</v-btn>
          </div>
          <div>
            <v-btn class="accent--text" flat to="/projects">My Work</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <slot></slot>
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
</style>
