<template>

  <header>
    <nav class="bg-slate-400 border-gray-200 dark:bg-gray-900">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      >
        <a
          itemprop="sameAs"
          :aria-label="t('my_name') + '- Portfólio'"
          href="/"
          class="flex items-center"
        >
          <img
            src="./assets/me.svg"
            class="h-8 mr-3 bg-slate-200 rounded-full"
            :alt="t('my_name') + ' logo'"
            width="32"
            height="32"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white hidden sm:flex"
            >{{ t('my_short_name') }}</span
          >
        </a>
        <div class="flex items-center text-white">
          <a
            itemprop="sameAs"
            itemscope
            itemtype="http://schema.org/Person"
            :aria-label="'LinkedIn - ' + t('my_name')"
            href="https://www.linkedin.com/in/nelson-mutane"
            target="_blank"
            rel="noopener noreferrer"
            class="shadow-sm mx-2"
          >
            <svg
              class="w-6 h-6 hover:fill-slate-100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>LinkedIn</title>
              <path
                d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"
              ></path>
            </svg>
          </a>
          <a
            itemprop="sameAs"
            itemscope
            itemtype="http://schema.org/Person"
            href="https://github.com/inkomomutane"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="'Github - '+  t('my_name')"
            class="shadow-sm mx-2"
          >
            <svg
              class="w-6 h-6 hover:fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <title>Github</title>
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <a
            itemprop="sameAs"
            itemscope
            itemtype="http://schema.org/Person"
            href="mailto:nelsonmutane@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="'Email - ' + t('my_name')"
            class="shadow-sm mx-2"
          >
            <svg
              class="w-6 h-6 hover:fill-slate-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
            >
              <title>Email</title>
              <path
                d="M4 3C2.89543 3 2 3.89543 2 5V5.2013L8.0001 8.43212L14 5.20141V5C14 3.89543 13.1046 3 12 3H4ZM14 6.33716L8.23715 9.44024C8.08916 9.51992 7.91104 9.51992 7.76305 9.44024L2 6.33706V11C2 12.1046 2.89543 13 4 13H12C13.1046 13 14 12.1046 14 11V6.33716Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>

          <button
            id="dropdownLocaleButton"
            data-dropdown-toggle="dropdownLocale"
            class="inline-flex items-center text-sm font-medium"
            type="button"
          >
            <svg
              class="w-6 h-6 hover:fill-slate-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="m11.4277 13.9986 1.572-3.538 1.573 3.538zm6.486 2.594-4-9c-.161-.361-.518-.594-.914-.594-.395 0-.753.233-.914.594l-1.958 4.406h-.12801c-1.276 0-2.24-.299-2.965-.716.004-.005.008-.007.012-.012 1.292-1.443 1.777-3.536 1.941-5.272h1.012c.55301 0 1.00001-.448 1.00001-1s-.447-1-1.00001-1h-.942c-.01499-.63-.058-1.051-.064-1.11-.06-.548-.543-.938-1.103-.884-.549.061-.944.555-.885 1.103.001.013.03501.359.05001.891h-4.05601c-.552 0-1 .448-1 1s.448 1 1 1h3.981c-.144 1.37-.516 2.921-1.42 3.934-.425-.606-.576-1.125-.592-1.183-.137-.532-.676-.856-1.211-.721-.536.134-.862.677-.727 1.213.118.474.373 1.071.778 1.679-.254.05-.522.078-.809.078-.552 0-1 .448-1 1s.448 1 1 1c.856 0 1.628-.16 2.321-.467.962.734 2.253 1.303 3.932 1.435l-1.167 2.626c-.223.505.003 1.095.508 1.32.506.227 1.097-.003 1.32-.508l.62501-1.406h4.922l.625 1.406c.166.373.531.594.915.594.136 0 .274-.027.406-.086.504-.225.731-.815.507-1.32z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdownLocale"
            class="z-20 hidden max-w-sm bg-white divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700"
            aria-labelledby="dropdownLocaleButton"
          >
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
              <button
                @click="changeLanguageSelection('en')"
                class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div class="w-max">
                  <div class="text-xs text-blue-600 dark:text-blue-500">EN</div>
                </div>
              </button>
            </div>
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
              <button
                
                @click="changeLanguageSelection('pt')"
                class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div class="w-max">
                  <div class="text-xs text-blue-600 dark:text-blue-500">PT</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="bg-gray-200 dark:bg-gray-700">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
              <a
                itemprop="sameAs"
                itemscope
                itemtype="http://schema.org/WebPage"
                :aria-label="t('my_name')+' - '+ t('services')"
                href="#services"
                class="text-gray-900 dark:text-white hover:underline"
                aria-current="page"
                >{{ t('services')}}</a
              >
            </li>
            <li>
              <a
                itemprop="sameAs"
                itemscope
                itemtype="http://schema.org/WebPage"
                :aria-label="t('my_short_name') + '-' + t('works')"
                href="#works"
                class="text-gray-900 dark:text-white hover:underline"
                >{{t('works')}}</a
              >
            </li>
            <li>
              <a
                itemprop="sameAs"
                itemscope
                itemtype="http://schema.org/WebPage"
                :aria-label="t('my_short_name') + '-' + t('notes')"
                href="#notes"
                class="text-gray-900 dark:text-white hover:underline"
                >{{t('notes')}}</a
              >
            </li>
            <li>
              <a
                itemprop="sameAs"
                itemscope
                itemtype="http://schema.org/WebPage"
                :aria-label="t('my_short_name') + '-' + t('contacts')"
                href="#contacts"
                class="text-gray-900 dark:text-white hover:underline"
                >{{ t('contacts')}}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section class="dark:bg-gray-800 bg-slate-100 dark:text-gray-100">
		<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div class="mx-auto lg:mx-0 border-green-600 border border-spacing-1 gap-2 p-1 w-fit text-center mb-4">
          <span class="dark:text-white  p-2 text-base font-semibold bg-green-400 w-fit">
            Full-Stack-Developer
          </span>
        </div>
				<h1 class="text-5xl  font-bold leading-none sm:text-6xl">{{ t('my_short_name') }}</h1>
				<p class="mt-6 mb-8 text-lg sm:mb-12">
          {{ t('description') }}
        </p>
			</div>
			<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="./assets/me.webp" alt="Nelson Alexandre Mutane picture" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full">
			</div>
		</div>
	</section>



