import React from "react";
export default function About() {
   const url='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    return (
        
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         Development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        "I'm a dedicated web developer with a passion for turning ideas into reality through code/problem Solving and other web technologies, I specialize in creating dynamic, user-friendly websites and applications. My mission is to help others achieve their goals by providing them with high-quality, custom web solutions. Whether you're looking to build a personal blog, a business website, or an interactive web application, I'm here to bring your vision to life. Let's collaborate and create something amazing together!"
                        </p>
                        
                       <p className="text-xl font-extrabold text-slate-400"><h3 className="text-black">Proficiency In: </h3>HTML5,TailwindCss,Javascript,ReactJS,.Net,C#,SQL</p>

                    </div>
                </div>
            </div>
        </div>
        
    );
}