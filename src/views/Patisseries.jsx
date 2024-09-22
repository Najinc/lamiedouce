import React from "react";
import ProduitGauche from "../components/ProduitGauche";
import ProduitDroite from "../components/ProduitDroite";

export default function Patisseries() {
    return (
        <div className="bg-white dark:bg-dark-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 my-5">
                <div className="w-full">
                    <ProduitGauche
                        nom="Éclair au Chocolat"
                        description="Une pâte à choux moelleuse garnie de crème pâtissière au chocolat, recouverte d’un glaçage fondant. Une classique et gourmande douceur."
                        autre="Pâte à choux, crème chocolat, glaçage."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Tarte aux Fraises"
                        description="Une base de pâte sablée croustillante, garnie de crème pâtissière onctueuse et de fraises fraîches, légèrement nappées."
                        autre="Pâte sablée, crème pâtissière, fraises."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Mille-Feuille"
                        description="Trois couches de pâte feuilletée croustillante, alternées avec de la crème pâtissière vanille et un glaçage fin. Croquant et crémeux à la fois."
                        autre="Pâte feuilletée, crème pâtissière, glaçage."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Opéra"
                        description="Un gâteau élégant aux couches de biscuit joconde, imbibé de café, avec une ganache au chocolat et une fine couche de glaçage miroir."
                        autre="Biscuit joconde, café, chocolat."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Tarte au Citron Meringuée"
                        description="Une pâte sablée croustillante garnie d’une crème citron acidulée, surmontée d’une meringue italienne dorée. Un équilibre parfait entre douceur et acidité."
                        autre="Pâte sablée, citron, meringue."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Paris-Brest"
                        description="Une couronne de pâte à choux garnie d’une crème mousseline pralinée, parsemée d’amandes effilées. Inspirée par la course cycliste Paris-Brest."
                        autre="Pâte à choux, praliné, amandes."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Religieuse au Café"
                        description="Deux choux garnis de crème au café, superposés et recouverts d’un glaçage au café, avec une touche de crème pour la décoration."
                        autre="Pâte à choux, crème café, glaçage."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Tarte Tatin"
                        description="Une tarte renversée aux pommes caramélisées, fondantes à souhait, cuites directement dans le caramel avant d’être recouvertes de pâte."
                        autre="Pommes, caramel, pâte brisée."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Fondant au Chocolat"
                        description="Un gâteau au chocolat au cœur fondant et coulant, à savourer chaud pour une explosion de saveurs intenses. Un classique des amateurs de chocolat."
                        autre="Chocolat, beurre, œufs."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Macaron Framboise"
                        description="Deux coques légères et croquantes, garnies d’une ganache onctueuse à la framboise, pour un équilibre parfait entre douceur et acidité."
                        autre="Amandes, framboise, sucre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                </div>
            </div>
        </div>
    );
}
