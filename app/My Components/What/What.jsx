import React from 'react'
import LetterGlitch from '../LetterGlitch/LetterGlitch'
import {IconAppWindow} from '@tabler/icons-react'
import {IconUxCircle} from '@tabler/icons-react'
import {IconDeviceDesktopQuestion} from '@tabler/icons-react'
import './What.css'


const What = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-[10vw] gap-8 justify-center items-center md:py-[8vh] py-[6vh] h-max what_ani'>
            <div>
               <div className='text-4xl font-semibold'> What I do ?</div>
               <div className=' px-4 py-2 md:w-[30vw] border rounded-lg border-[#e5e7eb] flex gap-2 items-center text-xl font-medium my-4'><IconDeviceDesktopQuestion color="aqua" size={32}/> Problem Solving</div>
               <div className=' px-4 py-2 md:w-[30vw]  border rounded-lg border-[#e5e7eb] flex gap-2 items-center text-xl font-medium my-4'><IconAppWindow color="aqua" size={32}/> Web Developement</div>
               <div className=' px-4 py-2 md:w-[30vw] border rounded-lg border-[#e5e7eb] flex gap-2 items-center text-xl font-medium my-4'><IconUxCircle color="aqua" size={32}/> UI/UX Design & Prototyping</div>
            </div>

            <div className='rounded-2xl md:w-[30vw] w-[80vw] '>
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                />
            </div>
        </div>
    )
}

export default What
