'use client'
import React from 'react'
import Shuffle from './Shuffle'
import CountUp from './CountUp/CountUp'
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si'
console.log(SiCodechef, SiCodeforces) // check if undefined
import { ExternalLink } from 'lucide-react'

const PlatformStats = ({ portfolioName = 'Portfolio', stats = [] }) => {
const platformConfig = {
  leetcode: {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.8a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    color: 'bg-orange-500',
    name: 'LeetCode',
  },
  codechef: {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.257 0C9.28 0 7.2.52 5.944 2.06 4.504 3.815 4.44 6.22 4.44 8.386v.477c-.7.287-1.465.673-1.973 1.244-.614.69-.791 1.553-.791 2.417 0 .84.168 1.684.752 2.37.496.578 1.232.96 1.948 1.254.017 1.805.105 3.73 1.038 5.295C6.56 23.1 8.603 24 11.257 24c2.65 0 4.69-.9 5.839-2.557.93-1.56 1.02-3.48 1.038-5.285.72-.294 1.46-.676 1.957-1.254.584-.686.752-1.53.752-2.37 0-.864-.177-1.727-.79-2.417-.51-.571-1.274-.957-1.974-1.244v-.477c0-2.166-.064-4.57-1.504-6.326C15.319.52 13.234 0 11.257 0zm0 1.59c1.67 0 3.333.45 4.306 1.622 1.117 1.343 1.156 3.404 1.156 5.228v.217c-.85-.207-1.733-.327-2.626-.373l-.008-.002c-.88-.044-1.762-.027-2.634.016-.88-.043-1.763-.06-2.644-.016l-.008.002c-.893.046-1.776.166-2.626.373v-.217c0-1.824.039-3.885 1.156-5.228C8.343 2.04 9.587 1.59 11.257 1.59zm.8 5.987a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8zm-1.6 0a.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8.8.8 0 0 0-.8-.8zM5.238 10.29c1.458-.492 3.826-.727 6.019-.74 2.193.013 4.561.248 6.019.74.694.234 1.383.553 1.817 1.007.348.364.527.817.527 1.437 0 .637-.184 1.102-.545 1.515-.43.505-1.146.864-1.966 1.138-.082-1.398-.276-2.89-.97-4.06-.596-1.01-1.575-1.748-3.073-1.748h-3.618c-1.498 0-2.477.738-3.073 1.748-.694 1.17-.888 2.662-.97 4.06-.82-.274-1.536-.633-1.966-1.138-.361-.413-.545-.878-.545-1.515 0-.62.179-1.073.527-1.437.434-.454 1.123-.773 1.817-1.007zm2.21 1.295h7.618c1.057 0 1.67.538 2.1 1.27.514.868.737 2.113.787 3.528-1.087.257-2.28.362-3.496.362H10.8c-1.217 0-2.41-.105-3.496-.362.05-1.415.273-2.66.787-3.527.43-.733 1.043-1.271 2.1-1.271zm-.543 5.652c1.076.218 2.208.318 3.352.318 1.144 0 2.276-.1 3.352-.318-.097.956-.3 1.853-.782 2.614-.854 1.322-2.43 1.96-4.57 1.96-2.14 0-3.716-.638-4.57-1.96-.482-.761-.685-1.658-.782-2.614z"/>
      </svg>
    ),
    color: 'bg-[#5B4638]',
    name: 'CodeChef',
  },
  codeforces: {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z"/>
      </svg>
    ),
    color: 'bg-[#1F8ACB]',
    name: 'CodeForces',
  },
}  // Default stats if none provided
  // Database structure: { platform: 'leetcode', questions: 150, rating: 1850, profileUrl: 'https://leetcode.com/username' }
  const defaultStats = [
    {
      platform: 'leetcode',
      questions: 709,
      maxRating: 2120,
      profileUrl: 'https://leetcode.com/',
    },
    {
      platform: 'codechef',
      questions: 163,
      maxRating: 1815,
      profileUrl: 'https://www.codechef.com/',
    },
    {
      platform: 'codeforces',
      questions: 129,
      maxRating: 1550,
      profileUrl: 'https://codeforces.com/',
    },
  ]

  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <div className="w-full py-8 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4">
        

        {/* Platform Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayStats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50"
            >
              {/* Platform Icon and Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`${platformConfig[stat.platform]?.color || 'bg-gray-600'} p-3 rounded-lg text-white`}>
                  {platformConfig[stat.platform]?.icon || <SiLeetcode className="w-8 h-8" />}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {platformConfig[stat.platform]?.name || stat.platform}
                  </h3>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                {/* Questions */}
                <div>
                  <p className="text-gray-400 text-sm md:text-base mb-2">Problems Solved</p>
                  <div className="flex items-center gap-2">
                    <CountUp
                      to={stat.questions || 0}
                      from={0}
                      duration={2}
                      delay={index * 0.2}
                      className="text-3xl md:text-4xl font-bold text-white"
                    />
                    <span className="text-gray-500 text-xl md:text-2xl font-semibold leading-none">+</span>
                  </div>
                </div>

                {/* Rating */}
                {stat.rating > 0 && (
                  <div>
                    <p className="text-gray-400 text-sm md:text-base mb-2">Rating</p>
                    <div className="flex items-center gap-2">
                      <CountUp
                        to={stat.rating || 0}
                        from={0}
                        duration={2}
                        delay={index * 0.2 + 0.3}
                        className="text-3xl md:text-4xl font-bold text-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Link Button */}
              {stat.profileUrl && (
                <a
                  href={stat.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors duration-200 group"
                >
                  <span className="text-sm md:text-base font-medium">View Profile</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlatformStats
