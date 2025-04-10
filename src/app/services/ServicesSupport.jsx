import Image from 'next/image'
import img from '../assets/services/services.gif'
import '../assets/about/about.css'
import SlotCounter from 'react-slot-counter';



const ServicesSupport = () => {
    return (
        <div className='bg-amber-600 p-8 mt-0'>
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
                            <h2 className="my-4 font-bold text-3xl  sm:text-4xl text-white">Our Services
                                {/* <SlotCounter
                                value="Company"
                                dummyCharacters={'Company'}
                                duration={2}
                                
                            /> */}

                            </h2>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                                voluptatum.
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