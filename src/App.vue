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
				<p class="mt-6 mb-0 lg:mb-8 text-lg sm:mb-12">
          {{ t('description') }}
        </p>
			</div>
			<div class="flex items-center justify-center p-6 mt-0 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
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
  <section class="grid  justify-items-center py-4 bg-slate-100 dark:bg-gray-500 overflow-x-scroll overflow-ellipsis">
    <div class="grid justify-items-center grid-cols-4 md:grid-cols-5 lg:grid-cols-8 px-10">
    <div class="mx-4 mb-4 lg:mb-0">
      <svg class="w-10 h-10" height="383.5975" id="svg3430" version="1.1" viewBox="0 0 711.20123 383.5975" width="711.20123" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg">
        <title id="title3510">Official PHP Logo</title>
        <metadata id="metadata3436">
          <rdf:RDF>
            <cc:Work rdf:about="">
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
              <dc:title>Official PHP Logo</dc:title>
              <dc:creator>
                <cc:Agent>
                  <dc:title>Colin Viebrock</dc:title>
                </cc:Agent>
              </dc:creator>
              <dc:description/>
              <dc:contributor>
                <cc:Agent>
                  <dc:title/>
                </cc:Agent>
              </dc:contributor>
              <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/3.0/"/>
              <dc:rights>
                <cc:Agent>
                  <dc:title>Copyright Colin Viebrock 1997 - All rights reserved.</dc:title>
                </cc:Agent>
              </dc:rights>
              <dc:date>1997</dc:date>
            </cc:Work>
            <cc:License rdf:about="http://creativecommons.org/licenses/by-sa/3.0/">
              <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>
              <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>
              <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"/>
              <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"/>
              <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>
              <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"/>
            </cc:License>
          </rdf:RDF>
        </metadata>
        <defs id="defs3434">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3444">
            <path d="M 11.52,162 C 11.52,81.677 135.307,16.561 288,16.561 l 0,0 c 152.693,0 276.481,65.116 276.481,145.439 l 0,0 c 0,80.322 -123.788,145.439 -276.481,145.439 l 0,0 C 135.307,307.439 11.52,242.322 11.52,162" id="path3446"/>
          </clipPath>
          <radialGradient cx="0" cy="0" fx="0" fy="0" gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)" gradientUnits="userSpaceOnUse" id="radialGradient3452" r="1" spreadMethod="pad">
            <stop id="stop3454" offset="0" style="stop-opacity:1;stop-color:#aeb2d5"/>
            <stop id="stop3456" offset="0.3" style="stop-opacity:1;stop-color:#aeb2d5"/>
            <stop id="stop3458" offset="0.75" style="stop-opacity:1;stop-color:#484c89"/>
            <stop id="stop3460" offset="1" style="stop-opacity:1;stop-color:#484c89"/>
          </radialGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3468">
            <path d="M 0,324 576,324 576,0 0,0 0,324 Z" id="path3470"/>
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3480">
            <path d="M 0,324 576,324 576,0 0,0 0,324 Z" id="path3482"/>
          </clipPath>
        </defs>
        <g id="g3438" transform="matrix(1.25,0,0,-1.25,-4.4,394.29875)">
          <g id="g3440">
            <g clip-path="url(#clipPath3444)" id="g3442">
              <g id="g3448">
                <g id="g3450">
                  <path d="M 11.52,162 C 11.52,81.677 135.307,16.561 288,16.561 l 0,0 c 152.693,0 276.481,65.116 276.481,145.439 l 0,0 c 0,80.322 -123.788,145.439 -276.481,145.439 l 0,0 C 135.307,307.439 11.52,242.322 11.52,162" id="path3462" style="fill:url(#radialGradient3452);stroke:none"/>
                </g>
              </g>
            </g>
          </g>
          <g id="g3464">
            <g clip-path="url(#clipPath3468)" id="g3466">
              <g id="g3472" transform="translate(288,27.3594)">
                <path d="M 0,0 C 146.729,0 265.68,60.281 265.68,134.641 265.68,209 146.729,269.282 0,269.282 -146.729,269.282 -265.68,209 -265.68,134.641 -265.68,60.281 -146.729,0 0,0" id="path3474" style="fill:#777bb3;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
            </g>
          </g>
          <g id="g3476">
            <g clip-path="url(#clipPath3480)" id="g3478">
              <g id="g3484" transform="translate(161.7344,145.3066)">
                <path d="m 0,0 c 12.065,0 21.072,2.225 26.771,6.611 5.638,4.341 9.532,11.862 11.573,22.353 1.903,9.806 1.178,16.653 -2.154,20.348 C 32.783,53.086 25.417,55 14.297,55 L -4.984,55 -15.673,0 0,0 Z m -63.063,-67.75 c -0.895,0 -1.745,0.4 -2.314,1.092 -0.57,0.691 -0.801,1.601 -0.63,2.48 L -37.679,81.573 C -37.405,82.982 -36.17,84 -34.734,84 L 26.32,84 C 45.508,84 59.79,78.79 68.767,68.513 77.792,58.182 80.579,43.741 77.05,25.592 75.614,18.198 73.144,11.331 69.709,5.183 66.27,-0.972 61.725,-6.667 56.198,-11.747 49.582,-17.939 42.094,-22.429 33.962,-25.071 25.959,-27.678 15.681,-29 3.414,-29 l -24.722,0 -7.06,-36.322 c -0.274,-1.41 -1.508,-2.428 -2.944,-2.428 l -31.751,0 z" id="path3486" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
              <g id="g3488" transform="translate(159.2236,197.3071)">
                <path d="m 0,0 16.808,0 c 13.421,0 18.083,-2.945 19.667,-4.7 2.628,-2.914 3.124,-9.058 1.435,-17.767 C 36.012,-32.217 32.494,-39.13 27.452,-43.012 22.29,-46.986 13.898,-49 2.511,-49 L -9.523,-49 0,0 Z m 28.831,35 -61.055,0 c -2.872,0 -5.341,-2.036 -5.889,-4.855 l -28.328,-145.751 c -0.342,-1.759 0.12,-3.578 1.259,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.75,0 c 2.873,0 5.342,2.036 5.89,4.855 l 6.588,33.895 22.249,0 c 12.582,0 23.174,1.372 31.479,4.077 8.541,2.775 16.399,7.48 23.354,13.984 5.752,5.292 10.49,11.232 14.08,17.657 3.591,6.427 6.171,13.594 7.668,21.302 3.715,19.104 0.697,34.402 -8.969,45.466 C 63.965,29.444 48.923,35 28.831,35 m -45.633,-90 19.313,0 c 12.801,0 22.336,2.411 28.601,7.234 6.266,4.824 10.492,12.875 12.688,24.157 2.101,10.832 1.144,18.476 -2.871,22.929 C 36.909,3.773 28.87,6 16.808,6 L -4.946,6 -16.802,-55 M 28.831,29 C 47.198,29 60.597,24.18 69.019,14.539 77.44,4.898 79.976,-8.559 76.616,-25.836 75.233,-32.953 72.894,-39.46 69.601,-45.355 66.304,-51.254 61.999,-56.648 56.679,-61.539 50.339,-67.472 43.296,-71.7 35.546,-74.218 27.796,-76.743 17.925,-78 5.925,-78 l -27.196,0 -7.531,-38.75 -31.75,0 28.328,145.75 61.055,0" id="path3490" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
              <g id="g3492" transform="translate(311.583,116.3066)">
                <path d="m 0,0 c -0.896,0 -1.745,0.4 -2.314,1.092 -0.571,0.691 -0.802,1.6 -0.631,2.48 L 9.586,68.061 C 10.778,74.194 10.484,78.596 8.759,80.456 7.703,81.593 4.531,83.5 -4.848,83.5 L -27.55,83.5 -43.305,2.428 C -43.579,1.018 -44.814,0 -46.25,0 l -31.5,0 c -0.896,0 -1.745,0.4 -2.315,1.092 -0.57,0.691 -0.801,1.601 -0.63,2.48 l 28.328,145.751 c 0.274,1.409 1.509,2.427 2.945,2.427 l 31.5,0 c 0.896,0 1.745,-0.4 2.315,-1.091 0.57,-0.692 0.801,-1.601 0.63,-2.481 L -21.813,113 2.609,113 c 18.605,0 31.221,-3.28 38.569,-10.028 7.49,-6.884 9.827,-17.891 6.947,-32.719 L 34.945,2.428 C 34.671,1.018 33.437,0 32,0 L 0,0 Z" id="path3494" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
              <g id="g3496" transform="translate(293.6611,271.0571)">
                <path d="m 0,0 -31.5,0 c -2.873,0 -5.342,-2.036 -5.89,-4.855 l -28.328,-145.751 c -0.342,-1.759 0.12,-3.578 1.26,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.5,0 c 2.872,0 5.342,2.036 5.89,4.855 l 15.283,78.645 20.229,0 c 9.363,0 11.328,-2 11.407,-2.086 0.568,-0.611 1.315,-3.441 0.082,-9.781 l -12.531,-64.489 c -0.342,-1.759 0.12,-3.578 1.26,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 32,0 c 2.872,0 5.342,2.036 5.89,4.855 l 13.179,67.825 c 3.093,15.921 0.447,27.864 -7.861,35.5 -7.928,7.281 -21.208,10.82 -40.599,10.82 l -20.784,0 6.143,31.605 C 6.231,-5.386 5.77,-3.566 4.63,-2.184 3.49,-0.801 1.792,0 0,0 m 0,-6 -7.531,-38.75 28.062,0 c 17.657,0 29.836,-3.082 36.539,-9.238 6.703,-6.16 8.711,-16.141 6.032,-29.938 l -13.18,-67.824 -32,0 12.531,64.488 c 1.426,7.336 0.902,12.34 -1.574,15.008 -2.477,2.668 -7.746,4.004 -15.805,4.004 l -25.176,0 -16.226,-83.5 -31.5,0 L -31.5,-6 0,-6" id="path3498" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
              <g id="g3500" transform="translate(409.5498,145.3066)">
                <path d="m 0,0 c 12.065,0 21.072,2.225 26.771,6.611 5.638,4.34 9.532,11.861 11.574,22.353 1.903,9.806 1.178,16.653 -2.155,20.348 C 32.783,53.086 25.417,55 14.297,55 L -4.984,55 -15.673,0 0,0 Z m -63.062,-67.75 c -0.895,0 -1.745,0.4 -2.314,1.092 -0.57,0.691 -0.802,1.601 -0.631,2.48 L -37.679,81.573 C -37.404,82.982 -36.17,84 -34.733,84 L 26.32,84 C 45.509,84 59.79,78.79 68.768,68.513 77.793,58.183 80.579,43.742 77.051,25.592 75.613,18.198 73.144,11.331 69.709,5.183 66.27,-0.972 61.725,-6.667 56.198,-11.747 49.582,-17.939 42.094,-22.429 33.962,-25.071 25.959,-27.678 15.681,-29 3.414,-29 l -24.723,0 -7.057,-36.322 c -0.275,-1.41 -1.509,-2.428 -2.946,-2.428 l -31.75,0 z" id="path3502" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
              <g id="g3504" transform="translate(407.0391,197.3071)">
                <path d="M 0,0 16.808,0 C 30.229,0 34.891,-2.945 36.475,-4.7 39.104,-7.614 39.6,-13.758 37.91,-22.466 36.012,-32.217 32.493,-39.13 27.452,-43.012 22.29,-46.986 13.898,-49 2.511,-49 L -9.522,-49 0,0 Z m 28.831,35 -61.054,0 c -2.872,0 -5.341,-2.036 -5.889,-4.855 L -66.44,-115.606 c -0.342,-1.759 0.12,-3.578 1.259,-4.961 1.14,-1.383 2.838,-2.183 4.63,-2.183 l 31.75,0 c 2.872,0 5.342,2.036 5.89,4.855 l 6.587,33.895 22.249,0 c 12.582,0 23.174,1.372 31.479,4.077 8.541,2.775 16.401,7.481 23.356,13.986 5.752,5.291 10.488,11.23 14.078,17.655 3.591,6.427 6.171,13.594 7.668,21.302 3.715,19.105 0.697,34.403 -8.969,45.467 C 63.965,29.444 48.924,35 28.831,35 m -45.632,-90 19.312,0 c 12.801,0 22.336,2.411 28.601,7.234 6.267,4.824 10.492,12.875 12.688,24.157 2.102,10.832 1.145,18.476 -2.871,22.929 C 36.909,3.773 28.87,6 16.808,6 L -4.946,6 -16.801,-55 M 28.831,29 C 47.198,29 60.597,24.18 69.019,14.539 77.441,4.898 79.976,-8.559 76.616,-25.836 75.233,-32.953 72.894,-39.46 69.601,-45.355 66.304,-51.254 61.999,-56.648 56.679,-61.539 50.339,-67.472 43.296,-71.7 35.546,-74.218 27.796,-76.743 17.925,-78 5.925,-78 l -27.196,0 -7.53,-38.75 -31.75,0 28.328,145.75 61.054,0" id="path3506" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="mx-4">
    <svg class="w-10 h-10" width="50" height="52" viewBox="0 0 50 52" xmlns="http://www.w3.org/2000/svg"><title>Logomark</title><path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" fill="#FF2D20" fill-rule="evenodd"/></svg>
    </div>
    <div class="mx-4">
      <svg class="h-6 mt-2 my-auto fill-current text-white" viewBox="0 0 275.3 50.5"><path d="M231.2 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path><path d="M258.1 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path><path d="M6 15.3h10.3l-6 34.2H0l6-34.2zm.6-9.1C7.2 2.9 10.3 0 13.7 0s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.6-3-5.1-6.2zM54.3 28.5l-3.7 21H40.4L43.8 30c.8-4.4-1.6-6.2-4.9-6.2-3.4 0-6.5 2-7.5 6.6L28 49.5H17.8l6-34.2h10.3l-.5 3.2c2.3-2.6 6.2-4.2 10.1-4.2 6.9.1 12.2 5.1 10.6 14.2zM94.5 32.4c-.1.8-.5 2.7-1.1 4.1H68.9c.6 3.8 3.8 4.8 7 4.8 2.9 0 5.2-.8 7.2-2.7l7.2 5.9c-4 4-8.7 6-15 6-11.8 0-18-8.5-16.3-18.7a20.7 20.7 0 0 1 20.5-17.4c9.8 0 16.9 7.6 15 18zm-9.7-3.7c-.3-3.8-3-5.3-6.2-5.3a8.9 8.9 0 0 0-8.3 5.3h14.5zM123.9 14.6l-2 11.6c-4-.6-10.5.8-11.7 7.8l.1-.4-2.8 15.9H97.3l6-34.2h10.3l-1.1 6.2c2.1-4.7 6.6-6.9 11.4-6.9zM137.8 37.3c-.5 3.1 2 3.3 6.6 2.9l-1.6 9.3c-12.3 1.4-16.9-2.7-15.2-12.2l2.1-12.1h-5.5l1.8-9.9h5.4l1.2-6.5 10.8-3.1-1.7 9.6h7.1l-1.8 9.9h-7l-2.2 12.1zM155.3 15.3h10.3l-6 34.2h-10.3l6-34.2zm.6-9.1c.5-3.3 3.7-6.2 7.1-6.2s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.7-3-5.1-6.2zM208.1 15.3l-6 34.2h-10.3l.4-2.3a15.5 15.5 0 0 1-10.3 3.3c-11.1 0-15.3-9.6-13.5-18.9 1.6-8.8 8.6-17.2 19.2-17.2 4.5 0 7.7 1.8 9.6 4.6l.6-3.6h10.3zm-13.2 17.2c.9-5.2-1.9-8.4-6.6-8.4a9.5 9.5 0 0 0-9.5 8.3c-.9 5.1 1.8 8.3 6.6 8.3 4.6.1 8.6-3.1 9.5-8.2z"></path></svg>
    </div>
    <div class="mx-4">
      <svg class="w-10 h-10" fill="none" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>
    </div>
    <div class="mx-4">
      <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
      <rect width="630" height="630" fill="#f7df1e"/>
      <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
      </svg>
    </div>
    <div class="mx-4">
    <svg class="w-10 h-10" viewBox="0 0 128 128" width="50" height="50" data-v-11b02119=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-11b02119=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-11b02119=""></path></svg>
    </div>
    <div class="mx-4">
      <svg class="w-10 h-10" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z" fill="#07B6D5"/>
