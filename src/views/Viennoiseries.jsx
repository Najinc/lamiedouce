import React from "react";
import ProduitGauche from "../components/ProduitGauche";
import ProduitDroite from "../components/ProduitDroite";

export default function Viennoiseries() {
    return (
        <div className="bg-white dark:bg-dark-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 my-5">
                <div className="w-full">
                    <ProduitGauche
                        nom="Croissant au Beurre"
                        description="Un classique incontournable, feuilleté et doré, à la texture légère et croustillante, fait avec du beurre de qualité pour une saveur riche."
                        autre="Farine, beurre, levure."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pain au Chocolat"
                        description="Une pâte feuilletée garnie de barres de chocolat fondant, parfaite pour le petit-déjeuner ou une pause gourmande. Croustillant et chocolaté."
                        autre="Pâte feuilletée, chocolat, beurre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Chausson aux Pommes"
                        description="Une pâte feuilletée enveloppant une compote de pommes douce et légèrement acidulée. Croustillant à l'extérieur, fondant à l'intérieur."
                        autre="Pâte feuilletée, pommes, sucre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Brioche Nanterre"
                        description="Une brioche moelleuse et aérienne, légèrement sucrée et au goût subtil de beurre, idéale pour le petit-déjeuner ou le goûter."
                        autre="Farine, beurre, œufs."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pain aux Raisins"
                        description="Une viennoiserie roulée garnie de crème pâtissière et de raisins secs, avec un feuilletage doré et croustillant. Gourmandise parfaite pour accompagner un café."
                        autre="Pâte feuilletée, raisins secs, crème pâtissière."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Cinnamon Roll"
                        description="Une viennoiserie roulée, garnie d’une délicieuse pâte à la cannelle et parfois glacée. Moelleux et parfumé pour les amateurs d’épices douces."
                        autre="Pâte levée, cannelle, sucre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pains Suisses"
                        description="Une pâte feuilletée garnie de crème pâtissière et de pépites de chocolat, le tout en forme de rectangle. Moelleux et croquant à la fois."
                        autre="Pâte feuilletée, crème pâtissière, chocolat."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Croissant aux Amandes"
                        description="Un croissant garni d’une crème d’amande et recouvert d’amandes effilées grillées. Parfait pour les amateurs de viennoiseries plus riches et gourmandes."
                        autre="Croissant, amandes, sucre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Brioche aux Pralines Roses"
                        description="Une brioche moelleuse garnie de pralines roses croquantes, qui fondent légèrement à la cuisson pour un contraste sucré et croustillant."
                        autre="Farine, beurre, pralines roses."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Kouign-Amann"
                        description="Une spécialité bretonne, croustillante et caramélisée, à base de pâte feuilletée généreusement imbibée de beurre et de sucre. Un pur délice fondant et croquant."
                        autre="Pâte feuilletée, beurre, sucre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                </div>
            </div>
        </div>
    );
}
