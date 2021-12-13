import Image from 'next/image'
import Link from 'next/link'
import Col from 'react-bootstrap/Col'

const Hero = () => {
    return (
        <div className="m-10 pl-10">
            <Image src="/Joker.jpeg" width={200} height={200} />
            <div>
                
                <h1 className="text-5xl font-bold">Hi, I'm Rubin</h1>
                <Col sm={4} className="pt-2">
                 <p className="text-xl pt-2"> I'm currently pursuing my <span className="text-purple-900"> Master's in Computing and Data Analytics</span> at Saint Mary's University,Halifax. I'm very passionate about soccer. I'm coding in react for the first time and am very excited about learning the same.</p>
                   
                </Col>
            </div>
        </div>
    )
}

export default Hero