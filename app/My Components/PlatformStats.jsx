'use client'
import React from 'react'
import Shuffle from './Shuffle'
import CountUp from './CountUp/CountUp'
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si'
import { ExternalLink } from 'lucide-react'

const PlatformStats = ({ portfolioName = 'Portfolio', stats = [] }) => {
  const platformConfig = {
    leetcode: {
      icon: <SiLeetcode className="w-8 h-8" />,
      color: 'bg-orange-500',
      name: 'LeetCode',
      baseUrl: 'https://leetcode.com/',
    },
    codechef: {
      icon: <SiCodechef className="w-8 h-8" />,
      color: 'bg-[#5B4638]',
      name: 'CodeChef',
      baseUrl: 'https://www.codechef.com/',
    },
    codeforces: {
      icon: <SiCodeforces className="w-8 h-8" />,
      color: 'bg-[#1F8ACB]',
      name: 'CodeForces',
      baseUrl: 'https://codeforces.com/',
    },
    geeksforgeeks: {
      icon: <SiGeeksforgeeks className="w-8 h-8" />,
      color: 'bg-[#2F8D46]',
      name: 'GeeksforGeeks',
      baseUrl: 'https://www.geeksforgeeks.org/',
    },
  }

  // Default stats if none provided
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
