import React from "react";

export default function Tools() {
    return (
        <div className="fixed bottom-6 end-6 p-1 bg-light-purple rounded-full flex gap-2">
            <a
                href="#top"
                aria-label="top"
                type="button"
                className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 flex items-center justify-center text-white bg-dark-purple hover:bg-middle-purple rounded-full"
            >
                <i className="bx bx-chevron-up lg:text-3xl md:text-2xl text-xl" />
            </a>
        </div>
    );
}
