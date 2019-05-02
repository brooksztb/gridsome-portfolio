<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: true
    }
  }
}
</script>
<template>
  <v-app id="portfolio">
    <v-toolbar fixed flat dark class="hidden-md-and-up transparent">
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer fixed :persistent="$mq === 'md'" :temporary="$mq === 'sm'" class="nav-bar" mobile-break-point="800" app v-model="drawer">
      <v-layout fill-height justify-center align-center column py-4>
        <v-flex>
          <img class="logo" src="/images/uploads/logo.svg" alt=""/>
          <v-spacer></v-spacer>
          <div>
            <v-btn class="base_text--text" flat to="/">
              <font-awesome class="mr-2" :icon="['fas', 'home']" size="lg" /> Home
            </v-btn>
          </div>
          <div>
            <v-btn class="base_text--text" flat to="/about">
              <font-awesome class="mr-2" :icon="['fas', 'user']" size="lg" /> About
            </v-btn>
          </div>
          <div>
            <v-btn class="base_text--text" flat to="/skills">
              <font-awesome class="mr-2" :icon="['fas', 'code']" size="lg" /> Skillset
            </v-btn>
          </div>
          <div>
            <v-btn class="base_text--text" flat to="/work">
              <font-awesome class="mr-2" :icon="['fas', 'project-diagram']" size="lg" /> My Work
            </v-btn>
          </div>
        </v-flex>
        <div class="mt-auto">
          <div class="layout row my-4">
            <v-btn class="mx-2" flat icon href="https://twitter.com/zacann0n" color="white" title="Twitter Profile" target="_blank">
              <font-awesome :icon="['fab', 'twitter']" size="lg" />
            </v-btn>
            <v-btn class="mx-2" flat icon href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/" color="white" title="Linkedin Profile" target="_blank">
              <font-awesome :icon="['fab', 'linkedin']" size="lg" />
            </v-btn>
            <v-btn class="mx-2" flat icon href="https://github.com/brooksztb" color="white" title="Github Profile" target="_blank">
              <font-awesome :icon="['fab', 'github']" size="lg" />
            </v-btn>
          </div>
          <div class="my-4">
            
          </div>
          <div class="my-4">
            
          </div>
        </div>
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
    background: -webkit-linear-gradient(121deg, #292F35 50%, #84161B 50%);
    background: -o-linear-gradient(121deg, #292F35 50%, #84161B 50%);
    background: -moz-linear-gradient(121deg, #292F35 50%, #84161B 50%);
    background: linear-gradient(121deg, #292F35 50%, #84161B 50%);
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
    background-color: #222831;
    /* background-color: #1E1F26; Cant decide between the two background colors*/
  }
</style>
