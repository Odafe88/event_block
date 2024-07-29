import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="px-[10px] md:px-[20px] py-[10px] md:py-[20px] relative ">
      <nav className="bg-[#040D12] mx-[0px] my-0 rounded-lg w-auto px-4 py-2 flex items-center justify-between md:py-4 md:px-8">
        <Link to="/">
          <div className="w-[40px] md:w-[80px] cursor-pointer">
            <h1 className="text-lg text-[#fff] font-PE md:text-xl font-bold">
            <a><span className="text-blue-300">e</span>vent<span className="text-blue-300">B</span>lock</a>
            </h1>
          </div>
        </Link>
        <div className="hidden md:flex text-white font-DM flex justify-center items-center rounded-md bg-gray-800">
          <div className="flex justify-center items-center gap-2 md:gap-4  text-blue-300">
            <div className="text-lg px-4 py-2 hover:text-white transition-all ease-in"><Link to="/create-event">Create Event</Link></div>
            <div className="text-lg px-4 py-2 hover:text-white transition-all ease-in"><Link to="/events">Events</Link></div>
            <div className="text-lg px-4 py-2 text-white hover:text-blue-200 transition-all ease-in"><Link to="/signup">SignUp</Link></div>
            <div className="text-lg px-4 py-2 text-white hover:text-blue-200 transition-all ease-in"><Link to="/signin">SignIn</Link></div>
          </div>
                
        </div>
        <div className="mx-0">
          <button className="bg-blue-500 px-2.5 py-1.5 md:px-4 md:py-2 rounded-md text-[#fff] text-md md:text-lg text-center justify-center items-center
            hover:bg-blue-800 transition-all ease-in">
                Connect Wallet
            </button>
        </div>
      </nav>
    </header>
  )
}


export default Header