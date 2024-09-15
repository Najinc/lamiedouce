import React from "react";

export default function NotFoundView() {
    return (
        <div className="grid h-screen place-content-center bg-white px-4 py-28">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>
                <p className="text-2xl font-bold tracking-tight text-middle-purple font-lexend sm:text-4xl">
                    Page inexistante 😓
                </p>
                <p className="mt-4 text-gray-500 font-dmsans">
                    La page que vous recherchez n&apos;existe pas.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block rounded bg-dark-purple px-5 py-3 text-sm font-medium font-lexend text-white hover:bg-light-purple focus:outline-none focus:ring"
                >
                    Retourner à l&apos;accueil
                </a>
            </div>
        </div>
    );
}
