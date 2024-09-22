import React from "react";
import ProduitGauche from "../components/ProduitGauche";
import ProduitDroite from "../components/ProduitDroite";

export default function Pains() {
    return (
        <div className="bg-white dark:bg-dark-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col p-8 my-5">
                <div className="w-full">
                    <ProduitGauche
                        nom="Baguette Tradition"
                        description="Une baguette croustillante à l'extérieur, moelleuse à l'intérieur, réalisée avec une fermentation lente. Parfaite pour accompagner tous les repas."
                        autre="Farine de blé, levure, sel."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pain Complet"
                        description="Un pain dense et nourrissant, riche en fibres, idéal pour ceux qui recherchent un pain plus rustique. Parfait pour le petit-déjeuner ou les toasts."
                        autre="Farine complète, levure, eau."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pain de Campagne"
                        description="Un pain à la croûte épaisse, à la mie alvéolée, au goût légèrement acidulé grâce à la fermentation au levain."
                        autre="Farine de blé, levain, sel."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pain aux Noix"
                        description="Un pain généreusement garni de morceaux de noix, offrant une texture croquante et une saveur légèrement sucrée."
                        autre="Farine de blé, noix, levure."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pain aux Céréales"
                        description="Un pain riche en graines (tournesol, sésame, lin), offrant une texture croustillante et un goût rustique. Parfait pour un repas équilibré."
                        autre="Farine de blé, graines variées, levain."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pain de Seigle"
                        description="Un pain foncé et légèrement acide, à la texture dense, idéal pour accompagner des plats de charcuterie ou des fromages forts."
                        autre="Farine de seigle, levain, eau."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pain au Maïs"
                        description="Un pain moelleux et légèrement sucré, au goût délicat de maïs. Parfait pour accompagner des plats exotiques ou épicés."
                        autre="Farine de maïs, farine de blé, levure."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pain aux Olives"
                        description="Un pain aromatique garni d'olives noires, idéal pour les apéritifs ou les repas méditerranéens."
                        autre="Farine de blé, olives, levure."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitGauche
                        nom="Pain de Mie"
                        description="Un pain doux et moelleux, parfait pour les toasts ou les sandwichs. Sa texture aérienne le rend irrésistible."
                        autre="Farine de blé, lait, beurre."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                    <ProduitDroite
                        nom="Pain Viking"
                        description="Un pain riche en fibres et en céréales, combinant plusieurs farines (seigle, orge, avoine). Un choix nutritif pour un régime équilibré."
                        autre="Farine de seigle, orge, avoine."
                        image="url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )"
                    />
                </div>
            </div>
        </div>
    );
}
