<template>
  <v-app id="portfolio">
    <v-navigation-drawer class="nav-bar" fixed app mobile-break-point="960">
      <v-layout justify-center align-center column py-4>
        <v-flex>
          <img class="logo" src="/images/uploads/logo.svg" alt=""/>
          <v-spacer></v-spacer>
          <div>
            <v-btn class="base_text--text" flat to="/">Home</v-btn>
          </div>
          <div>
            <v-btn class="base_text--text" flat to="/about">About</v-btn>
          </div>
          <div>
            <v-btn class="base_text--text" flat to="/projects">My Work</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-container class="main-content" fluid fill-height>
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

<style scoped>
  .nav-bar {
    background: -webkit-linear-gradient(150deg, #292F35 50%, #84161B 50%);
    background: -o-linear-gradient(150deg, #292F35 50%, #84161B 50%);
    background: -moz-linear-gradient(150deg, #292F35 50%, #84161B 50%);
    background: linear-gradient(150deg, #292F35 50%, #84161B 50%);
  }

  .v-btn {
    display: flex;
  }

  .logo {
    width: 100%;
    height: 220px;
    padding: 20px;
  }

  .main-content {
    color: #FFFFFF;
    background-color: #1E1F26;
  }
</style>
