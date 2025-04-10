"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import img from "../../../assets/images/Gold.jpg";

const Product = () => {
    const params = useParams();

    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full relative h-96">
                            <Image
                                src={img}
                                alt="Product Image"
                                fill
                                className="object-cover object-center rounded border border-gray-200"
                            />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center text-red-500">★★★★★</span>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </div>
                            <p className="leading-relaxed">
                                Fam locavore kickstarter distillery. Mixtape chillwave turmeric sriracha chia microdosing tilde DIY.
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <select className="rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <button className="flex ml-auto text-white nav btn_hov border-0 py-2 px-6 focus:outline-none rounded">
                                    Add to Cart
                                </button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    ❤️
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
