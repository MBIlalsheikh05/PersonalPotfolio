import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-center text-2xl sm:text-5xl py-10 font-sans font-bold hover:text-orange-700 mt-2">Latest Work On Projects</h1>

            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">

                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">

                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-130 h-70 rounded-xl" src="pro2.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48 rounded-xl" src="pro1.jpg" alt="image2" />
            </div>
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48 rounded-xl" src="pro3.jpg" alt="image2" />
            </div>

        </div>
    );
}
