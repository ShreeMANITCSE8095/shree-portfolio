"use client"
import React from 'react'
import Intro from '../My Components/Intro/Intro'
import ClickSpark from '../My Components/ClickSpark/ClickSpark'
import What from '../My Components/What/What'
import Footer from '../My Components/Footer/Footer'
import Rtext from '../My Components/Rtext/Rtext'
import Contact from '../My Components/Contact/Contact'
import Milestone from '../My Components/Milestone/Milestone'
import Skills from '../My Components/Skills/Skills'
import Slider from '../My Components/Slider/Slider'
import Projects from '../My Components/Projects/Projects'
import Navbar from '../My Components/Navbar/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../My Components/Loader/Loader'
import ShinyText from '../My Components/Shiny/ShinyText'
import Magnet from '../My Components/Magnet/Magnet'
import DSAStats from '../My Components/DSAStats'
import CircularText from '../My Components/Circular/CircularText'
import CountUp from '../My Components/CountUp/CountUp'
import { IconArrowUpRight } from '@tabler/icons-react'
import Education from '../My Components/Education/Education'
import About from '../My Components/About/About'





const portfolio = {
  bio: "I am Shree Pandit, a Computer Science and Engineering student focused on competitive programming and full-stack development.",
  skills: [
    "C++",
    "C",
    "HTML5",
    "Tailwind CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "PHP",
  ],
  projects: [
    {
      title: "NITBFreshers Portal",
      description: [
        "Scalable web-based study portal centralizing academic resources for first-year students at NIT Bhopal.",
        "Built a scalable portal aggregating academic resources for first-year students at NIT Bhopal.",
        "Enabled onboarding of 1000+ students, supporting high concurrent usage during peak academic periods.",
        "Implemented secure authentication with token-based validation and structured resource categorization for fast access.",
      ],
      techStack: ["PHP", "MySQL", "Vanilla JavaScript"],
      githubUrl: "https://github.com/ShreeMANITCSE8095/NITBFreshers-Portal",
      liveUrl: "",
      imageUrl: "/freshers_portal.jpeg",
    },
    {
      title: "Peer Learning Platform",
      description: [
        "Architected a centralized StackOverflow-style peer learning platform for MANIT Bhopal to streamline doubt resolution and build a persistent, searchable knowledge base.",
        "Built using PERN stack (PostgreSQL, Express.js, React.js, Node.js) with Tailwind CSS and CI/CD via GitHub Actions.",
        "Integrated rich-text/code-block editor and PostgreSQL Full-Text Search with duplicate-question detection.",
        "Enforced institutional access using @stu.manit.ac.in verification and secure JWT-based authentication.",
        "Implemented a dynamic reputation engine with voting, accepted answer pinning, and contributor leaderboards.",
        "Targeted impact: +40% student engagement and 30% fewer repetitive faculty queries.",
      ],
      techStack: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/ShreeMANITCSE8095/peer-doubt-platform",
      liveUrl: "",
      imageUrl: "/peer_doubt.png",
    },
  ],
  dsaStats: [
    {
      platform: "LeetCode",
      questions: 700,
      maxRating: 2120,
      profileUrl: "https://leetcode.com/u/ShreePandit/",
    },
    {
      platform: "CodeForces",
      questions: 100,
      maxRating: 1550,
      profileUrl: "https://codeforces.com/profile/ShreePandit",
    },
    {
      platform: "CodeChef",
      questions: 150,
      maxRating: 1815,
      profileUrl: "https://www.codechef.com/users/shree_pandit",
    },
  ],
  stats: [
    { number: 950, title: "Total Problems Solved" },
    { number: 700, title: "LeetCode Solved" },
    { number: 1000, title: "Peak Concurrent Users Managed" },
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shree-pandit/",
    github: "https://github.com/ShreeMANITCSE8095",
    email: "shreepandit2015@gmail.com",
    instagram: "https://www.instagram.com/_shree_pandit_/",
  },
  resumeUrl: "/Shree_Pandit_Resume.pdf",
}

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const name = "Shree Pandit";

  const bio = Array.isArray(portfolio.bio) ? portfolio.bio.filter(Boolean).join(' ') : (portfolio.bio || '');
  const skills = portfolio.skills || [];
  const projects = portfolio.projects || [];
  const dsaStats = portfolio.dsaStats || [];
  const stats = portfolio.stats || [];
  const socialLinks = portfolio.socialLinks || {};
  const resumeUrl = portfolio.resumeUrl || null;
  const formattedDsaStats = dsaStats.map((entry) => ({
    ...entry,
    questions: entry.questions || 0,
    rating: entry.rating || 0,
  }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='h-screen w-screen flex flex-col justify-center items-center gap -12'>
          <Rtext />
          {/* <Loader/> */}
        </div>
      ) : (


        <ClickSpark
          sparkColor='aqua'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={500}
        >
          <div className='bg-[#101010] h-max py-7 overflow-x-hidden text-white'>
            <Navbar resumeUrl={resumeUrl} />

            {/* Intro Section */}
            <div id="home" className='py-10 flex flex-col md:flex-row md:px-0 px-8 gap-6 justify-center items-center'>
              <div className="md:w-[35vw] font-medium intro">
                <div className='text-[#f3f3f398] text-xl mb-2'>Hi, I'm a Software Devloper</div>
                <ShinyText text={name} disabled={false} speed={3} className='text-7xl' />
              </div>
              <div className="md:w-[35vw] text-2xl text-[#f3f3f398] font-medium intro_ani2">
                <div>Transforming ideas into interactive and seamless digital experiences through code, creativity, and innovation.</div>
                {resumeUrl && (
                  <Magnet padding={200} disabled={false} magnetStrength={3}>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      <button className='bg-white text-black font-medium text-lg px-5 py-2 rounded-3xl mt-4 hover:cursor-pointer'>
                        My Resume
                      </button>
                    </a>
                  </Magnet>
                )}
              </div>
            </div>

            <What skills={skills} />
            {/* Resume Sections on Introduction Page */}
            <div id="about" className='md:w-[75vw] md:mx-[12.5vw] mx-[5vw] mb-8'>
              <Education />
              <About />
            </div>


            {/* Projects Section */}
            {projects.length > 0 && (
              <div id="project" className='py-2 md:w-[75vw] md:mx-[12.5vw] mb-8 mx-[5vw]'>
                <div className="text-[#00ffff]">My works</div>
                <div className="font-semibold text-5xl mb-6">Projects</div>
                <div className='flex flex-col md:flex-row justify-between items-stretch flex-wrap md:gap-0 gap-8'>
                  {projects.slice(0, 2).map((proj, index) => (
                    <div key={index} className="md:w-[35vw] w-[90vw] flex flex-col h-full">
                      <div className="bg-[#6A9EF5] md:w-full md:h-[43vh] w-full h-[25vh] rounded-xl flex justify-center items-center">
                        {proj.imageUrl ? (
                          <img src={proj.imageUrl} alt={proj.title} className='w-[90%] object-contain hover:scale-110 rounded-2xl' />
                        ) : (
                          <div className="text-gray-400">No Image</div>
                        )}
                      </div>
                      <div className="max-w-full flex flex-col flex-1">
                        <div className='text-2xl font-semibold mt-2 mb-1'>{proj.title}</div>
                        {proj.description && (
                          Array.isArray(proj.description) ? (
                            <ul className='text-gray-400 text-sm md:text-base mt-2 mb-2 leading-relaxed max-w-full break-words list-disc pl-5 space-y-1 flex-1'>
                              {proj.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <div className='text-gray-400 text-sm md:text-base mt-2 mb-2 leading-relaxed max-w-full break-words flex-1'>
                              {proj.description}
                            </div>
                          )
                        )}
                        <div className='text-gray-500 text-sm md:text-base mb-4'>
                          <span className="font-medium">Tech Stack: </span>
                          {Array.isArray(proj.techStack) ? proj.techStack.join(', ') : 'Development'}
                        </div>
                        <div className="flex flex-wrap gap-3 items-center">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm md:text-base transition-colors duration-200 border border-gray-600 hover:border-gray-500"
                            >
                              <span>Live Demo</span>
                              <IconArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm md:text-base transition-colors duration-200 border border-gray-600 hover:border-gray-500"
                            >
                              <span>GitHub</span>
                              <IconArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {socialLinks.github && (
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <button className='md:w-[100%] w-[90vw] md:mx-0 text-center text-xl border border-gray-500 text-gray-500 py-2 rounded-xl md:my-4 hover:text-white hover:bg-[#2a2a2a] my-9'>
                      More projects on Github
                    </button>
                  </a>
                )}
              </div>
            )}

            {/* DSA Stats */}
            {formattedDsaStats.length > 0 && (
              <DSAStats
                portfolioName={name}
                stats={formattedDsaStats}
              />
            )}

            {/* Stats/Milestone Section */}
            {stats.length > 0 && (
              <div className='flex flex-col md:flex-row justify-evenly items-center py-[5vh] md:gap-0 gap-2'>
                <CircularText
                  text=" LETS TALK * LETS TALK * LETS TALK *"
                  onHover="speedUp"
                  spinDuration={20}
                  className="font-normal text-s m-0"
                />
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <CountUp
                      from={0}
                      to={stat.number || 0}
                      separator=","
                      direction="up"
                      duration={1}
                      className="text-[6rem]"
                    />
                    <div className='text-xl font-medium'>{stat.title}</div>
                  </div>
                ))}
              </div>
            )}

            <div id='contact'>
              <Contact
                email={socialLinks.email}
                resumeUrl={resumeUrl}
              />
            </div>

            <Footer
              name={name}
              linkedin={socialLinks.linkedin}
              github={socialLinks.github}
              instagram={socialLinks.instagram}
              email={socialLinks.email}
            />
          </div>
        </ClickSpark>
      )}
    </>
  )
}

export default page
