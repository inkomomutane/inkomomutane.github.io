import { ViteSSG } from 'vite-ssg/single-page'
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import 'flowbite'
import './style.css'
import App from './App.vue';
import { en } from './locales/en';
import { pt } from './locales/pt';

const locales = {
  en : {
    translation :en
  },
  pt : {
    translation :pt
  },
};

i18next.init({
  lng : 'en',
  resources : locales
 });

// export const createApp = ViteSSG(App);

 export const createApp =  ViteSSG(App,({app}) => {
    app.use(I18NextVue, { i18next });
});