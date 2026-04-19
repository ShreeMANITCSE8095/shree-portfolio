"use client"
import React from 'react'
import SplitText from '../SplitText/SplitText'
import Link from 'next/link'

const Contact = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className="flex justify-center items-center flex-row pt-5">
            <div className='bg-[#1b1b22] md:w-[80vw] w-[85vw] md:py-[6vh] py-8 rounded-2xl items-center flex flex-col'>
                <div className="text-center bg-[rgba(109,255,253,0.1)] w-max px-3 py-1 mb-4 rounded-3xl ">
                    <SplitText
                        text="Available for work"
                        className="md:text-m text-s font-medium text-white"
                        delay={20}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
                <div className="mb-3 ">
                    <SplitText
                        text="Let's create your"
                        className="md:text-4xl text-3xl font-semibold text-white"
                        delay={40}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
                <div className="mb-[10vh]">
                    <SplitText
                        text="next big idea ."
                        className="md:text-4xl text-3xl font-semibold text-white"
                        delay={60}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
                <Link href="/Shree_Pandit_Resume.pdf">
                    <div className="">
                        <SplitText
                            text="Contact Me"
                            className="text-xl font-normal bg-white px-4 py-2 w-max rounded-3xl hover:cursor-pointer text-black"
                            delay={70}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Contact
