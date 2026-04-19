import React from 'react'
import ClickSpark from '../My Components/ClickSpark/ClickSpark'
import Magnet from '../My Components/Magnet/Magnet'
import About from '../My Components/About/About'
import FadeContent from '../My Components/Fade/Fade'
import Navbar from '../My Components/Navbar/Navbar'
import What_doing from '../My Components/What_doing/What_doing'
import Footer from '../My Components/Footer/Footer'
import Education from '../My Components/Education/Education'


const page = () => {
  return (
    <ClickSpark
      sparkColor='aqua'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={500}
    >
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
        <div className='bg-[#101010] md:px-[10vw] px-[2vw] pb-8 py-4'>
          <Navbar/>
          <div className='text-[#f3f3f398] text-lg md:text-xl leading-relaxed px-6 md:px-8 mt-6'>
            I am <span className='text-[#00ffff] font-semibold'>Shree Pandit</span>, a Computer Science and Engineering student focused on competitive programming and full-stack web development. I enjoy solving algorithmic challenges and building reliable, scalable products that deliver smooth user experiences.
          </div>
          <Education />
          <About />

          <Magnet padding={200} disabled={false} magnetStrength={3}>
            <a href="/Shree_Pandit_Resume.pdf" download="Shree_Pandit_Resume.pdf" className="p-2 bg-[#00ffff]  rounded-2xl text-black text-xl font-medium hover:cursor-pointer hover:bg-[#88fbfb] ml-4 ">
              Download Resume
            </a>
          </Magnet>
          <What_doing/>
          <Footer
            name="Shree Pandit"
            linkedin="https://www.linkedin.com/in/shree-pandit/"
            github="https://github.com/ShreeMANITCSE8095"
            email="shreepandit2015@gmail.com"
          />

        </div>
      </FadeContent>

    </ClickSpark>
  )
}

export default page
