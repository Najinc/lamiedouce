import React from "react";
import PropTypes from "prop-types";

export default function ProduitDroite({ nom, description, autre, image }) {
    return (
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2 my-10">
            <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-lg">
                <div
                    className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                    style={{
                        backgroundImage: image,
                        backgroundBlendMode: "multiply",
                    }}
                />
                <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                    <p className="w-full text-white font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl leading-tight mb-3">
                        {nom}
                    </p>
                </div>
                <svg
                    className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
            </div>
            <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                    <p className="hidden md:block text-middle-purple dark:text-light-purple font-semibold font-lexend lg:text-4xl md:text-3xl text-2xl">
                        {nom}
                    </p>
                    <p className="text-gray-700 font-dmsans lg:text-base md:text-sm text-xs md:mt-3 mt-0">
                        {description}
                    </p>
                    <p className="text-gray-400 font-dmsans lg:text-base md:text-sm text-xs mt-1">
                        Ingrédient(s) : {autre}
                    </p>
                </div>
            </div>
        </div>
    );
}

ProduitDroite.propTypes = {
    nom: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    autre: PropTypes.string,
    image: PropTypes.string.isRequired,
};

ProduitDroite.defaultProps = {
    autre: "",
};
