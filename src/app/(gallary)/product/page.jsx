'use client';

import Image from 'next/image';
import { useState } from 'react';
import img1 from '../../assets/images/Gold.jpg'
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: 'Shops Signs',
        image: img1,
        price: '$599',
        rating: 4.5
    },
    {
        id: 2,
        name: '3D Signs',
        image: img1,
        price: '$349',
        rating: 4.2
    },
    {
        id: 3,
        name: 'Fretcut Signs',
        image: img1,
        price: '$229',
        rating: 4.0
    },
    {
        id: 4,
        name: 'Projection Signs',
        image: img1,
        price: '$699',
        rating: 4.7
    },
    {
        id: 5,
        name: 'PVC Banner',
        image: img1,
        price: '$299',
        rating: 4.3
    },
    {
        id: 6,
        name: 'Roll-Up Banner',
        image: img1,
        price: '$199',
        rating: 4.1
    },
    {
        id: 7,
        name: 'Vinyl',
        image: img1,
        price: '$99',
        rating: 4.0
    },
    {
        id: 8,
        name: 'Backlits',
        image: img1,
        price: '$399',
        rating: 4.6
    },
    {
        id: 9,
        name: 'Flags',
        image: img1,
        price: '$149',
        rating: 4.2
    },
    {
        id: 10,
        name: 'Window Graphics',
        image: img1,
        price: '$259',
        rating: 4.3
    },
    {
        id: 11,
        name: 'Wall Graphics',
        image: img1,
        price: '$349',
        rating: 4.4
    },
    {
        id: 12,
        name: 'Vehicle Graphic',
        image: img1,
        price: '$499',
        rating: 4.7
    },
    {
        id: 13,
        name: 'Foamex Print',
        image: img1,
        price: '$129',
        rating: 4.1
    },
    {
        id: 14,
        name: 'Correx Print',
        image: img1,
        price: '$89',
        rating: 3.9
    },
    {
        id: 15,
        name: 'Taxi Magnets',
        image: img1,
        price: '$179',
        rating: 4.0
    },
    {
        id: 16,
        name: 'Exhibition Stand',
        image: img1,
        price: '$199',
        rating: 4.1
    },
];


const ProductCard = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="text-center py-16 bg-[#0f1014]">
            {/* <h1 className="text-3xl font-bold text-white dark:text-white pb-10 mulish ">Transform Your Business with Premium Signage & Rebranding</h1> */}
            <h1 className="text-3xl font-bold text-white dark:text-white pb-10  iansui-regular">Transform Your Business with Premium <span className='underline text-amber-400'>Signage</span> & <span className='underline text-amber-400'>Rebranding</span></h1>
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        {isFullScreen && selectedImage === product.image && (
                            <div className="fixed inset-0 flex items-center shadow-2xl justify-center bg-[#0000001a] bg-opacity-50 z-50">
                                <div className="border border-white border-dashed rounded-lg p-12 shadow-lg relative">
                                    <button
                                        className="absolute top-2 right-2 hover:text-amber-300 text-4xl transform transition-transform duration-300 hover:rotate-90 text-white"
                                        onClick={() => setIsFullScreen(false)}
                                    >
                                        <RxCross2 />
                                    </button>
                                    <Image
                                        src={product.image}
                                        alt="product image"
                                        width={600}
                                        height={600}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                        <a href="#" onClick={(e) => { e.preventDefault(); setSelectedImage(product.image); setIsFullScreen(true); }}>
                            <Image className="p-6  transition-transform duration-300 transform hover:scale-105" src={product.image} alt="product image" width={300} height={300} />
                        </a>
                        <div className="px-5 pb-5">
                            {/* <a href="#"> */}
                            <h5 className="text-lg iansui-regular text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                                {product.name}
                            </h5>
                            {/* </a> */}
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-4 h-4 ${index < Math.round(product.rating) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="nav text-white text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                                    {product.rating.toFixed(1)}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-gray-900 dark:text-white iansui-regular">{product.price}</span>
                                <Link
                                    // href={`/product/${product.id}`}
                                    className="nav btn_hov iansui-regular bg-[#0f1014] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    More Info
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;