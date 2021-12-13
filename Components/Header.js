import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <>
                <header className="mt-10 grid grid-cols-4 gap-0 w-1/4">
                
                <div className="col-start-2">                    
                    <a className="visited:text-purple-600 no-underline">About Me</a>
                </div>
                <div className="pl-2">
                    <Link href="/mytown">
                        <a className="visited:text-purple-600 no-underline">My Town</a>
                    </Link>

                </div>
            </header>
        </>
    )
}

export default Header