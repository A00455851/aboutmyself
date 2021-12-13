import Image from 'next/image'
import Link from 'next/link'
import Col from 'react-bootstrap/Col'


const myTown = () => {
    return (
        <div className="m-10 pl-10">
            <Image src="/CP.jpg" width={500} height={300} />
            
            <div>
                <h1 className="text-5xl font-bold pt-6" >I live in New Delhi, India </h1>

                <Col sm={4} className="pt-2">
                 <p className="text-xl"> New Delhi is the capital city of India and is know for its diverse population, multi culturalism and scrumptious food.</p>
                   
                </Col>
            </div>
        </div>
    )
}

export default myTown