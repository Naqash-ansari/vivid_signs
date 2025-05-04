'use client'

import { useState } from 'react'
import './style.css'
import Image from 'next/image';

import web from './web.gif'
import Merg_services from './mergent_ser.gif'
import Link from 'next/link';

const PrivateService = () => {
    const defaultText = {
        id: 'default',
        name: 'Our Aims',
        text: 'Our aim is to empower businesses with innovative, efficient, and user-focused digital solutions. We strive to deliver exceptional services that not only meet but exceed our clients expectations — whether it’s crafting a compelling online presence, streamlining operations, or enhancing user engagement. With a strong commitment to quality, security, and customer satisfaction, we help businesses thrive in an ever-evolving digital landscape.',
    };
    const [servicesData, setServicesData] = useState(defaultText);

    // Handler to change text on hover
    const handleMouseEnter = (text) => {
        setServicesData(text); // Update with the provided text
    }

    // Handler to reset text when hover ends
    const handleMouseLeave = () => {
        setServicesData(defaultText); // Reset to default text
    }

    const servicesDataaa = {
        "webServices": [
            {
                "id": "menu-item-1423",
                "name": "Domain & Website",
                "url": "/services/web",
                "text": "We provide reliable domain registration and beautifully crafted websites to give your business a strong online presence."
            },
            {
                "id": "menu-item-1422",
                "name": "Merchant Services",
                "url": "/soon",
                "text": "Offer seamless and secure payment experiences to your customers with our tailored merchant services."
            },
            {
                "id": "menu-item-1173",
                "name": "Sign & Graphics",
                "url": "/soon",
                "text": "Boost your brand visibility with custom-designed signs and impactful graphics for all spaces."
            },
            {
                "id": "menu-item-1174",
                "name": "Design & Print",
                "url": "/soon",
                "text": "From brochures to flyers, we deliver top-notch design and printing solutions to make your brand stand out."
            },
            {
                "id": "menu-item-1175",
                "name": "Social Media",
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
        <div className='bg-amber-600 py-16 pb-24'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <section className="py-8 px-6">
                    <div className="max-w-4xl pb-4 mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white">Our Services</h2>
                        <p className='text-white pt-3 text-md'>Our services are designed to help businesses grow and succeed with a variety of creative and technical solutions, all delivered with a focus on quality and customer satisfaction. Whether you need to establish an online presence, redesign your brand, or improve operational efficiency, our services are tailored to meet your unique needs.</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Other Services */}
                        <div className='space-y-2'>
                            {servicesDataaa.otherServices.map(service => (
                                <div key={service.id}>
                                    <Link href={service.url}>
                                        <div
                                            onMouseEnter={() => handleMouseEnter({ text: service.text, id: service.id, name: service.name })}
                                            onMouseLeave={handleMouseLeave}
                                            className="bg-black text-white p-5 rounded"
                                        >
                                            <p className="hfe-sub-menu-item">{service.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Aims Section */}
                        <div className={`rounded col-span-1 sm:col-span-2 bg-white p-4 sm:p-12 md:p-4 h-full text-center flex flex-col justify-center items-center cursor-pointer`}>
                            <p className="text-2xl font-semibold">{servicesData.name}</p>
                            <p className="text-md py-2 max-w-md">{servicesData.text}</p>

                            {servicesData.id !== 'default' ? <>
                                <div className='py-2'>{servicesData.id === 'menu-item-1423' ? <Image src={web} width={150} height={'auto'} alt='test' /> : ''}</div>
                                <div className='py-2'>{servicesData.id === 'menu-item-1422' ? <Image src={Merg_services} width={180} height={'auto'} alt='test' /> : ''}</div>
                                <div className='py-2'>{servicesData.id === 'menu-item-1173' ? <div className='bg-amber-600 rounded text-white p-4'><b>click tab and go to design pages</b></div> : ''}</div>
                            </> : ''}
                        </div>

                        {/* Web Services */}
                        <div className="space-y-2">
                            {servicesDataaa.webServices.map(service => (
                                <div key={service.id}>
                                    <Link href={service.url}>
                                        <div
                                            onMouseEnter={() => handleMouseEnter({ text: service.text, id: service.id, name: service.name })}
                                            onMouseLeave={handleMouseLeave}
                                            className="bg-black text-white p-5 rounded w-full"
                                        >
                                            <span className="hfe-sub-menu-item">{service.name}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivateService;
