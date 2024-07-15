export default function Navbar() {
    return (
        <nav className="flex fixed justify-between w-full bg-[#222222] h-[6vh] ">
            <h1 className="text-white">Logo</h1>
            <div>
                <ul className="flex">
                    <li className="text-white">Home</li>
                    <li className="text-white">About</li>
                    <li className="text-white">Impact</li>
                </ul>
            </div>
        </nav>
    )
}