"use client"

import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const BlogPage = () => {

    const blogs = [
        {
            title: "Clever ways to invest in product to organize your portfolio",
            img: "https://pagedone.io/asset/uploads/1696244059.png",
            desc: "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...",
        },
        {
            title: "How to grow your profit through systematic investment with us",
            img: "https://pagedone.io/asset/uploads/1696244074.png",
            desc: "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial..",
        },
    ];

    return (
        <section className="py-24 bg-amber-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center flex-wrap lg:flex-nowrap lg:justify-between gap-8">
                    <div className="w-full lg:w-2/5">
                        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                            <span className="text-white"></span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Our latest news',
                                    1000,
                                    'Our latest blogs',
                                    1000,
                                    'Our latest posts',
                                    1000,
                                    'Our latest insights',
                                    1000,
                                ]}
                                speed={50}
                                // style={{ fontSize: '2em' }}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="text-white mb-10">
                            Welcome to our blog section, where knowledge meets inspiration.
                        </p>
                        <button className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 text-white font-semibold hover:bg-gray-100 hover:text-amber-600">
                            View All
                        </button>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {blogs.map((blog, index) => (
                                <div key={index} className="space-y-4">
                                    <img src={blog.img} alt={blog.title} className="rounded-2xl w-full" />
                                    <h3 className="text-xl underline text-white font-medium">{blog.title}</h3>
                                    <p className="text-white text-sm">{blog.desc}</p>
                                    <a href="#" className="text-white font-semibold">Read more</a>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default BlogPage;
