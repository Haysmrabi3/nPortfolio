import React from 'react'
import Typewriter from "typewriter-effect";







export default function Header() {






    const typingOptions = {
        autoStart: true,
        loop: true,
        delay: 100,
        strings: [" Front End Developer"],
    };







    return <>

        <header className='h-[100vh] bg-transparent  frist-color '>
            <div className="container mx-auto flex items-center justify-start h-[100vh]">
                <div className=" p-5 lg:w-1/2 ">
                    <div className="flex">
                        <span className='text-3xl font-semibold me-1 '>I`am a </span>
                        <span className='text-3xl font-bold ' > < Typewriter options={typingOptions} /> </span>
                    </div>
                    <h2 className='text-4xl font-semibold mt-10'>Hello, My Name Is <span className='text-gray-700'>Haitham</span></h2>
                    <p className='text-xl font-semibold mt-4 mb-10 text-gray-500'>Highly skilled Front-End Developer with experience in designing, developing, and maintaining web applications using modern front-end frameworks.</p>
                    <h4 className='text-2xl font-semibold'>Find Me On :</h4>
                    <ul className='flex gap-5'>
                        <li><i className="fa-brands fa-linkedin text-3xl mt-4 one text-white p-1 rounded cursor-pointer"></i></li>
                        <li><a target='_blank' rel="noopener" href="https://github.com/Haysmrabi3"><i className="fa-brands fa-github text-3xl mt-4 p-1 two rounded text-white cursor-pointer"></i></a></li>
                        <li><a target='_blank' rel="noopener" href="https://wa.me/+2001097521770?text=welcome"><i className="fa-brands fa-whatsapp text-3xl rounded p-1 mt-4  cursor-pointer three text-white"></i></a></li>
                    </ul>
                </div>
            </div>
        </header >


    </>
}
