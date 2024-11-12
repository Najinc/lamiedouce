import React from "react";
import ProduitGauche from "../components/ProduitGauche";
import ProduitDroite from "../components/ProduitDroite";

export default function Snacking() {
    return (
        <div className="bg-white dark:bg-dark-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 my-5">
                <div className="w-full">
                    <ProduitGauche
                        nom="Quiche Lorraine"
                        description="Une pâte brisée garnie d’un appareil crémeux à base de crème, d’œufs et de lardons, gratinée au four pour un résultat fondant et savoureux."
                        autre="Pâte brisée, lardons, crème."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Croque-Monsieur"
                        description="Deux tranches de pain de mie garnies de jambon et de fromage, gratinées avec une béchamel onctueuse. Un classique du snacking."
                        autre="Pain de mie, jambon, emmental."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Fougasse aux Olives"
                        description="Un pain moelleux garni d'olives noires, aux saveurs méditerranéennes, avec une croûte légèrement dorée. Idéal pour un encas ou un apéritif."
                        autre="Farine, olives, huile d’olive."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pizza Margarita"
                        description="Une pâte fine recouverte de sauce tomate, de mozzarella fondue et de basilic frais, cuite au four pour un goût authentique."
                        autre="Pâte à pizza, tomate, mozzarella."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Chausson au Fromage"
                        description="Une pâte feuilletée garnie d’un mélange de fromages fondants, dorée au four pour une texture croustillante et gourmande."
                        autre="Pâte feuilletée, fromage, crème."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Wrap au Poulet"
                        description="Une galette de blé garnie de morceaux de poulet tendre, de légumes croquants et d’une sauce légère. Idéal pour un repas rapide et équilibré."
                        autre="Galette de blé, poulet, légumes."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pain Bagnat"
                        description="Un pain rond moelleux garni de thon, d’œufs durs, de crudités et d'olives, typique de la cuisine niçoise, frais et savoureux."
                        autre="Pain, thon, crudités."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Feuilleté au Saumon"
                        description="Une pâte feuilletée garnie de saumon fumé et d’un peu de crème, cuite au four pour un en-cas croustillant et raffiné."
                        autre="Pâte feuilletée, saumon, crème."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Panini Jambon-Mozzarella"
                        description="Un pain allongé garni de jambon et de mozzarella fondante, toasté pour une texture croustillante à l’extérieur et fondante à l’intérieur."
                        autre="Pain panini, jambon, mozzarella."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Tartelette aux Légumes Grillés"
                        description="Une pâte brisée garnie de légumes de saison grillés (courgettes, poivrons, aubergines), parfaite pour une pause saine et gourmande."
                        autre="Pâte brisée, légumes, huile d'olive."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                </div>
            </div>
        </div>
    );
}
