import { Link } from "react-router-dom"
import { IoHomeSharp , IoNewspaperOutline } from "react-icons/io5";
import { MdCurrencyBitcoin, MdCurrencyExchange } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="hidden md:block bg-blue-950 h-[100%] px-5 pt-2">

        <div className="flex items-center">
            <img src="logo.png" alt="logo" className="w-[60px]"/>
            <h1 className="text-white font-bold text-2xl">CryptoVerse</h1>
        </div>

        <ul className="mt-4 flex flex-col gap-2">
            <Link to="/">
                <div className="link gap-4 px-2">
                <IoHomeSharp className="text-xl text-white"/>
                <p className="link-name">Home</p>
                </div>
            </Link>

            <Link to="/currencies">
                <div className="link gap-4 px-2">
                <MdCurrencyBitcoin className="text-xl text-white"/>
                <p className="link-name">Cryptocurries</p>
                </div>
            </Link>
            <Link to="/exchange">
                <div className="link gap-4 px-2">
                <MdCurrencyExchange  className="text-xl text-white"/>
          
                <p className="link-name">Exchange</p>
                </div>
            </Link>

            <Link to="/news">
                <div className="link gap-4 px-2">
                <IoNewspaperOutline className="text-xl text-white"/>
                <p className="link-name">News</p>
                </div>
            </Link>
        </ul>

    </nav>
  )
}

export default Navbar