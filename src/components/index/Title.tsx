import { useSpring, animated, config } from 'react-spring'
import { TypeAnimation } from 'react-type-animation'
import { useEffect } from 'react'

export default function Title() {
    const [{ x }, set] = useSpring(() => ({ x: 0 }));
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })
    const handleScroll = (event: any) => {
        let max: number = 0.8 * window.innerHeight;
        let fraction: number = window.scrollY / max;
        let percent: number = fraction * 100;
        console.log(percent);
        set({ x: percent })
    }
    return (
        <>
            <style jsx>{`
                .background{
                    background-color: #ff0088;
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-family: monospace, sans-serif;
                }
                .text{
                    align-content: left;
                    text-align: left;
                    background-color: #000;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
                .wave{
                    top: -2vh;
                    position: relative;
                }
                `}
            </style>
            <div className='background'>
                <div className='text'>
                    <TypeAnimation
                        sequence={[
                            'Ash Vyas'
                        ]}
                        wrapper='h1'
                        cursor={false}
                        repeat={0}
                    />
                    <TypeAnimation
                        sequence={[
                            'Software Engineer',
                            1000,
                            'Front End Developer',
                            1000,
                            'Back End Developer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            'Web Developer',
                            1000
                        ]}
                        wrapper='h2'
                        cursor={true}
                        repeat={Infinity}
                        />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave'>
                <animated.path
                    fill=" #ff0088"
                    fillOpacity="1"
                    d={
                        x.to({
                            range: [0, 100],
                            output: [
                                "M0,96L30,96C60,96,120,96,180,128C240,160,300,224,360,245.3C420,267,480,245,540,208C600,171,660,117,720,85.3C780,53,840,43,900,58.7C960,75,1020,117,1080,117.3C1140,117,1200,75,1260,80C1320,85,1380,139,1410,165.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z",
                                "M0,32L30,64C60,96,120,160,180,170.7C240,181,300,139,360,144C420,149,480,203,540,218.7C600,235,660,213,720,176C780,139,840,85,900,64C960,43,1020,53,1080,58.7C1140,64,1200,64,1260,58.7C1320,53,1380,43,1410,37.3L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                            ]
                        })
                    }
                />

            </svg>
        </>
    )
}