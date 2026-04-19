"use client"
import React from 'react'
import {IconArrowUpRight} from  '@tabler/icons-react';
import Link from "next/link";
import {IconBrandGithub} from  '@tabler/icons-react';

const Projects = () => {
    return (
        <div className='py-2 md:w-[75vw] md:mx-[12.5vw] mb-8 mx-[5vw]'>
            <div className="text-[#00ffff]">My works</div>
            <div className="font-semibold text-5xl mb-6">Projects</div>
            <div className='flex flex-col md:flex-row justify-between items-center flex-wrap md:gap-0 gap-8'>
                
                <div>
                    <div className="bg-[#6A9EF5] md:w-[35vw] md:h-[43vh] w-[90vw] h-[25vh] rounded-xl flex justify-center items-center">
                        <img src="/khushlani.png" alt="p1" className='w-[90%]  object-contain hover:scale-110 rounded-2xl' />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className='text-2xl font-semibold mt-2 mb-1'>Khushlani Creations</div>
                            <div className='text-gray-500'>Developement and Design</div>
                        </div>
                        <Link href="https://khushlani.com/"><div className='text-gray-500 hover:text-white rounded-xl border hover:bg-[#2a2a2a] border-gray-500 p-3 w-max h-max mt-2'><IconArrowUpRight/></div></Link>
                    </div>
                </div>


                <div>
                    <div className="bg-[#57C7F5] md:w-[35vw] md:h-[43vh] w-[90vw] h-[25vh] rounded-xl flex justify-center items-center">
                    <img src="/digivista.png" alt="p1" className='w-[90%]  object-contain hover:scale-110 rounded-2xl' />
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className='text-2xl font-semibold mt-2 mb-1'>Digivista</div>
                            <div className='text-gray-500'>In Developement</div>
                        </div>
                        <Link href="https://digivista.in/"><div className='text-gray-500 hover:text-white rounded-xl border hover:bg-[#2a2a2a] border-gray-500 p-3 w-max h-max mt-2'><IconArrowUpRight/></div></Link>
                    </div>
                </div>


            </div>
            <Link href="https://github.com/Saumyakhushlani"><button className='md:w-[100%] w-[90vw] md:mx-0  text-center text-xl border border-gray-500 text-gray-500 py-2 rounded-xl md:my-4 hover:text-white hover:bg-[#2a2a2a] my-9 ' >More projects on Github</button></Link>
        </div>
    )
}

export default Projects
