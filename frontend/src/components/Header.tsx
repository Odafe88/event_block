import { Link } from "react-router-dom"
// 222831 dark
// 31363F light dark 
// 76ABAE light blue (teal)
// EEEEEE grey
// 525CEB Blue
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#31363F] md:h-[100px] w-[100vw] relative flex items-center">
      <nav className="max-w-[1000px] mx-auto relative w-full flex items-center justify-between gap-4 px-[20px]  py-[10px] md:py-[20px] ">
        
        <div className="cursor-pointer">
          <Link to="/">
            <h1 className="text-[1.2rem] text-[#EEEEEE] font-PE md:text-[1.5rem] font-bold">
              <span className="text-[#7E8EF1]">e</span>vent<span className="text-[#7E8EF1]">B</span>lock
            </h1>
          </Link>
        </div>
        <div className="w-1/2 hidden md:flex text-white font-DM flex justify-center items-center rounded-md bg-gray-800">
          <div className="flex justify-center items-center gap-2 md:gap-4  text-[#7E8EF1]">
            <div className="text-[1.2rem] px-4 py-2 hover:text-white transition-all ease-in"><Link to="/create-event">Create Event</Link></div>
            <div className="text-[1.2rem] px-4 py-2 hover:text-white transition-all ease-in"><Link to="/events">Events</Link></div>
            <div className="text-[1.2rem] px-4 py-2 text-white hover:text-[#7E8EF1] transition-all ease-in"><Link to="/signup">SignUp</Link></div>
            <div className="text-[1.2rem] px-4 py-2 text-white hover:text-[#7E8EF1] transition-all ease-in"><Link to="/signin">SignIn</Link></div>
          </div>
                
        </div>
        <div className="">
          <button className="bg-[#615EFC] px-2.5 py-1.5 md:px-4 md:py-2 rounded-md text-[#fff] text-[1rem]  md:text-[1.2rem] text-center justify-center items-center
            hover:bg-blue-800 transition-all ease-in font-Poppins">
                Connect Wallet
            </button>
        </div>
      </nav>
    </header>
  )
}


export default Header