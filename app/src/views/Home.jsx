import React from 'react';

export default function Home() {
  document.title = 'La Mie Douce - Accueil';

  return (
    <>
        <div class="min-h-full">
            <nav class="bg-middle-purple">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        <div class="w-full flex items-center">
                            <div class="flex-shrink-0">
                                <img class="h-11" src="img/logo.png" alt="La Mie Douce" />
                            </div>
                            <div class="w-full hidden md:block">
                                <div class="flex justify-end items-baseline space-x-4">
                                    <a href="/" class="rounded-md bg-dark-purple hover:bg-light-purple px-3 py-2 font-lexend uppercase text-xs font-medium text-white" aria-current="page">Accueil</a>
                                    <a href="/" class="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white">La boulangerie</a>
                                    <a href="/" class="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white">Nos produits</a>
                                    <a href="/" class="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white">Nos services</a>
                                    <a href="/" class="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md bg-dark-purple hover:bg-light-purple p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>
                                
                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                 
                <div class="hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white" aria-current="page">Accueil</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white">La boulangerie</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white">Nos produits</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white">Nos services</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white">Contact</a>
                    </div>
                </div>
            </nav>

            <main>
                <div class="bg-white dark:bg-dark-gray">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 mt-10">
                        <div class="sm:w-1/2 w-full sm:pr-20 lsm:pr-14 pr-0 sm:pl-0 lsm:pl-14 pl-0 flex flex-col justify-center items-start">
                            <p class="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl">Découvrez nos produits artisanaux faits avec <span class="font-lora italic">amour</span> et <span class="font-lora italic">passion</span>.</p>
                            <p class="text-gray-400 lg:text-base md:text-sm text-xs mt-5 sm:mb-0 mb-8">Depuis plusieurs années, <span class="font-lora italic">La Mie Douce</span> est votre boulangerie de quartier, où chaque pain, chaque viennoiserie, est préparé avec soin, en utilisant les meilleurs ingrédients et des méthodes traditionnelles. Nos artisans boulangers mettent tout leur savoir-faire au service de nos clients.</p>
                        </div>
                        <div class="sm:w-1/2 w-full sm:pr-0 lsm:pr-14 pr-0 sm:pl-0 lsm:pl-14 pl-0">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="grid gap-4 h-full">
                                    <div class="md:h-80 lsm:h-60 h-40">
                                        <img class="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]" src="img/vitrine1.jpg" alt="" />
                                    </div>
                                    <div class="md:h-60 lsm:h-40 h-20">
                                        <img class="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]" src="img/vitrine2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="grid gap-4 h-full">
                                    <div class="md:h-60 lsm:h-40 h-20">
                                        <img class="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]" src="img/vitrine3.jpg" alt="" />
                                    </div>
                                    <div class="md:h-80 lsm:h-60 h-40">
                                        <img class="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]" src="img/vitrine4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-gray">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex p-8">
                        <div class="flex flex-col mt-6 mb-6">
                            <div class="mx-auto max-w-lg text-center">
                                <h2 class="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl">Le goût du vrai pain, fait avec passion chaque jour.</h2>
                                <p class="text-gray-400 lg:text-base md:text-sm text-xs mt-4">Chez <span class="font-lora italic">La Mie Douce</span>, nous allions tradition et innovation pour vous offrir des produits d'exception, toujours frais et savoureux.</p>
                            </div>
                            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <div class="block rounded-xl shadow-xl border border-white dark:border-dark-gray hover:border-middle-purple dark:hover:border-light-purple touch-manipulation transition-all duration-200 p-8">
                                    <i class="bx bx-medal lg:text-5xl md:text-4xl text-3xl text-middle-purple dark:text-light-purple"></i>
                                    <h2 class="mt-3 font-lexend lg:text-xl md:text-lg text-base font-bold text-black dark:text-white">Qualité Inégalée</h2>
                                    <p class="mt-1 font-lexend font-light lg:text-sm md:text-xs text-xxs text-gray-400">Chaque pain, viennoiserie et pâtisserie est fabriqué avec des ingrédients soigneusement sélectionnés et un savoir-faire artisanal transmis de génération en génération.</p>
                                </div>
                                <div class="block rounded-xl shadow-xl border border-white dark:border-dark-gray hover:border-middle-purple dark:hover:border-light-purple touch-manipulation transition-all duration-200 p-8">
                                    <i class="bx bx-money lg:text-5xl md:text-4xl text-3xl text-middle-purple dark:text-light-purple"></i>
                                    <h2 class="mt-3 font-lexend lg:text-xl md:text-lg text-base font-bold text-black dark:text-white">Prix Justes</h2>
                                    <p class="mt-1 font-lexend font-light lg:text-sm md:text-xs text-xxs text-gray-400">Nous croyons que la qualité doit être accessible à tous. C’est pourquoi nous vous proposons des produits délicieux à des prix qui respectent votre budget.</p>
                                </div>
                                <div class="block rounded-xl shadow-xl border border-white dark:border-dark-gray hover:border-middle-purple dark:hover:border-light-purple touch-manipulation transition-all duration-200 p-8">
                                    <i class="bx bx-trophy lg:text-5xl md:text-4xl text-3xl text-middle-purple dark:text-light-purple"></i>
                                    <h2 class="mt-3 font-lexend lg:text-xl md:text-lg text-base font-bold text-black dark:text-white">Authenticité Garantie</h2>
                                    <p class="mt-1 font-lexend font-light lg:text-sm md:text-xs text-xxs text-gray-400">Nous restons fidèles aux méthodes traditionnelles pour préserver le goût authentique de chaque produit, en vous offrant une expérience culinaire unique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-dark-gray">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex p-12 lg:mb-10 mb-0">
                        <div class="w-full flex flex-col lg:flex-row">
                            <div class="w-1/2 h-80 lg:w-1/2 w-full">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.590538582554!2d4.0117823999999995!3d49.227292000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e9755cc593268f%3A0x46fa82980840c27f!2sBoulangerie%20La%20Mie%20Douce!5e0!3m2!1sfr!2sfr!4v1723909820783!5m2!1sfr!2sfr"
                                        style="border: 0;"
                                        class="w-full h-full"
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                <p class="font-lora md:text-sm text-xs text-gray-400 mt-2">Nous sommes situés au cœur du quartier, avec un parking disponible à 50 mètres pour un accès facile et rapide à notre boulangerie.</p>
                            </div>
                            <div class="w-1/2 h-80 lg:pl-6 pl-0 flex lg:w-1/2 w-full lsm:mt-0 msm:mt-20 mt-24">
                                <div class="w-1/2 m-5 flex flex-col justify-center items-center">
                                    <p class="font-lexend font-semibold uppercase md:text-base lsm:text-sm text-xs mb-2 text-black dark:text-white">Horaires</p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Lundi</span>
                                        de 07:00 à 19:00
                                    </p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Mardi</span>
                                        de 07:00 à 19:00
                                    </p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Mercredi</span>
                                        de 07:00 à 19:00
                                    </p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Jeudi</span>
                                        de 07:00 à 19:00
                                    </p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Vendredi</span>
                                        de 07:00 à 19:00
                                    </p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Samedi</span>
                                        de 07:30 à 13:30
                                    </p>
                                    <p class="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                        <span class="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple">Dimanche</span>
                                        de 07:30 à 13:30
                                    </p>
                                </div>
                                <div class="w-1/2 flex lg:flex-col sm:flex-row flex-col justify-evenly lg:gap-0 gap-8 m-5">
                                    <div class="lg:h-1/2 h-full flex flex-col justify-center items-center text-center">
                                        <p class="font-lexend font-semibold uppercase md:text-base lsm:text-sm text-xs mb-2 text-black dark:text-white">Adresse</p>
                                        <p class="font-lora italic font-medium dark:font-bold xl:text-base md:text-sm lsm:text-xs text-xxs text-middle-purple dark:text-light-purple">2 avenue Léon Blum</p>
                                        <p class="font-lora italic font-medium dark:font-bold xl:text-base md:text-sm lsm:text-xs text-xxs text-middle-purple dark:text-light-purple">51100 Reims</p>
                                    </div>
                                    <div class="lg:h-1/2 h-full flex flex-col justify-center items-center text-center">
                                        <p class="font-lexend font-semibold uppercase md:text-base lsm:text-sm text-xs mb-2 text-black dark:text-white">Numéro de téléphone</p>
                                        <p class="font-lora italic font-medium dark:font-bold xl:text-base md:text-sm lsm:text-xs text-xxs text-middle-purple dark:text-light-purple">03 26 06 42 82</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer class="bg-middle-purple">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-8">
                    <div class="md:flex md:justify-between">
                        <div class="flex flex-col justify-center">
                            <a href="/" class="flex items-center">
                                <img src="img/logo.png" class="h-12 me-3" alt="La Mie Douce" />
                            </a>
                            <p class="text-gray-300 font-lora xl:text-base md:text-sm text-xs mt-3">Chaque jour, le plaisir du </p>
                            <p class="text-gray-300 font-lora xl:text-base md:text-sm text-xs">fait maison à votre table.</p>
                        </div>
                        <div class="grid gap-8 grid-cols-2 md:mt-0 mt-12">
                            <div>
                                <h2 class="mb-6 text-sm font-lexend font-semibold text-white uppercase md:text-base lsm:text-sm text-xs">Pages de Contenu</h2>
                                <ul class="text-sm text-gray-300 font-light font-lexend">
                                    <li class="xl:text-base md:text-sm text-xs mb-4">
                                        <a href="/" class="hover:underline">La boulangerie</a>
                                    </li>
                                    <li class="xl:text-base md:text-sm text-xs">
                                        <a href="/" class="hover:underline">Nos produits</a>
                                    </li>
                                    <li class="xl:text-base md:text-sm text-xs mt-4">
                                        <a href="/" class="hover:underline">Nos services</a>
                                    </li>
                                    <li class="xl:text-base md:text-sm text-xs mt-4">
                                        <a href="/" class="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-lexend font-semibold text-white uppercase md:text-base lsm:text-sm text-xs">Pages légales</h2>
                                <ul class="text-sm text-gray-300 font-light font-lexend">
                                    <li class="xl:text-base md:text-sm text-xs mb-4">
                                        <a href="/" class="hover:underline">Mentions légales</a>
                                    </li>
                                    <li class="xl:text-base md:text-sm text-xs">
                                        <a href="/" class="hover:underline">Politique de Confidentialité</a>
                                    </li>
                                    <li class="xl:text-base md:text-sm text-xs mt-4">
                                        <a href="/" class="hover:underline">Conditions Générales d'Utilisation</a>
                                    </li>
                                    <li class="xl:text-base md:text-sm text-xs mt-4">
                                        <a href="/" class="hover:underline">Politique de Cookies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="flex items-center justify-between">
                        <span class="xl:text-base md:text-sm text-xs text-gray-300 font-lora font-semibold sm:text-center">&copy; 2024 La Mie Douce. Tous droits réservés.</span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i class="bx bxl-facebook xl:text-base md:text-sm text-xs"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        <div class="fixed bottom-6 end-6 p-2 bg-light-purple rounded-full flex gap-2">
            <button onclick="toggleDarkMode()" type="button" class="lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center text-white bg-dark-purple hover:bg-middle-purple rounded-full">
                <i class="bx bxs-moon lg:text-3xl md:text-2xl text-xl force-hidden"></i>
                <i class="bx bxs-sun lg:text-3xl md:text-2xl text-xl"></i>
            </button>
            <a href="#" type="button" class="lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 flex items-center justify-center text-white bg-dark-purple hover:bg-middle-purple rounded-full">
                <i class="bx bx-chevron-up lg:text-3xl md:text-2xl text-xl"></i>
            </a>
        </div>

    </>
  );
}
