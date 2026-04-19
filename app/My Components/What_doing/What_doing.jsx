import React from 'react'
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import { FaCode, FaPaintBrush, FaDatabase,FaServer,FaGithub,FaLightbulb  } from "react-icons/fa";
import '../About/About.css'


const What_doing = () => {
    const data = [
        { 
            sno: 1, 
            title: "Web Development", 
            desc: "Building modern web applications using the latest technologies, ensuring performance, scalability, and responsiveness for a seamless user experience.", 
            icn: <FaCode /> 
        },
        { 
            sno: 2, 
            title: "Web Designing", 
            desc: "Creating stunning and user-friendly UI/UX designs that enhance user engagement, accessibility, and visual appeal using tools like Figma and Tailwind CSS.", 
            icn: <FaPaintBrush /> 
        },
        { 
            sno: 3, 
            title: "Data Structures & Algorithms", 
            desc: "Optimizing algorithms and problem-solving using C/C++, ensuring efficient time and space complexity for coding competitions and real-world applications.", 
            icn: <FaDatabase /> 
        },
        { 
            sno: 4, 
            title: "Backend Development", 
            desc: "Building robust and scalable server-side applications using technologies like Node.js, Express, and PostgreSQL to handle API requests and database management efficiently.", 
            icn: <FaServer /> 
        },
        { 
            sno: 5, 
            title: "Problem Solving", 
            desc: "Enhancing logical thinking and algorithmic skills by solving complex coding challenges on platforms like LeetCode, Codeforces, and CodeChef.", 
            icn: <FaLightbulb /> 
        },
        { 
            sno: 6, 
            title: "Open Source Contribution", 
            desc: "Actively contributing to open-source projects and improving my skills by making real-world code contributions.", 
            icn: <FaGithub /> 
        }
    ];
    
    return (
        <div className="p-4">
            <div className="text-5xl font-medium text-white my-8 about">What I do</div>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-evenly gap-y-12'>
                {data.map((e) => (
                    <div key={e.sno} className='md:w-[40%]'>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.3) ">
                            <div className='text-[#00ffff] text-3xl mb-4'>{e.icn}</div>
                            <div className='text-2xl mb-2' >{e.title}</div>
                            <div className="text-lg">{e.desc}</div>
                        </SpotlightCard>
                    </div>

                ))}
            </div>
        </div>

    )
}

export default What_doing
