import React from 'react'
import CircularText from '../Circular/CircularText'
import CountUp from '../CountUp/CountUp'

const Milestone = () => {
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center py-[5vh] md:gap-0 gap-2'>
            <CircularText
                text=" LETS TALK * LETS TALK * LETS TALK *"
                onHover="speedUp"
                spinDuration={20}
                className="font-normal text-s  m-0"
            />
            <div className='text-center'>
                <CountUp
                    from={0}
                    to={650}
                    separator=","
                    direction="up"
                    duration={1}
                    className="text-[6rem]"
                />
                <div className='text-xl font-medium'>Commits on GitHub!</div>
            </div>
            
            <div className='text-center'>
                <CountUp
                    from={0}
                    to={30}
                    separator=","
                    direction="up"
                    duration={1}
                    className="text-[6rem]"
                />
                <div className='text-xl font-medium'>Projects Completed!</div>
            </div>
            <div className='text-center'>
                <CountUp
                    from={0}
                    to={700}
                    separator=","
                    direction="up"
                    duration={1}
                    className="text-[6rem]"
                />
                <div className='text-xl font-medium'>Hours of Coding!</div>
            </div>

        </div>
    )
}

export default Milestone
