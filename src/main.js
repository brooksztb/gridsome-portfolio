// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify';
import DefaultLayout from '~/layouts/Default.vue';

import 'vuetify/dist/vuetify.min.css';
import './stylus/main.styl';

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i' 
  });

  Vue.use(Vuetify, {
    theme: {
      primary: '#84161B',
      base_text: '#FFFFFF',
      background: '#1E1F26',
      content: '#292F35'
    }
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
