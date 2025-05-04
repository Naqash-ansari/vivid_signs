import Image from 'next/image'
import img from '../assets/services/services.gif'
import '../assets/about/about.css'
import SlotCounter from 'react-slot-counter';



const ServicesSupport = () => {
    return (
        <div className='bg-amber-600 mt-26 p-18 pb-28'>
            <div className='mx-auto max-w-7xl'>
                <div className="sm:flex items-center max-w-screen-xl py-16 rounded border-white border border-dashed">
                    <div className="sm:w-1/2 p-10">
                        <div className="image object-center text-center">
                            <Image width={600} height={'auto'} src={img} alt='about' />
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-5 " >
                        <div className="text">
                            <span className="text-white border-b-2 border-amber-600 uppercase underline">Our Services</span>
                            <h2 className="my-4 font-bold text-3xl  sm:text-4xl text-white">Our Support
                                {/* <SlotCounter
                                value="Company"
                                dummyCharacters={'Company'}
                                duration={2}
                                
                            /> */}

                            </h2>
                            <p className="text-white">
                                We’re here to help you at every step. Whether you have a question, need technical assistance, or require personalized guidance, our support team is dedicated to providing fast, reliable, and friendly service. Your success is our priority, and we’re just one message away.
                            </p>

                            {/* <div className="flex">
                            <SlotCounter
                                value="1234"
                                dummyCharacters={'Company'}
                                duration={2}
                            />
                            <SlotCounter
                                value="Company"
                                dummyCharacters={'Company'}
                                duration={2}
                            />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSupport