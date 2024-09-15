import React from "react";

export default function Footer() {
    return (
        <footer className="bg-middle-purple">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-8">
                <div className="md:flex md:justify-between">
                    <div className="flex flex-col justify-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="./assets/img/logo.png"
                                className="h-12 me-3"
                                alt="La Mie Douce"
                            />
                        </a>
                        <p className="text-gray-300 font-lora xl:text-base md:text-sm text-xs mt-3">
                            Chaque jour, le plaisir du
                        </p>
                        <p className="text-gray-300 font-lora xl:text-base md:text-sm text-xs">
                            fait maison à votre table.
                        </p>
                    </div>
                    <div className="grid gap-8 grid-cols-2 md:mt-0 mt-12">
                        <div>
                            <h2 className="mb-6 text-sm font-lexend font-semibold text-white uppercase md:text-base lsm:text-sm msm:text-xs">
                                Pages de Contenu
                            </h2>
                            <ul className="text-sm text-gray-300 font-light font-lexend">
                                <li className="xl:text-base md:text-sm text-xs mb-4">
                                    <a href="/" className="hover:underline">
                                        La boulangerie
                                    </a>
                                </li>
                                <li className="xl:text-base md:text-sm text-xs">
                                    <a href="/" className="hover:underline">
                                        Nos produits
                                    </a>
                                </li>
                                <li className="xl:text-base md:text-sm text-xs mt-4">
                                    <a href="/" className="hover:underline">
                                        Nos services
                                    </a>
                                </li>
                                <li className="xl:text-base md:text-sm text-xs mt-4">
                                    <a href="/" className="hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-lexend font-semibold text-white uppercase md:text-base lsm:text-sm msm:text-xs">
                                Pages légales
                            </h2>
                            <ul className="text-sm text-gray-300 font-light font-lexend">
                                <li className="xl:text-base md:text-sm text-xs mb-4">
                                    <a href="/" className="hover:underline">
                                        Mentions légales
                                    </a>
                                </li>
                                <li className="xl:text-base md:text-sm text-xs">
                                    <a href="/" className="hover:underline">
                                        Politique de Confidentialité
                                    </a>
                                </li>
                                <li className="xl:text-base md:text-sm text-xs mt-4">
                                    <a href="/" className="hover:underline">
                                        Conditions Générales d&apos;Utilisation
                                    </a>
                                </li>
                                <li className="xl:text-base md:text-sm text-xs mt-4">
                                    <a href="/" className="hover:underline">
                                        Politique de Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex items-center justify-between">
                    <span className="xl:text-base md:text-sm text-xs text-gray-300 font-lora font-semibold sm:text-center">
                        &copy; 2024 La Mie Douce. Tous droits réservés.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href="/"
                            aria-label="Facebook"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white touch-manipulation transition-all duration-200"
                        >
                            <i className="bx bxl-facebook xl:text-base md:text-sm text-xs" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
