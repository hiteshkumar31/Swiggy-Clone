import { Link } from "react-router";

function Header(){
    return(
        <header className="bg-[#ff5200]  font-serif">
            <div className="flex justify-between mx-20 py-6 px-4">
                <img className="w-40 h-12" src="/logo.avif" alt="Logo" />
                <div className="text-white text-base font-bold flex gap-15 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="#">Partner with Us</a>
                    <a target="_blank" href="#" className="border border-white py-3 px-4 rounded-xl">Get the App</a>
                    <a target="_blank" href="#" className="bg-black py-3 px-4 rounded-xl">SignIn</a>
                </div>
            </div>

            <div className="relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="/sideimage1.avif" alt="" />
                <img className="h-110 w-60 absolute right-0 top-0" src="/sideimage2.avif" alt="" />
                <div className="max-w-[60%] text-white text-5xl font-bold text-center container mx-auto pt-16 pb-8">
                    Order food & groceries. Discover best resturants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-10 pb-5">
                    <input className="bg-white w-[40%] text-xl px-6 py-2 rounded-xl" type="text" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-2 rounded-xl" type="text" placeholder="Search for resturants and items for more"></input>
                </div>
            </div>
            <div className="flex w-[80%] container mx-auto gap-5">
                <Link to="/restaurant"> <img src="/hero1.avif" alt="" /> </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img src="/hero2.avif" alt="" /> </a>
                <a href="https://www.swiggy.com/dineout"> <img src="/hero3.avif" alt="" /> </a>
                <a href="https://www.swiggy.com/restaurants"> <img src="/hero1.avif" alt="" /> </a>
            </div>
        </header>
    )
}

export default Header;