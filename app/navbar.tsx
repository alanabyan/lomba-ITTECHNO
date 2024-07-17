import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex fixed justify-between w-full bg-[#0C3759] bg-opacity-50 h-[6vh] backdrop-blur items-center ">
            <h1 className="text-white px-6">Logo</h1>
            <div>
                <ul className="flex">
                    <Link href={''}><li className="text-white px-5 cursor-pointer font-semibold hover:text-[#4796d3] transition duration-150 ease-in">Home</li></Link>
                    <Link href={''}><li className="text-white px-5 cursor-pointer font-bold hover:text-[#15609B] transition duration-150 ease-in">About</li></Link>
                    <Link href={''}><li className="text-white px-5 cursor-pointer font-bold hover:text-[#15609B] transition duration-150 ease-in">Impact</li></Link>
                </ul>
            </div>
        </nav>
    )
}