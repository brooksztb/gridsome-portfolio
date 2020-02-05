// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './assets/css/global.css';

import DefaultLayout from '~/layouts/Default.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
	faGithub,
	faDev,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
	faNewspaper,
	faCode,
	faProjectDiagram,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faGithub,
	faDev,
	faTwitter,
	faLinkedin,
	faCode,
	faProjectDiagram,
	faUser,
	faNewspaper,
);

export default function(Vue, { appOptions, router, head, isClient }) {
	head.link.push(
		{
			rel: 'stylesheet',
			href:
				'https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css',
		},
		{
			rel: 'stylesheet',
			href:
				'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',
		},
		{
			rel: 'stylesheet',
			href:
				'https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap',
		},
	);

	Vue.component('font-awesome', FontAwesomeIcon);
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
}
