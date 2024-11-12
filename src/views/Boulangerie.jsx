import React from "react";

export default function Boulangerie() {
    return (
        <main>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col mt-20">
                    <div className="w-full">
                        <p className="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl mb-3">
                            Découvrez Notre Univers{" "}
                            <span className="font-lora italic">
                                Une Histoire de Passion et de Tradition
                            </span>
                        </p>
                        <p className="text-gray-400 lg:text-base md:text-sm text-xs">
                            Fondée en 2024, La Mie Douce est bien plus
                            qu&apos;une simple boulangerie. C&apos;est une
                            aventure familiale transmise de génération en
                            génération, où le respect des traditions artisanales
                            rencontre l&apos;amour du bon pain. Depuis des
                            années, nous nous engageons à offrir à nos clients
                            des produits de qualité, préparés avec passion et
                            expertise.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8">
                    <div className="w-full">
                        <iframe
                            title="adresse"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.590538582554!2d4.0117823999999995!3d49.227292000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e9755cc593268f%3A0x46fa82980840c27f!2sBoulangerie%20La%20Mie%20Douce!5e0!3m2!1sfr!2sfr!4v1723909820783!5m2!1sfr!2sfr"
                            style={{ border: 0 }}
                            className="w-full h-96"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 mb-4">
                    <div className="w-full">
                        <div className="flex flex-col justify-evenly w-full mb-5 ml-6 sm:gap-8 sm:flex-row">
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-middle-purple rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-middle-purple rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 font-lexend text-lg font-bold text-gray-800">
                                                HORAIRES
                                            </h3>
                                        </div>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white mt-2">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Lundi
                                            </span>
                                            de 07:00 à 19:00
                                        </p>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Mardi
                                            </span>
                                            de 07:00 à 19:00
                                        </p>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Mercredi
                                            </span>
                                            de 07:00 à 19:00
                                        </p>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Jeudi
                                            </span>
                                            de 07:00 à 19:00
                                        </p>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Vendredi
                                            </span>
                                            de 07:00 à 19:00
                                        </p>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Samedi
                                            </span>
                                            de 07:30 à 13:30
                                        </p>
                                        <p className="font-lexend font-light xl:text-base text-sm text-center text-black dark:text-white">
                                            <span className="font-lora italic font-medium dark:font-bold text-middle-purple dark:text-light-purple mr-1">
                                                Dimanche
                                            </span>
                                            de 07:30 à 13:30
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-middle-purple rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-middle-purple rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 font-lexend text-lg font-bold text-gray-800">
                                                ADRESSE
                                            </h3>
                                        </div>
                                        <p className="text-center font-lora italic font-medium dark:font-bold xl:text-base text-sm text-middle-purple dark:text-light-purple sm:mt-10 mt-1">
                                            2 avenue Léon Blum
                                        </p>
                                        <p className="text-center font-lora italic font-medium dark:font-bold xl:text-base text-sm text-middle-purple dark:text-light-purple">
                                            51100 Reims
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-middle-purple rounded-lg" />
                                    <div className="relative h-full p-5 bg-white border-2 border-middle-purple rounded-lg">
                                        <div className="flex items-center -mt-1">
                                            <h3 className="my-2 ml-3 font-lexend text-lg font-bold text-gray-800">
                                                NUMÉRO DE TÉLÉPHONE
                                            </h3>
                                        </div>
                                        <p className="text-center font-lora italic font-medium dark:font-bold xl:text-base text-sm text-middle-purple dark:text-light-purple sm:mt-10 mt-1">
                                            03 26 06 42 82
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
