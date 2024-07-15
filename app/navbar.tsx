import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex fixed justify-between w-full bg-[#222222] h-[6vh] items-center ">
            <h1 className="text-white px-6">Logo</h1>
            <div>
                <ul className="flex">
                    <Link href={''}><li className="text-white px-5 cursor-pointer">Home</li></Link>
                    <Link href={''}><li className="text-white px-5 cursor-pointer">About</li></Link>
                    <Link href={''}><li className="text-white px-5 cursor-pointer">Impact</li></Link>
                </ul>
            </div>
        </nav>
    )
}