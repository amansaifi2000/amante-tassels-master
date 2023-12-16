import Link from "next/link";

export const Navbar = () => {
    return (
        <>
            <div className="navbar flex justify-between items-center w-full font-[Open-Sans]">
                <div className="navbar__logo">
                    <h1 className="text-3xl font-bold">Amante-Tassels</h1>
                </div>
                <div className="flex text-2xl font-semibold w-[20%] justify-between">
                    <Link href="" className="active_link">Home</Link>
                    <Link href="/">Categories</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>
                </div>
                <div className="text-2xl font-semibold bg-gray-400 px-8 py-4 rounded-3xl hover:bg-gray-500">
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </>
    );
}