import React from 'react'
import Map_Icon from '../assets/contact/map1.webp'
import phone from '../assets/contact/phone.gif'
import email from '../assets/contact/Email.gif'
import Image from 'next/image'

const WhyChoose = () => {
    return (
        <div className='bg-amber-600 pt-16 pb-24 mt-30'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
                <section className="py-12 px-6 ">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white">WHY CHOOSE US?</h2>
                        <p className="text-white mt-2">
                            We offer a complete range of fast, reliable, and secure solutions, so you can give your <br /> customers the best payment experience possible..
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Address */}
                        {/* <a
                            href="https://www.google.com/maps/dir/?api=1&destination=377+Cheetham+Hill+House,Manchester,M8+0SF,UK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        > */}
                        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-xl text-center flex flex-col items-center cursor-pointer">
                            {/* <span className="text-3xl">
                                    <Image alt="map" width={100} height="auto" src={Map_Icon} />
                                </span> */}
                            <p className="text-2xl  font-semibold mt-3">Simplicity</p>
                            <p className="text-sm font- mt-6">Our card machines are chosen for their speed and reliability. In a recent survey, 85% of customers said they were very or extremely(cut) happy with our transaction speeds.</p>
                        </div>
                        {/* </a> */}



                        {/* Phone */}
                        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-xl text-center flex flex-col items-center cursor-pointer">
                            {/* <a href="tel:+923070468097" className="block">
                                <span className="text-3xl">
                                    <Image alt="phone" width={100} height={'auto'} src={phone} />
                                </span>
                                <p className="font-semibold mt-3 text-white">470-601-1911</p>
                            </a> */}
                            <p className="text-2xl  font-semibold mt-3">Services</p>
                            <p className="text-sm font- mt-6">Our customer support team is always there to help, whether it’s getting you up and running or resolving a technical problem that needs sorting quickly.</p>

                        </div>


                        {/* Email */}
                        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-xl text-center flex flex-col items-center cursor-pointer">
                            {/* <a href="mailto:pagedone1234@gmail.com" className="block">
                                <span className="text-3xl">
                                    <Image alt="email" width={200} height="auto" src={email} />
                                </span>
                                <p className="text-white font-semibold mt-3">pagedone1234@gmail.com</p>
                            </a> */}
                            <p className="text-2xl  font-semibold mt-3">Speed</p>
                            <p className="text-sm font- mt-6">Our card machines are chosen for their speed and reliability. In a recent survey, 85% of customers said they were very or extremely(cut) happy with our transaction speeds.</p>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default WhyChoose