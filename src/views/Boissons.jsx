import React from "react";
import ProduitGauche from "../components/ProduitGauche";
import ProduitDroite from "../components/ProduitDroite";

export default function Boissons() {
    return (
        <div className="bg-white dark:bg-dark-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 my-5">
                <div className="w-full">
                    <ProduitGauche
                        nom="Jus d’Orange Frais"
                        description="Un jus d'orange pressé sur place, riche en vitamine C, pour un début de journée plein d'énergie."
                        autre="Boisson froide, jus de fruits."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Jus de Pomme"
                        description="Un jus de pomme doux et naturel, sans sucre ajouté, pour une pause rafraîchissante et saine."
                        autre="Boisson froide, jus de fruits."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Eau Minérale Plate"
                        description="Une eau pure et légère, idéale pour se réhydrater simplement."
                        autre="Boisson froide, non gazeuse."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Eau Minérale Gazeuse"
                        description="Une eau pétillante naturelle, idéale pour accompagner les repas et se rafraîchir."
                        autre="Boisson froide, gazeuse."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Boisson Énergisante"
                        description="Une boisson pétillante et stimulante, idéale pour un regain d'énergie en cours de journée."
                        autre="Boisson froide, énergisante."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                </div>
            </div>
        </div>
    );
}
