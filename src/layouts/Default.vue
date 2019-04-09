<template>
  <v-app id="portfolio">
    <v-navigation-drawer class="primary" fixed app mobile-break-point="960">
      <v-list>
        <v-list-tile-content>
          <img src="static/images/uploads/logo.png" />
        </v-list-tile-content>
        <v-list-tile-content>
          <div class="accent--text">{{ $static.metaData.siteName }}</div>
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <v-list-tile-content>
          <v-btn class="accent--text" flat to="/">Home</v-btn>
        </v-list-tile-content>
        <v-list-tile-content>
          <v-btn class="accent--text" flat to="/about">About</v-btn>
        </v-list-tile-content>
        <v-list-tile-content>
          <v-btn class="accent--text" flat to="/projects">My Work</v-btn>
        </v-list-tile-content>
      </v-list>
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
