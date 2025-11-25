<template>
  <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="{
                    background: {
                        color: {
                            value: '#0d47a1'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
  >
    <div class="bg-slate-900">
      <div class="bg-white max-w-screen-lg h-full mx-auto min-h-screen">

      </div>
    </div>

  </vue-particles>

</template>
<script setup lang="ts">
import { useTranslation } from "i18next-vue";
const { t,i18next } = useTranslation();
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

</script>
