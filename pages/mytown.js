import Header_town from './../Components/Header_town'
import Image from 'next/image'
import MainBody_town from './../Components/MainBody_town'
import Footer_town from './../Components/Footer_town'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function mytown() {
  return (
      
        <div className="text-left">
        <Header_town/>
        <main className="">
        <MainBody_town/>
        </main>
        <Footer_town/>       
        </div>

  )
}
