import Link from "next/link"
import Image from "next/image"
import Nevtik from "@/public/nevtik-removebg-preview (2).png"

export default function Navbar() {
    return (
        <main className="flex justify-center">
            <nav className=" z-20 flex fixed justify-between lg:w-[40%] w-[80%] backdrop-filter-[40px] mt-10 lg:h-[6vh] h-[5vh] backdrop-blur items-center rounded-full bg-slate-600 bg-opacity-35">
                <Link href={'https://nevtik.org'}><Image className="mx-5" src={Nevtik} alt="Logo Nevtik" width={35} height={35}/></Link>
                <div>
                    <ul className="flex scroll-smooth">
                        <Link href={'#Home'}><li className="text-white lg:px-5 px-2 cursor-pointer font-semibold lg:text-[1.8vh] text-[80%] hover:text-[#9A44FE] transition duration-150 ease-in">Home</li></Link>
                        <Link href={'#About'}><li className="text-white lg:px-5 px-2 cursor-pointer font-semibold lg:text-[1.8vh] text-[80%] hover:text-[#9A44FE] transition duration-150 ease-in">About</li></Link>
                        <Link href={'#Card'}><li className="text-white lg:px-5 px-2 cursor-pointer font-semibold lg:text-[1.8vh] text-[80%] hover:text-[#9A44FE] transition duration-150 ease-in">Impact</li></Link>
                    </ul>
                </div>
            </nav>
        </main>
    )
}