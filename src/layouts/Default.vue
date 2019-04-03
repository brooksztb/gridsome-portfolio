<template>
  <v-app>
    <v-navigation-drawer class="primary" dark fixed>
      <v-list>
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
  <v-container>
    <slot></slot>
  </v-container>
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
