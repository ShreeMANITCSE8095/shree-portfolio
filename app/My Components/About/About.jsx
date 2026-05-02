import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="p-6">
      <div className="text-5xl font-medium about relative inline-block">About me</div>

      <div className="mt-7 text-xl text-white">
        <div className="mb-6">
          I am a Computer Science and Engineering sophomore (Class of 2028) at Maulana Azad National Institute of Technology (MANIT), Bhopal, with a deep passion for algorithmic problem-solving and robust system architecture. As an active competitive programmer, I hold a Knight rating on LeetCode (2120), a 4-Star rating on CodeChef, and a Specialist rank on CodeForces, having solved over 1000 Data Structures and Algorithms challenges across various platforms.
        </div>

        <div className="mb-6">
          Alongside my academic coursework, I leverage my technical foundation in full-stack web technologies, including the MERN/PERN stacks and PHP/MySQL, to engineer scalable, high-impact applications. My recent technical milestones include architecting a highly secure campus-wide Peer Doubt Solving Platform and co-developing the multi-instance NITBFreshers Study Portal, designed to seamlessly sustain massive traffic spikes of 1000+ concurrent users.
        </div>

        <div className="mb-6">
          Beyond the screen, I serve as a Corporal in the 12 MP BN NCC and act as a PR Executive for ISTE SC MANIT. Drawing from my experiences as a national-level chess player and state-level karate athlete, I bring strategic foresight, disciplined execution, and strong collaborative leadership to every technical endeavor I undertake.
        </div>

        <div className="mb-6">
          <strong>Technical Skills and Interests:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-[#f3f3f398]">
            <li>Programming Languages: C, C++, JavaScript</li>
            <li>Frameworks & Libraries: React.js, Node.js, Next.js</li>
            <li>Databases: MySQL, PostgreSQL, PHP, MongoDB</li>
            <li>Tools & Platform: VS Code, Git, GitHub, LaTeX</li>
            <li>Core CS Coursework: Data Structures, OOP, DBMS, Algorithm Design & Analysis, Computer System & Organization</li>
          </ul>
        </div>

        <div className="mb-6">
          <strong>Positions of Responsibility:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-[#f3f3f398]">
            <li>PR Executive, ISTE SC MANIT (2025 - Present)</li>
            <li>Corporal, 12 MP BN NCC, MANIT Bhopal (2024 - Present)</li>
          </ul>
        </div>

        <div className="mb-6">
          <strong>Achievements:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-[#f3f3f398]">
            <li>2nd Runner Up at Kinetic Coding Challenge (IIPE Vishakhapatnam).</li>
            <li>National Finalist at Shaastra Programming Contest organized by IIT Madras.</li>
            <li>National Finalist at Code Wars Programming Contest organized by IIT Jodhpur at Prometeo&apos;26.</li>
            <li>National-level Chess Player, State-level Karate Player, skilled in Brazilian Jiu-Jitsu.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;


