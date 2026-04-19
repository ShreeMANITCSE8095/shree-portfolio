import React from 'react'

const educationData = [
  {
    level: 'B.Tech - Computer Science and Engineering',
    institute: 'Maulana Azad National Institute of Technology, Bhopal',
    scoreLabel: 'CGPA',
    score: '7.57',
    details: '2024 - Present | 4th Semester',
  },
  {
    level: 'Class 12th - MPBSE',
    institute: 'The Himalaya Academy, Dewas (MP)',
    scoreLabel: 'Percentage',
    score: '85.2%',
    details: '2023 | Madhya Pradesh Board of Secondary Education',
  },
  {
    level: 'Class 10th - CBSE',
    institute: 'Carmel High School, Gadchiroli (MH)',
    scoreLabel: 'Percentage',
    score: '93.8%',
    details: '2021 | Central Board of Secondary Education',
  },
]

const Education = () => {
  return (
    <div className="px-6 py-8 md:py-12">
      <div className="text-5xl font-medium about relative inline-block mb-8 text-white">Education</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((item) => (
          <div
            key={item.level}
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors duration-200"
          >
            <div className="text-white text-xl font-semibold mb-2">{item.level}</div>
            <div className="text-[#f3f3f398] text-base mb-3">{item.institute}</div>
            <div className="text-[#00ffff] font-medium">
              {item.scoreLabel}: {item.score}
            </div>
            <div className="text-gray-400 text-sm mt-2">{item.details}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
