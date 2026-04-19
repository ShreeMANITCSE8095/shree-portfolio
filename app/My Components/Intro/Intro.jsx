import React from 'react'
import ShinyText from '../Shiny/ShinyText'
import Magnet from '../Magnet/Magnet'
import Link from 'next/link'
import './Intro.css'

const Intro = () => {
    return (
        <div className='py-10 flex flex-col md:flex-row md:px-0 px-8 gap-6 justify-center items-center '>
            <div className="md:w-[35vw] font-medium intro">
                <div className='text-[#f3f3f398] text-xl mb-2'>Hi, I'm a Software Devloper</div>
                {/* <div className='text-7xl'>Shree Pandit</div> */}
                <ShinyText text="Shree Pandit" disabled={false} speed={3} className='text-7xl' />
            </div>
            <div className="md:w-[35vw] text-2xl text-[#f3f3f398] font-medium intro_ani2">
                <div>Transforming ideas into interactive and seamless digital experiences with cutting-edge <span></span>
                <ShinyText text="frontend" disabled={false} speed={3} className='custom-class' />
                <span></span> development.</div>

                <Magnet padding={200} disabled={false} magnetStrength={3}>
                    <Link href='/resume'><button className='bg-white text-black font-medium text-lg px-5 py-2 rounded-3xl mt-4 hover:cursor-pointer'>My Resume</button></Link>
                </Magnet>
            </div>
        </div>
    )
}

export default Intro
