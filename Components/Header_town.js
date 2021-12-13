import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Headertown = () => {
    return (
        <>
               <header className="mt-10 grid grid-cols-4 gap-0 w-1/4">
                
                <div className="col-start-2">
                    <Link href="/">
                    <a className="visited:text-purple-600 no-underline">About Me</a>
                    </Link>
                </div>
                <div className="pl-2">
                    {/* <Link href="/index"> */}
                        <a className="visited:text-purple-600 no-underline">My Town</a>
                    {/* </Link> */}

                </div>
            </header>
        </>
    )
}

export default Headertown