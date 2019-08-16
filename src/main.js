// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import Vuetify from "vuetify";
import Vuetify from 'vuetify';
import DefaultLayout from "~/layouts/Default.vue";
import VueMq from "vue-mq";

import "vuetify/dist/vuetify.min.css";
// import "./assets/scss/main.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import "@mdi/font/css/materialdesignicons.css";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faCode,
  faProjectDiagram,
  faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faHome,
  faCode,
  faProjectDiagram,
  faUser
);

export default function(Vue, { appOptions, router, head, isClient }) {
  head.link.push(
    {
      rel: "stylesheet",
      href:
        "https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css"
    },
    {
      rel: "stylesheet",
      href:
        "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap"
    }
  );

  const opts = {
    dark: false,
    theme: {
      primary: "#84161B",
      base_text: "#FFFFFF",
      secondary: "#292F35",
      content_background: "#222831"
    },
    icons: {
      iconfont: "mdi"
    }
  };

  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  Vue.use(VueMq, {
    breakpoints: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
      xl: 1905
    }
  });
  Vue.component("font-awesome", FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
