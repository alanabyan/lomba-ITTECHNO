import Link from "next/link"

export default function Navbar() {
    return (
        <main className="flex justify-center">
            <nav className="flex fixed justify-between w-[40%] backdrop-filter-[40px] mt-10 h-[6vh] backdrop-blur items-center rounded-full bg-slate-600 bg-opacity-35">
                <h1 className="text-white px-5  ">Logo</h1>
                <div>
                    <ul className="flex">
                        <Link href={''}><li className="text-white px-5 cursor-pointer font-semibold hover:text-[#4796d3] transition duration-150 ease-in">Home</li></Link>
                        <Link href={''}><li className="text-white px-5 cursor-pointer font-bold hover:text-[#15609B] transition duration-150 ease-in">About</li></Link>
                        <Link href={''}><li className="text-white px-5 cursor-pointer font-bold hover:text-[#15609B] transition duration-150 ease-in">Impact</li></Link>
                    </ul>
                </div>
            </nav>
        </main>
    )
}