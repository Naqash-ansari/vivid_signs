import Image from 'next/image'
import img from '../assets/about/b1.jpg'
import '../assets/about/about.css'
import SlotCounter from 'react-slot-counter';



const AboutText = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <Image width={600} height={'auto'} src={img} alt='about' />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5 " >
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-amber-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-amber-600"><span className='mr-2'>Our</span>
                            Company
                            {/* <SlotCounter
                                value="Company"
                                dummyCharacters={'Company'}
                                duration={2}
                                
                            /> */}
                        </span>
                        </h2>
                        <p className="text-gray-700">
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
    )
}

export default AboutText