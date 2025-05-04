"use client"

import React, { useState } from "react";

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [clickedImageIndex, setClickedImageIndex] = useState(null); // Track which image was clicked

    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    ];

    const openModal = (image, index) => {
        setCurrentImage(image);
        setClickedImageIndex(index); // Track the clicked image
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setClickedImageIndex(null); // Reset clicked image
    };

    return (
        <div className="bg-neutral-700">
            <div className="px-2 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <h1 className="underline heading text-white text-3xl py-14 text-black-700 font-bold text-center">
                    Photos
                </h1>

                {/* <div className="grid p-3 md:p-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 pb-14">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer transition-all duration-700 ease-out transform ${clickedImageIndex === index ? 'translate-y-0' : 'translate-y-10'}`} // Animate up when clicked
                            onClick={() => openModal(image, index)}
                        >
                            <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div> */}


                <div className="grid p-3 md:p-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 pb-14">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative cursor-pointer transition-all duration-700 ease-out transform ${clickedImageIndex === index ? 'translate-y-0' : 'translate-y-10'}`}
                            onClick={() => openModal(image, index)}
                        >
                            {/* Overlay added here */}
                            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-lg"></div>
                            <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>



            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 text-white text-4xl p-3 cursor-pointer ease-in-out hover:rotate-45"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img className="max-w-full max-h-screen rounded-lg" src={currentImage} alt="Modal Image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
