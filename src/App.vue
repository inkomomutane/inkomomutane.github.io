
<script setup lang="ts">
import { useTranslation } from "i18next-vue";
const { t } = useTranslation();
import { useHead } from '@vueuse/head'
import {onMounted} from "vue";
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import { Send,Linkedin,Github   } from 'lucide-vue-next';

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
onMounted(() => {
  const getParticleSettings = () => {
    const isMobile = window.innerWidth < 768;
    return {
      particles: {
        number: {
          value: 220,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: "#ffffff"
        },
        opacity: {
          value: 0.49,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 0.3,
            size_min: 0.5,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true, // Desativa movimento no mobile
          speed:  0.1,
          random: true,
          straight: false,
          out_mode: "out"
        }
      },
      retina_detect: false
    };
  };

  particlesJS("js-particles", getParticleSettings());

  window.addEventListener("resize", () => {
    particlesJS("js-particles", getParticleSettings());
  });

})

</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Background layer -->

    <div id="js-particles" class="absolute inset-0 -z-10"></div>
    <div class="absolute z-10 w-full opacity-80 animate-pulse " style="animation-duration: 10s;">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 450" opacity="0.46"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="150" ry="125.5" cx="207.0166654901799" cy="41.72063431070973" fill="hsla(167, 72%, 60%, 0.55)"></ellipse><ellipse rx="150" ry="125.5" cx="612.536461720109" cy="21.16634478461458" fill="hsla(167, 72%, 60%, 0.58)"></ellipse><ellipse rx="150" ry="125.5" cx="420.31604841715443" cy="129.05519104003906" fill="hsla(167, 72%, 60%, 0.50)"></ellipse></g></svg>
    </div>

    <!-- Content layer -->
    <div class="relative z-100  fixed h-screen overflow-y-scroll ">
      <div class="bg-white/5 max-w-screen-xl mx-auto  outline outline-1 outline-slate-700  p-8 " >
         <div class="p-5 flex flex-col">
           <Avatar class="w-24 h-24">
             <AvatarImage  src="https://media.licdn.com/dms/image/v2/D4D03AQHAGE_jhlU8YQ/profile-displayphoto-shrink_800_800/B4DZVghDFNHkAc-/0/1741081032162?e=1766016000&v=beta&t=ssPrQe0VJOu3ckkR0vXu8GWzj9N26MXUDkFUJo3JPPo" />
             <AvatarFallback>CN</AvatarFallback>
           </Avatar>

            <h1 class="text-5xl font-bold text-white  font-semibold text-2xl leading-[100%] font-['Lexend_Deca'] mt-4 ">Nelson Alexandre Mutane,</h1>
            <h2 class="text-xl font-semibold text-white ">IT + Software Engineer + Accounting learner @ Consul, Lda 🚀</h2>

           <p class="ms-0  text-md text-slate-300 mt-6 max-w-lg">
             Hi there! I'm Nelson Alexandre Mutane, IT, Software Engineer with more than 6 years of experience in software development from Mozambique.
           </p>

            <div class="mt-6 flex gap-4">
              <a href="https://linkedin.com/in/nelson-mutane" class="group -m-1 p-1 animate-fade-up animate-delay-[300ms]">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="size-6 fill-white/50 transition group-hover:fill-white/80"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
              </a>
              <a href="https://github.com/inkomomutane/" class="group -m-1 p-1 animate-fade-up animate-delay-[300ms]">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="size-6 fill-white/50 transition group-hover:fill-white/80"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                </a>
            </div>

           <div class="flex my-4 gap-4">
             <a target="_Email" href="mailto:nelsonmutane@gmail.com" class="flex h-9.5 px-4.5  gap-2 items-center text-sm justify-center rounded-full text-white bg-white/5 hover:bg-white/10 transition z-50 border border-slate-700/20 shadow-2xl transition group" as="a">
               <Send size="15"/>
               Send email
             </a>

             <a target="_WhatsApp" href="https://wa.me/+258847607095?text=Hi" class="flex h-9.5 px-4.5  gap-2 items-center text-sm justify-center rounded-full text-white bg-white/5 hover:bg-white/10 transition z-50 border border-slate-700/20 shadow-2xl transition group" as="a">
               <Send size="15"/>
               WhatsApp
             </a>
           </div>
         </div>
      </div>
    </div>

  </div>

</template>
