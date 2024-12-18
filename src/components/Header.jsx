import React, { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-middle-purple" id="#top">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="w-full flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-11"
                                src="/assets/img/logo.png"
                                alt="La Mie Douce"
                            />
                        </div>
                        <div className="w-full hidden md:block">
                            <div className="flex justify-end items-baseline space-x-4">
                                <a
                                    href="/"
                                    className="rounded-md bg-dark-purple hover:bg-light-purple px-3 py-2 font-lexend uppercase text-xs font-medium text-white"
                                    aria-current="page"
                                >
                                    Accueil
                                </a>
                                <a
                                    href="/la-boulangerie"
                                    className="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                                >
                                    La boulangerie
                                </a>
                                <a
                                    href="/nos-produits"
                                    className="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                                >
                                    Nos produits
                                </a>
                                <a
                                    href="/nos-services"
                                    className="rounded-md px-2 py-2 font-lexend uppercase text-xs font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                                >
                                    Nos services
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md bg-dark-purple hover:bg-light-purple p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>

                            <i
                                className={`bx bx-menu text-white ${isMobileMenuOpen ? "hidden" : "block"}`}
                                style={{ fontSize: "24px" }}
                            />

                            <i
                                className={`bx bx-x text-white ${isMobileMenuOpen ? "block" : "hidden"}`}
                                style={{ fontSize: "24px" }}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`${isMobileMenuOpen ? "block" : "hidden"}`}
                id="mobile-menu"
            >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <a
                        href="/"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                        aria-current="page"
                    >
                        Accueil
                    </a>
                    <a
                        href="/la-boulangerie"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                    >
                        La boulangerie
                    </a>
                    <a
                        href="/nos-produits"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                    >
                        Nos produits
                    </a>
                    <a
                        href="/nos-services"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-light-purple hover:text-white"
                    >
                        Nos services
                    </a>
                </div>
            </div>
        </nav>
    );
}
