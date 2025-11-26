import {ViteSSG} from 'vite-ssg/single-page'
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import 'flowbite'
import './style.css'
import App from './App.vue';
import {en} from './locales/en';
import {pt} from './locales/pt'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import Particles from "@tsparticles/vue3";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import {loadSlim} from "@tsparticles/slim";
// if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
const locales = {
    en: {
        translation: en
    },
    pt: {
        translation: pt
    },
};

i18next.init({
    lng: 'en',
    resources: locales
});

// export const createApp = ViteSSG(App);

export const createApp = ViteSSG(App, ({app}) => {
    app.use(I18NextVue, {i18next})
        // .use(Particles, {
        //     init : async  ( engine : any) => {
        //         // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        //         await loadFull(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
        //     },
        // });
});