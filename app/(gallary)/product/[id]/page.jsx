"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import img from "../../../assets/images/Gold.jpg";
import img1 from '../../../assets/images/Gold.jpg'
import { useEffect, useState } from "react";
import Link from "next/link";
import ShopSign from "../ProductCategories/shopsigns/ShopSign";
import ColorDrawer from "../ProductCategories/shopsigns/ColorDrawer";
import TextColorDrawer from "../ProductCategories/shopsigns/TextColorDrawer";
import UserModal from "../ProductCategories/shopsigns/UserModal";



const Product = () => {
    const params = useParams();
    const [filterProduct, setFilterProduct] = useState([]);
    const [shopSignText, setShopSignText] = useState('');
    const [bgColor, setBgColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');
    const [font, setFont] = useState("roboto");
    const [textSize, setTextSize] = useState('12px');
    const [selectWidth, setSelectWidth] = useState('50');
    const [selectHeight, setSelectHeight] = useState('20');

    const UserdecideDesign = { bane: shopSignText, bgColor: bgColor, textColor: textColor, fontFamily: font, textSize: textSize, selectWidth: selectWidth, selectHeight: selectHeight }

    const products = [
        {
            id: 1,
            name: 'Shops Signs',
            image: img1,
            price: '$599',
            rating: 4.5,
            text: "Make your storefront stand out with our custom Shop Signs — designed to attract customers, reflect your brand, and enhance visibility."
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

    const filterData = products.filter((item) => item.id == params?.id);

    useEffect(() => {
        setFilterProduct(filterData[0])
    }, [])



    const handleFontChange = (e) => {
        setFont(e.target.value);
    };

    const handleTextSizeChange = (e) => {
        setTextSize(e.target.value);
    }



    return (
        <div className="py-24 mb-14 md:py-16 container mx-auto">
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className=" px-5 mb-40">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full relative h-96">

                            {
                                filterData[0]?.id == 1 ? <>
                                    <ShopSign getWidth={setSelectWidth} getHeight={setSelectHeight} getInputSignText={(val) => setShopSignText(val)} selectHeight={selectHeight} selectWidth={selectWidth} textSize={textSize} Signtext={shopSignText} bgColor={bgColor} textColorChoice={textColor} fontFamily={font} />

                                </> :
                                    <Image
                                        src={img}
                                        alt="Product Image"
                                        fill
                                        className="object-cover object-center rounded border border-gray-200"
                                    />
                            }
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{filterProduct.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center text-amber-500">★★★★★</span>
                                <span className="text-gray-600 ml-3">{filterProduct.rating} Reviews</span>
                            </div>
                            <p className="leading-relaxed">
                                {filterProduct.text}
                            </p>
                            <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Text Color</span>
                                    <TextColorDrawer getTextcolor={(e) => setTextColor(e)} />
                                </div>

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Style</span>

                                    <select
                                        onChange={handleFontChange}
                                        value={font}
                                        className="border p-2 rounded"
                                    >
                                        <option value="">Custom</option>
                                        <option value="monospace">Mono</option>
                                        <option value="'Brush Script MT', cursive">Aladin</option>
                                        <option value="cursive">Serif</option>
                                        <option value="fantasy">Fantasy</option>

                                    </select>

                                </div>
                            </div>

                            <div className="flex justify-between mt-10 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Background Color</span>
                                    <ColorDrawer colorGet={(e) => setBgColor(e)} />
                                </div>

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>

                                    <select
                                        className="border p-2 rounded"
                                        onChange={handleTextSizeChange}
                                        value={textSize}
                                    >
                                        <option value="14px">SM</option>
                                        <option value="16px">M</option>
                                        <option value="18px">L</option>
                                        <option value="20px">XL</option>
                                    </select>
                                </div>

                            </div>



                            <div className="flex w-full items-center justify-between">
                                <span className="title-font font-medium text-2xl text-gray-900">{filterProduct.price}</span>
                                {/* <Link href='/contact' className="flex ml-auto text-white nav btn_hov border-0 py-2 px-6 focus:outline-none rounded">
                                    Save & Continue
                                </Link> */}
                                {shopSignText && <UserModal finalShopDesign={UserdecideDesign} />}

                            </div>
                        </div>
                    </div>
                </div>

                {filterData[0]?.id == 1 ? <>
                    <div className="grid grid-cols-1 px-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center">
                            <Image className="rounded-lg" alt="shop sign" width={500} height={200} src={img1} />
                        </div>
                        <div className="text-center">
                            <Image className="rounded-lg" alt="shop sign" width={500} height={200} src={img1} />
                        </div>
                        <div className="text-center">
                            <Image className="rounded-lg" alt="shop sign" width={500} height={200} src={img1} />
                        </div>
                        <div className="text-center">
                            <Image className="rounded-lg" alt="shop sign" width={500} height={200} src={img1} />
                        </div>
                    </div>

                </> : 'hanji'}

            </section>

        </div>
    );
};

export default Product;
