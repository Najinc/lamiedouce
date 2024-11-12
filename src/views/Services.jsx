import React from "react";
import ProduitGauche from "../components/ProduitGauche";
import ProduitDroite from "../components/ProduitDroite";

export default function Services() {
    return (
        <main>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 mt-10">
                    <div className="w-full">
                        <p className="text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl mb-3">
                            Nos Services sur Mesure pour{" "}
                            <span className="font-lora italic">
                                Vos Moments Gourmands
                            </span>
                        </p>
                        <p className="text-gray-400 lg:text-base md:text-sm text-xs">
                            Que ce soit pour un anniversaire, une fête ou tout
                            simplement pour régaler vos proches, La Mie Douce
                            vous propose des services personnalisés. Commandez
                            vos gâteaux sur mesure, réservez des quantités de
                            viennoiseries pour vos événements, et laissez-nous
                            ajouter une touche de douceur à vos moments
                            importants !
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 my-5">
                    <div className="w-full">
                        <ProduitGauche
                            nom="Commande de Gâteaux Personnalisés"
                            description="Un service de commande pour des gâteaux uniques, adaptés à vos goûts et événements. Choisissez le parfum, la décoration et la taille selon vos envies."
                            autre="Gâteaux personnalisés, sur commande."
                            image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                        />
                        <ProduitDroite
                            nom="Gâteaux d’Anniversaire"
                            description="Réalisation de gâteaux d’anniversaire sur mesure, décorés et personnalisés selon l'âge, le thème ou les préférences du célébré. Surprenez vos proches avec une création unique !"
                            autre="Gâteaux festifs, thème au choix."
                            image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                        />
                        <ProduitGauche
                            nom="Commande de Viennoiseries en Quantité"
                            description="Un service de commande en gros pour des viennoiseries fraîches, idéal pour des événements, petits déjeuners d’entreprise ou réceptions. Préparation et livraison possible."
                            autre="Viennoiseries en gros, sur réservation."
                            image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
