'use client'
import React from 'react'
import { DivOrigami } from './logo-origami'
import CurvedLoop from './CurvedLoop'
import PlatformStats from './PlatformStats'

const DSAStats = ({ portfolioName, stats }) => {
    return (
        <>
            <div className="w-full py-12 md:py-16 lg:py-20 bg-[#101010]">
                <div className="max-w-7xl mx-auto px-4">
                    {/* CurvedLoop at top */}
                    <div className="h-2/3">
                        <CurvedLoop
                            marqueeText="LeetCode • CodeChef • CodeForces • GeeksforGeeks •"
                            curveAmount={0}
                            interactive={false}
                            className="text-white"
                            speed={2}
                            fontSize="3rem"
                        />
                    </div>

                    {/* Origami card */}
                    {/* <div className="flex justify-center items-center">
                        <DivOrigami />
                    </div> */}
                </div>
            </div>

            {/* Platform Stats Section */}
            <PlatformStats portfolioName={portfolioName} stats={stats} />
        </>
    )
}

export default DSAStats
