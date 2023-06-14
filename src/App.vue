<template>

  <header class="sticky top-0 z-40">
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


  <section class="dark:bg-gray-950 bg-slate-100 dark:text-gray-100" id="services">
		<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div class="mx-auto lg:mx-0 border-green-600 border border-spacing-1 gap-2 p-1 w-fit text-center mb-4">
          <span class="dark:text-white  py-0 px-5  w-fit text-3xl  font-bold leading-none sm:text-6xl">
            {{ t('services') }}
          </span>
        </div>
				<p class="mt-6 mb-8 text-lg sm:mb-12">
          {{ t('service_desc') }}
        </p>
			</div>
			<div class="grid grid-cols-1  p-6 mt-8 lg:mt-0 h-fit  w-full">      
        <article class="bg-gray-800 w-full p-4 h-fit shadow-lg rounded mb-2 hover:bg-gray-900 hover:shadow-2xl" itemscope itemtype="http://schema.org/Article">
          <h1 class="font-thin text-green-400 text-2xl drop-shadow-md" itemprop="headline">Front-End</h1>
          <p class="text-base font-thin mt-2" itemprop="description">{{ t('frontent_p') }}</p>
        </article>
        <article class="bg-gray-800 w-full p-4 h-fit shadow-lg rounded mb-2 hover:bg-gray-900 hover:shadow-2xl" itemscope itemtype="http://schema.org/Article">
          <h1 class="font-thin text-green-400 text-2xl drop-shadow-md" itemprop="headline">Backend-End</h1>
          <p class="text-base font-thin mt-2" itemprop="description">{{ t('backend_p') }}</p>
        </article>
        <article class="bg-gray-800 w-full p-4 h-fit shadow-lg rounded mb-2 hover:bg-gray-900 hover:shadow-2xl" itemscope itemtype="http://schema.org/Article">
          <h1 class="font-thin text-green-400 text-2xl drop-shadow-md" itemprop="headline">API</h1>
          <p class="text-base font-thin mt-2" itemprop="description">{{ t('api_p') }}</p>
        </article>
			</div>
		</div>
	</section>


  <footer class="bg-white shadow  dark:bg-gray-800" itemscope itemtype="http://schema.org/WPFooter" id="contacts">
  <div class="w-full mx-auto max-w-screen-xl p-4 md:flex justify-center md:items-center md:justify-between text-center md:text-left">
    <span class="text-sm text-gray-500 text-center dark:text-gray-400">Copyright © <span itemprop="publisher" itemscope itemtype="http://schema.org/Person">
    <strong itemprop="name">{{t('my_name')}}™</strong> {{ (new Date()).getFullYear() }} </span>
    {{ t('copyright') }}.</span>
    <ul class="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="tel:+258841710193" class="mr-4 hover:underline md:mr-6 grid items-center hover:text-cyan-500" aria-label="Call">
          <svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 16 16" fill="currentColor"><path fill="currentColor" d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path fill="currentColor" d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path fill="currentColor" d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></svg>
        </a>
        </li>
        <li>
        <a aria-label="Whatsapp" href="https://api.whatsapp.com/send/?phone=+258847607095&text=Hi!" class="mr-4 hover:underline md:mr-6 grid items-center hover:text-green-500">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill-rule="nonzero" d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"></path>
              </g>
          </svg>
        </a>
        </li>
        <li>
        <a aria-label="Email" href="mailto:nelsonmutane@gmail.com" class="mr-4 hover:underline md:mr-6 grid items-center hover:text-rose-500">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 7h3"></path>
  <path d="M3 11h2"></path>
  <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z"></path>
  <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982"></path>
</svg>
        </a>
        </li>
    </ul>

  </div>
</footer>

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
