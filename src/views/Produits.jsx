import React from "react";

export default function Produits() {
    return (
        <main>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 mt-10">
                    <div className="w-full">
                        <p className="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl mb-3">
                            Découvrez Notre Univers{" "}
                            <span className="font-lora italic">Gourmand</span>
                        </p>
                        <p className="text-gray-400 lg:text-base md:text-sm text-xs">
                            Que vous soyez en quête d&apos;un croissant doré{" "}
                            pour bien démarrer la journée, d&apos;une pâtisserie{" "}
                            raffinée pour une occasion spéciale, ou d&apos;un{" "}
                            en-cas salé pour votre pause déjeuner, nous avons{" "}
                            tout ce qu&apos;il vous faut. Explorez nos{" "}
                            différentes catégories de produits, toutes faites{" "}
                            maison avec passion. Un clic suffit pour succomber à{" "}
                            la tentation !
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center mt-10 md:mb-6 mb-4">
                    <p className="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl">
                        Nos Produits
                    </p>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-8 mb-16">
                        <a
                            href="/nos-produits/pains"
                            className="relative md:col-span-4 h-80 rounded-[8px] touch-manipulation transition-all duration-300 hover:scale-[1.020] group mt-3 md:mr-3 mr-0"
                        >
                            <img
                                src="./assets/img/pains.jpg"
                                alt="Pains"
                                className="w-full h-full object-cover rounded-[8px]"
                            />
                            <div className="absolute inset-0 flex flex-col text-center font-lexend justify-center items-center text-white">
                                <h2 className="text-5xl font-bold font-lora italic [text-shadow:_0_2px_4px_rgb(30_30_30_/_0.8)] transition-all duration-500 group-hover:-rotate-[10deg]">
                                    Pains
                                </h2>
                            </div>
                        </a>
                        <a
                            href="/nos-produits/viennoiseries"
                            className="relative md:col-span-4 h-80 rounded-[8px] touch-manipulation transition-all duration-300 hover:scale-[1.020] group mt-3"
                        >
                            <img
                                src="./assets/img/viennoiseries.jpg"
                                alt="Viennoiseries"
                                className="w-full h-full object-cover rounded-[8px]"
                            />
                            <div className="absolute inset-0 flex flex-col text-center font-lexend justify-center items-center text-white">
                                <h2 className="text-5xl font-bold font-lora italic [text-shadow:_0_2px_4px_rgb(30_30_30_/_0.8)] transition-all duration-500 group-hover:rotate-[10deg]">
                                    Viennoiseries
                                </h2>
                            </div>
                        </a>
                        <a
                            href="/nos-produits/patisseries"
                            className="relative md:col-span-4 h-80 rounded-[8px] touch-manipulation transition-all duration-300 hover:scale-[1.020] group mt-3 md:mr-3 mr-0"
                        >
                            <img
                                src="./assets/img/patisseries.jpg"
                                alt="Pâtisseries"
                                className="w-full h-full object-cover rounded-[8px]"
                            />
                            <div className="absolute inset-0 flex flex-col text-center font-lexend justify-center items-center text-white">
                                <h2 className="text-5xl font-bold font-lora italic [text-shadow:_0_2px_4px_rgb(30_30_30_/_0.8)] transition-all duration-500 group-hover:-rotate-[10deg]">
                                    Pâtisseries
                                </h2>
                            </div>
                        </a>
                        <a
                            href="/nos-produits/snacking-sales"
                            className="relative md:col-span-4 h-80 rounded-[8px] touch-manipulation transition-all duration-300 hover:scale-[1.020] group mt-3"
                        >
                            <img
                                src="./assets/img/snacking-sales.jpg"
                                alt="Snacking salés"
                                className="w-full h-full object-cover rounded-[8px]"
                            />
                            <div className="absolute inset-0 flex flex-col text-center font-lexend justify-center items-center text-white">
                                <h2 className="text-5xl font-bold font-lora italic [text-shadow:_0_2px_4px_rgb(30_30_30_/_0.8)] transition-all duration-500 group-hover:rotate-[10deg]">
                                    Snacking salés
                                </h2>
                            </div>
                        </a>
                        <a
                            href="/nos-produits/boissons"
                            className="relative md:col-span-8 h-80 rounded-[8px] touch-manipulation transition-all duration-300 hover:scale-[1.020] group mt-3"
                        >
                            <img
                                src="./assets/img/boissons.jpg"
                                alt="Boissons"
                                className="w-full h-full object-cover rounded-[8px]"
                            />
                            <div className="absolute inset-0 flex flex-col text-center font-lexend justify-center items-center text-white">
                                <h2 className="text-5xl font-bold font-lora italic [text-shadow:_0_2px_4px_rgb(30_30_30_/_0.8)] transition-all duration-200">
                                    Boissons
                                </h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
