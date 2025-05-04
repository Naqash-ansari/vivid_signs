'use client'

// import Link from "next/link";
// import { IoLogoWebComponent } from "react-icons/io5";
import Home from "./web/Home";
import { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { BsSignpostSplitFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdPrint } from "react-icons/io";





const page = () => {

    const [component, setComponent] = useState(null)

    const servicesDataaa = {
        "webServices": [
            {
                "id": "menu-item-1423",
                "name": "Domain & Website",
                "url": "/services/web",
                "icon": `IoLogoWebComponent`,
                "Pages": <Home />,
                "Icon": <TbWorldWww />,
                "text": "We provide reliable domain registration and beautifully crafted websites to give your business a strong online presence."
            },
            // {
            //     "id": "menu-item-1422",
            //     "name": "Merchant Services",
            //     "url": "/soon",
            //     "text": "Offer seamless and secure payment experiences to your customers with our tailored merchant services."
            // },
            {
                "id": "menu-item-1173",
                "name": "Sign & Graphics",
                "url": "/soon",
                "Icon": <BsSignpostSplitFill />,
                "Pages": <Home />,
                "text": "Boost your brand visibility with custom-designed signs and impactful graphics for all spaces."
            },
            {
                "id": "menu-item-1174",
                "name": "Design & Print",
                "url": "/soon",
                "Icon": <IoMdPrint />,
                "Pages": <Home />,
                "text": "From brochures to flyers, we deliver top-notch design and printing solutions to make your brand stand out."
            },
            {
                "id": "menu-item-1175",
                "name": "Social Media",
                "Icon": <IoShareSocialSharp />,
                "Pages": <Home />,
                "url": "/soon",
                "text": "Engage your audience and grow your online presence with our expert social media management services."
            }
        ],
        "otherServices": [
            {
                "id": "menu-item-1426",
                "name": "Branding & Packaging",
                "url": "/soon",
                "text": "We create memorable branding and attractive packaging that reflects your business values and style."
            },
            {
                "id": "menu-item-1425",
                "name": "Business Magazines",
                "url": "/soon",
                "text": "Promote your services and stories through high-quality business magazine publications."
            },
            {
                "id": "menu-item-1424",
                "name": "Shop Renovation",
                "url": "/soon",
                "text": "Upgrade your shop with smart renovations that improve space, design, and customer experience."
            },
            {
                "id": "menu-item-6614",
                "name": "Pavement Signs",
                "url": "/soon",
                "text": "Draw foot traffic with eye-catching and durable pavement signs tailored for your store."
            },
            {
                "id": "menu-item-14258",
                "name": "Business Utilities",
                "url": "/soon",
                "text": "Get support with essential business utilities to streamline your operations and reduce costs."
            }
        ]
    };


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 min-h-screen">

                {/* Sidebar */}
                <div className="bg-black p-4 flex flex-col space-y-4  top-0 left-0 h-full w-60 overflow-y-auto">
                    <h2 className="text-white font-bold text-xl mb-6">Service Categories</h2>

                    {/* Web Services */}
                    {servicesDataaa.webServices.map((service) => (
                        // <Link
                        //     key={service.id}
                        //     href={service.url}
                        //     className="flex items-center text-dm text-white hover:bg-amber-600 p-2 rounded transition"
                        // >
                        //     {/* <span className="material-icons mr-2">build</span> */}
                        //     {service.name}
                        // </Link>
                        <div
                            key={service.id}
                            onClick={() => setComponent(service.id)}
                            className="flex items-center text-dm text-white hover:bg-amber-600 service_icon p-2 rounded transition"
                        >
                            {/* <span className="material-icons mr-2">build</span> */}
                            <span className="mr-2 text-2xl text-amber-500">{service.Icon}</span>
                            {service.name}
                        </div>
                    ))}

                    {/* Other Services */}
                    <h3 className="text-white font-bold text-lg mt-8 mb-4">Other Services</h3>
                    {/* {servicesDataaa.otherServices.map((service) => (
                        <a
                            key={service.id}
                            href={service.url}
                            className="flex items-center text-white hover:bg-amber-600 p-2 rounded transition"
                        >
                            <span className="material-icons mr-2">construction</span>
                            {service.name}
                        </a>
                    ))} */}
                </div>

                <div className="col-span-4 text-white p-6">
                    {/* <h1 className="text-2xl font-bold text-black">Hello</h1>
                    <p>This is the main content area.</p> */}

                    {servicesDataaa.webServices.map((service) => (

                        <div
                            key={service.id}
                            onClick={() => setComponent(service.id)}
                            className=""
                        >
                            {/* <span className="material-icons mr-2">build</span> */}
                            {component === service.id && service.Pages}
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default page