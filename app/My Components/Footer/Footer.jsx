"use client"
import React from 'react';
import SplitText from '../SplitText/SplitText';
import {IconBrandLinkedin} from '@tabler/icons-react';
import {IconBrandGithub} from '@tabler/icons-react';
import {IconMail} from '@tabler/icons-react';
import {IconBrandInstagram} from '@tabler/icons-react';
import Link from "next/link";


const Footer = ({
    name = "Shree Pandit",
    linkedin = "https://www.linkedin.com/in/shree-pandit/",
    github = "https://github.com/ShreeMANITCSE8095",
    email = "shreepandit2015@gmail.com",
    instagram = "https://www.instagram.com/_shree_pandit_/",
}) => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="flex md:flex-row flex-col gap-2 md:gap-0 justify-between items-center h-max  md:mx-[11vw] py-3">
            <SplitText
                text={`© 2026 ${name}. All rights reserved.`}
                className="md:text-[1.2rem] text-m font-normal text-[#a9a9bd]"
                delay={20}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.1}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="flex flex-row justify-centre items-center gap-1 text-[#a9a9bd]">
                {linkedin && <Link href={linkedin}><IconBrandLinkedin size={30}/></Link>}
                {github && <Link href={github}><IconBrandGithub size={30}/></Link>}
                {email && <Link href={`mailto:${email}`}><IconMail size={30}/></Link>}
                {instagram && <Link href={instagram}><IconBrandInstagram size={30}/></Link>}
            </div>
        </div>
    );
};

export default Footer;
