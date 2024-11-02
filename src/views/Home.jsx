import React from "react";

export default function Home() {
    return (
        <main>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 mt-10">
                    <div className="sm:w-1/2 w-full sm:pr-20 lsm:pr-14 pr-0 sm:pl-0 lsm:pl-14 pl-0 flex flex-col justify-center items-start">
                        <p className="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl">
                            Découvrez nos produits artisanaux faits avec{" "}
                            <span className="font-lora italic">amour</span> et{" "}
                            <span className="font-lora italic">passion</span>.
                        </p>
                        <p className="text-gray-400 lg:text-base md:text-sm text-xs mt-5 sm:mb-0 mb-8">
                            Depuis plusieurs années,{" "}
                            <span className="font-lora italic">
                                La Mie Douce
                            </span>{" "}
                            est votre est votre est votre est votre boulangerie
                            de quartier, où chaque pain, chaque viennoiserie,
                            est préparé avec soin, en utilisant les meilleurs
                            ingrédients et traditionnelles. Nos artisans
                            boulangers mettent tout leur savoir-faire au service
                            de nos clients.
                        </p>
                    </div>
                    <div className="sm:w-1/2 w-full sm:pr-0 lsm:pr-14 pr-0 sm:pl-0 lsm:pl-14 pl-0">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-4 h-full">
                                <div className="md:h-80 lsm:h-60 h-40">
                                    <img
                                        className="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]"
                                        src="/assets/img/vitrine1.jpg"
                                        alt="Première vitrine"
                                    />
                                </div>
                                <div className="md:h-60 lsm:h-40 h-20">
                                    <img
                                        className="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]"
                                        src="/assets/img/vitrine2.jpg"
                                        alt="Deuxième vitrine"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 h-full">
                                <div className="md:h-60 lsm:h-40 h-20">
                                    <img
                                        className="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]"
                                        src="/assets/img/vitrine3.jpg"
                                        alt="Troisième vitrine"
                                    />
                                </div>
                                <div className="md:h-80 lsm:h-60 h-40">
                                    <img
                                        className="w-full h-full object-cover rounded-lg touch-manipulation transition-all duration-200 hover:scale-[1.020]"
                                        src="/assets/img/vitrine4.jpg"
                                        alt="Quatrième vitrine"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-gray mt-10 mb-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex p-8">
                    <div className="flex flex-col mt-6 mb-6">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl">
                                Le goût du vrai pain, fait avec passion chaque
                                jour.
                            </h2>
                            <p className="text-gray-400 lg:text-base md:text-sm text-xs mt-4">
                                Chez{" "}
                                <span className="font-lora italic">
                                    La Mie Douce
                                </span>
                                , nous allions tradition et innovation pour vous
                                pour vous offrir des produits d&apos;exception,
                                toujours frais et savoureux.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="block rounded-xl shadow-xl border border-white dark:border-dark-gray hover:border-middle-purple dark:hover:border-light-purple touch-manipulation transition-all duration-200 p-8">
                                <i className="bx bx-medal lg:text-5xl md:text-4xl text-3xl text-middle-purple dark:text-light-purple" />
                                <h2 className="mt-3 font-lexend lg:text-xl md:text-lg text-base font-bold text-black dark:text-white">
                                    Qualité Inégalée
                                </h2>
                                <p className="mt-1 font-lexend font-light lg:text-sm md:text-xs text-xxs text-gray-400">
                                    Chaque pain, viennoiserie et pâtisserie est
                                    fabriqué avec des ingrédients soigneusement
                                    sélectionnés et un savoir-faire artisanal
                                    transmis de génération en génération.
                                </p>
                            </div>
                            <div className="block rounded-xl shadow-xl border border-white dark:border-dark-gray hover:border-middle-purple dark:hover:border-light-purple touch-manipulation transition-all duration-200 p-8">
                                <i className="bx bx-money lg:text-5xl md:text-4xl text-3xl text-middle-purple dark:text-light-purple" />
                                <h2 className="mt-3 font-lexend lg:text-xl md:text-lg text-base font-bold text-black dark:text-white">
                                    Prix Justes
                                </h2>
                                <p className="mt-1 font-lexend font-light lg:text-sm md:text-xs text-xxs text-gray-400">
                                    Nous croyons que la qualité doit être
                                    accessible à tous. C’est pourquoi nous vous
                                    proposons des produits délicieux à des prix
                                    qui respectent votre budget.
                                </p>
                            </div>
                            <div className="block rounded-xl shadow-xl border border-white dark:border-dark-gray hover:border-middle-purple dark:hover:border-light-purple touch-manipulation transition-all duration-200 p-8">
                                <i className="bx bx-trophy lg:text-5xl md:text-4xl text-3xl text-middle-purple dark:text-light-purple" />
                                <h2 className="mt-3 font-lexend lg:text-xl md:text-lg text-base font-bold text-black dark:text-white">
                                    Authenticité Garantie
                                </h2>
                                <p className="mt-1 font-lexend font-light lg:text-sm md:text-xs text-xxs text-gray-400">
                                    Nous restons fidèles aux méthodes
                                    traditionnelles pour préserver le goût
                                    authentique de chaque produit, en vous
                                    offrant une expérience culinaire unique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-gray mb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex p-12 lg:mb-10 mb-0">
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="w-1/2 h-80 lg:w-1/2 w-full">
                            <iframe
                                title="adresse"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.590538582554!2d4.0117823999999995!3d49.227292000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e9755cc593268f%3A0x46fa82980840c27f!2sBoulangerie%20La%20Mie%20Douce!5e0!3m2!1sfr!2sfr!4v1723909820783!5m2!1sfr!2sfr"
                                style={{ border: 0 }}
                                className="w-full h-full"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <p className="font-lora md:text-sm text-xs text-gray-400 mt-2">
                                Nous sommes situés au cœur du quartier, avec un
                                parking disponible à 50 mètres pour un accès
                                facile et rapide à notre boulangerie.
                            </p>
                        </div>
                        <div className="w-1/2 h-80 lg:pl-6 pl-0 flex lg:w-1/2 w-full lsm:mt-0 msm:mt-20 mt-24">
                            <div className="w-1/2 m-5 flex flex-col justify-center items-center">
                                <p className="font-lexend font-semibold uppercase md:text-base lsm:text-sm text-xs mb-2 text-black dark:text-white">
                                    Horaires
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Lundi
                                    </span>
                                    de 07:00 à 19:00
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Mardi
                                    </span>
                                    de 07:00 à 19:00
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Mercredi
                                    </span>
                                    de 07:00 à 19:00
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Jeudi
                                    </span>
                                    de 07:00 à 19:00
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Vendredi
                                    </span>
                                    de 07:00 à 19:00
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Samedi
                                    </span>
                                    de 07:30 à 13:30
                                </p>
                                <p className="font-lexend font-light xl:text-base md:text-sm lsm:text-xs text-xxs text-center text-black dark:text-white">
                                    <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                        Dimanche
                                    </span>
                                    de 07:30 à 13:30
                                </p>
                            </div>
                            <div className="w-1/2 flex lg:flex-col sm:flex-row flex-col justify-evenly lg:gap-0 gap-8 m-5">
                                <div className="lg:h-1/2 h-full flex flex-col justify-center items-center text-center">
                                    <p className="font-lexend font-semibold uppercase md:text-base lsm:text-sm text-xs mb-2 text-black dark:text-white">
                                        Adresse
                                    </p>
                                    <p className="font-lora italic font-medium dark:font-bold xl:text-base md:text-sm lsm:text-xs text-xxs text-middle-purple dark:text-light-purple">
                                        2 avenue Léon Blum
                                    </p>
                                    <p className="font-lora italic font-medium dark:font-bold xl:text-base md:text-sm lsm:text-xs text-xxs text-middle-purple dark:text-light-purple">
                                        51100 Reims
                                    </p>
                                </div>
                                <div className="lg:h-1/2 h-full flex flex-col justify-center items-center text-center">
                                    <p className="font-lexend font-semibold uppercase md:text-base lsm:text-sm text-xs mb-2 text-black dark:text-white">
                                        Numéro de téléphone
                                    </p>
                                    <p className="font-lora italic font-medium dark:font-bold xl:text-base md:text-sm lsm:text-xs text-xxs text-middle-purple dark:text-light-purple">
                                        03 26 06 42 82
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
