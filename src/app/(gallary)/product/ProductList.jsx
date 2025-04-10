"use client"

import '../../assets/productList/pro.css'
import img1 from '../../assets/images/Gold.jpg'
import Image from 'next/image';
import { useState } from 'react';
import ImgIssue from './ImgIssue';
import Link from 'next/link';

const ProductList = () => {

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


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Calculate the index of the first and last item to be shown on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the products array to show only the current page items
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className='text-center py-16 relative bg-slate-50'>
            {/* <h1 className="title-shop">SHOP</h1> */}
            <h1 className="text-3xl font-bold text- dark:text-white  iansui-regular">Transform Your Business with Premium <span className='underline text-amber-600'>Signage</span> & <span className='underline text-amber-600'>Rebranding</span></h1>

            <main className="main bd-grid py-6 z-50">

                {/* start here */}
                {/* {products.map((product) => ( */}
                {currentProducts.map((product) => (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                    // className="nav btn_hov iansui-regular bg-[#0f1014] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        <article className="card shadow-2xl" >
                            <div className="card__img">
                                <Image
                                    src={product.image}
                                    alt="product image"
                                    width={600}
                                    height={600}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="card__name">
                                <p>{product.name}</p>
                            </div>
                            <div className="card__precis">
                                {/* <a href="" className="card__icon" ><ion-icon name="heart-outline"></ion-icon></a> */}

                                <div>
                                    <span className="card__preci card__preci--before">$990.00</span>
                                    <span className="card__preci card__preci--now">{product.name}</span>

                                    {/* More Info */}
                                </div>
                                {/* <a href="" className="card__icon"><ion-icon name="cart-outline"></ion-icon></a> */}
                            </div>
                        </article>
                    </Link>
                ))}


                {/* end here */}


            </main>


            <div className="row flex text-center justify-center ">
                {/* Prev button */}
                <button
                    className="rounded-md mx-1 rounded-r-none border border-r-0 border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-600 hover:border-ambg-amber-600 focus:text-white focus:bg-amber-600 focus:border-ambg-amber-600 active:border-ambg-amber-600 active:text-white active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)} // Navigate to the previous page
                    disabled={currentPage === 1} // Disable if on the first page
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Dynamically generated page buttons */}
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page}
                        // className="rounded-md rounded-r-none rounded-l-none border border-r-0 border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        className={`px-4 py-2 mx-1 ${currentPage === page + 1 ? 'bg-amber-600' : 'bg-gray-300'} text-white rounded`}
                        type="button"
                        onClick={() => handlePageChange(page + 1)} // Handle page change
                    >
                        {page + 1}
                    </button>
                ))}

                {/* Next button */}
                <button
                    className="rounded-md mx-1 rounded-l-none border border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-600 hover:border-amber-600 focus:text-white focus:bg-amber-600 focus:border-bg-amber-600 active:border-bg-amber-600 active:text-white active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)} // Navigate to the next page
                    disabled={currentPage === totalPages} // Disable if on the last page
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {/* <ImgIssue /> */}
        </div>
    )
}

export default ProductList