</template>
<script setup lang="ts">
import { Dropdown } from "flowbite";
import { onMounted } from "vue";
import { useTranslation } from "i18next-vue";
import { ref } from "vue";
import { watch } from "vue";
const { t,i18next } = useTranslation();
import collect from 'collect.js';
import { useHead } from '@vueuse/head'

useHead({
  title: t('my_name'),
  meta: [
    {
      name: 'description',
      content: t('description'),
    },
    {
      name: 'image',
      content: 'https://inkomomutane.github.io/me.webp',
    },
    {
      property : 'og:title',
      content :  t('my_name')
    },
    {
      property : 'og:description',
      content :  t('description')
    },
    {
      property : 'og:type',
      content :  'website'
    },
    {
      property : 'og:image',
      content :  'https://inkomomutane.github.io/me.webp'
    },
    {
      property : 'og:url',
      content :  'https://inkomomutane.github.io'
    },
    {
      property : 'og:site:name',
      content :  t('my_name') + ' - Portfolio'
    },
    {
      property : 'og:locale',
      content :  'en'
    },
    {
      property : 'og:locale:alternate',
      content :  'pt'
    },
  ],
})





const lang = ref<string>('en');
const ptCountryCodes = collect(['PT', 'BR', 'CV', 'GW', 'MZ', 'ST', 'TL', 'AO', 'MO', 'GQ']);

 function changeLanguageSelection(lang:string){
     i18next.changeLanguage(lang);
 }

onMounted(async () => {
  addEventListener("DOMContentLoaded", function () {
    const targetEl = document.getElementById("dropdownLocale");
    const triggerEl = document.getElementById("dropdownLocaleButton");
    console.log(targetEl);
    const dropdown = new Dropdown(targetEl, triggerEl);
    dropdown.hide(); 
  });

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        getLanguageCode(data.country);
      } catch (error) {
        console.error(error);
      }

});

function getLanguageCode(code:string){
  if(ptCountryCodes.contains(code)){
    i18next.changeLanguage('pt');
  }else{
    i18next.changeLanguage('en');    
  }
}

watch(() => lang.value,() => {
  console.log(lang.value);
  i18next.changeLanguage(lang.value);
});




</script>
