import Header from './../Components/Header'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainBody from './../Components/MainBody'
import Footer from './../Components/Footer'

export default function Home() {
  return (
      
        <div className="text-left">
        <Header/>
        <main>
        <MainBody/>
        </main>
        <Footer/>       
        </div>

  )
}