<path d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z" fill="#07B6D5"/>
</svg>

    </div>
    <div class="mx-4">
    <svg class="h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953 272"><path d="M136.28 4.09L217.95 4 80.93 140.95l-35.71 35.51-40.63-40.68L136.28 4.09zm-.76 122.28c1.06-1.4 3.01-.71 4.49-.89l77.87.02-70.97 70.9-40.84-40.59 29.45-29.44z" fill="#44d1fd"/><path opacity=".54" d="M332.74 61.21l89.03.03-.01 17.53c-23.29 0-46.59-.07-69.89.03-1.78.59-.94 2.82-1.14 4.19l.07 47.15c.59 1.77 2.83.92 4.21 1.14l59.76-.03v17.51c-18.58-.01-37.15-.01-55.73 0-2.76-.01-5.55-.18-8.28.29l-.21 66.56c-5.99-.24-11.97-.02-17.96-.15l-.01-151.42.16-2.83zm110.62.03h18.28l.01 104.76-.2 49.33c-5.95-.11-11.9-.14-17.84.02-.46-2.44-.27-4.92-.27-7.38l.02-146.73zm178.92 12.99l18.34.01.03 31c8.97.22 17.99-.4 26.94.31-.25 5.56-.04 11.12-.14 16.68-8.92.02-17.83.09-26.74-.04l-.07 61.74c.19 5.72 1.41 12.63 6.97 15.58 6.35 3.61 14.15 1.91 20.16-1.57v17.96c-6.62 3-14.17 3.36-21.28 2.39-10.02-1.53-19.62-8.36-22.65-18.29-2.01-5.44-1.55-11.31-1.59-16.99l-.04-60.13-.45-.51c-6.33-.34-12.68.05-19.02-.17.04-5.66-.22-11.32.14-16.97 6.44-.11 12.91.29 19.34-.2l.06-30.8zm77.48-.06c6.1.21 12.2-.07 18.29.14l.42.46c.23 10.18-.31 20.39.24 30.55 8.69-.16 17.38-.03 26.06-.08l.06 16.86c-8.74.33-17.51.13-26.25.08l-.1 62.81c-.01 5.47 1.57 11.94 6.86 14.63 6.49 3.54 14.36 1.72 20.39-1.9l-.02 18.06c-6.43 2.9-13.68 3.46-20.62 2.66-9.01-1.2-17.83-6.29-22.06-14.54-2.04-4.32-3.18-9.1-3.37-13.87v-67.78c-6.33-.01-12.65.02-18.97 0l.04-17.07c6.23.17 12.46-.05 18.69.16.66-10.36-.05-20.79.34-31.17zm89.02 31.65c12.66-5.25 27.27-5.35 40.2-.95 14.81 5.11 26.27 18.03 30.47 33.02 2.75 8.31 2.64 17.14 2.25 25.78l-87.05.09c.72 9.27 3.49 18.72 9.93 25.68 9.15 10.67 24.9 14.63 38.2 10.44 9.33-2.75 16.61-9.93 21.4-18.18 5.3 2.37 10.45 5.07 15.73 7.5-7.22 13.76-20.35 24.69-35.78 27.65-12.67 2.37-26.53 2.43-38.15-3.83-15.08-7.49-25.46-22.74-28.42-39.14-2.15-12.6-1.48-25.93 3.26-37.89 4.97-13.13 15.02-24.5 27.96-30.17m6.89 15.81c-10.65 4.92-17.51 15.85-19.65 27.13l66.76-.21c-1.06-7.37-3.68-14.86-9.08-20.19-9.46-10.14-25.63-12.12-38.03-6.73zm105.66 1.45c6.97-16.93 28.38-25.82 45.31-18.73v19.76c-7.11-2.8-15.08-4.53-22.59-2.32-10.26 3.05-17.85 12.2-20.76 22.27-2 6.8-1.25 13.9-1.17 20.87-.78 9.02.39 18.05-.2 27.07.48 7.79-.42 15.58.24 23.38-6.22.3-12.44-.02-18.65.19-.36-23.51-.05-47.03-.15-70.55l.14-39.59c5.83.16 11.67-.02 17.51.12.53 5.84-.65 11.71.32 17.53zm-413.47-17.87c6.2.26 12.45-.37 18.62.33l-.09 65.54c-.06 8.01 1.08 16.76 6.62 22.98 7.15 7.92 19.26 9.37 29.04 6.24 13.07-4.68 22.19-18.52 21.66-32.36l.2-62.73 18.67.04-.11 110.05c-5.92-.1-11.83 0-17.74-.07l-.07-15.66c-3.83 4.81-7.85 9.68-13.34 12.71-11.24 7.09-25.5 8.03-38.09 4.4-8.12-2.45-15.19-8.14-19.26-15.58-4.83-8.18-6.05-17.85-6.33-27.17l.22-68.72z"/><path fill="#1fbcfd" d="M65.36 196.47l40.71-40.66 40.84 40.59.17.18-41 40.62-40.72-40.73z"/><path fill="#08589c" d="M106.08 237.2l41-40.62 70.83 70.9c-26.68.06-53.35-.02-80.02.04-1.52.34-2.46-1.05-3.43-1.91l-28.38-28.41z"/></svg>
    </div>
    </div>
  </section>

  <section class="dark:bg-gray-900 bg-slate-100 dark:text-gray-100"  id="works">
		<div class="container grid  grid-cols-1 justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div class="mx-auto lg:mx-0 border-green-600 border border-spacing-1 gap-2 p-1 w-fit text-center mb-4">
          <span class="dark:text-white  py-0 px-5  w-fit text-3xl  font-bold leading-none sm:text-6xl">
            {{ t('works') }}
          </span>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <a href="https://mimovel.com" class="mb-4  transition-transform duration-300 transform-gpu hover:scale-110">
          <article class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2 md:mt-8 mx-4">
                  <img class="rounded-t-lg" src="./assets/jobs/mimovel.webp" alt="Mimóvel - website" />
              <section class="p-5">
                <h1 class="mb-2 text-lg font-thin tracking-tight text-white  line-clamp-1">Mimóvel - Website</h1>
              </section>
          </article>
        </a>
        <a href="https://sumburero.org" class="mb-4  transition-transform duration-300 transform-gpu hover:scale-110">
          <article class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2 md:mt-8 mx-4">
                  <img class="rounded-t-lg" src="./assets/jobs/sumburero.webp" alt="Sumburero - website" />
              <section class="p-5">
                <h1 class="mb-2 text-lg font-thin tracking-tight text-white  line-clamp-1">Sumburero - Website</h1>
              </section>
          </article>
        </a>
        <a href="https://agreed.co.mz" class="mb-4  transition-transform duration-300 transform-gpu hover:scale-110">
          <article class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2 md:mt-8 mx-4">
                  <img class="rounded-t-lg" src="./assets/jobs/agreed.webp" alt="Agreed Logistics - website" />
              <section class="p-5">
                <h1 class="mb-2 text-lg font-thin tracking-tight text-white  line-clamp-1">Agreed Logistics - Website</h1>
              </section>
          </article>
        </a>
        <div  class="mb-4  transition-transform duration-300 transform-gpu hover:scale-110">
          <article class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2 md:mt-8 mx-4">
                  <img class="rounded-t-lg" src="./assets/jobs/biosp.webp" alt="Biosp - Mobile Aplication" />
              <section class="p-5">
                <h1 class="mb-2 text-lg font-thin tracking-tight text-white line-clamp-1">Biosp - {{ t('mobile_app') }}</h1>
              </section>
          </article>
        </div>
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

 function changeLanguageSelection(lang:string){
     i18next.changeLanguage(lang);
 }

onMounted(async () => {
  addEventListener("DOMContentLoaded", function () {
    const targetEl = document.getElementById("dropdownLocale");
    const triggerEl = document.getElementById("dropdownLocaleButton");
    const dropdown = new Dropdown(targetEl, triggerEl);
    dropdown.hide(); 
  });
});
watch(() => lang.value,() => {
  i18next.changeLanguage(lang.value);
});

</script>
