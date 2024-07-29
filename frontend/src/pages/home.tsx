import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
// import HomeSvg from "../assets/crowd_img.jpg"

const HomePage = () => {
  return (
    
    <div className="relative">
      <section className="flex items-center justify-center h-auto w-full px-[10px] md:px-[20px] py-[10px] md:py-[20px] px-[20px] ">
        <div className="relative w-auto md:w-3/4 pt-[10px] md:pt-[40px] text-center text-slate-200">
          
          <div className="">
            <p className="text-[24px] md:text-[30px] font-Poppins md:leading-tight"><span className="text-yellow-300">Live.</span> <span className="text-blue-300">Learn.</span> <span>Experience.</span></p>
            <h1 className="text-[30px] md:text-[65px] font-Poppins md:leading-tight">
              Find events your are interested in near <span className="text-blue-200">you</span>!
            </h1>
          </div>
          <SearchBar />
          <div className="flex justify-center items-center gap-4 py-4">
              <div>
                <button className="bg-gray-800 px-2.5 py-1.5 md:px-4 md:py-2 rounded-md font-Poppins font-semibold text-[#fff] shadow-md text-[14px] md:text-lg text-center justify-center items-center
                  hover:bg-blue-800 transition-all ease-in"
                >
                  Create Event
                </button>
              </div>
              <div>
                <button className="bg-slate-200 px-2.5 py-1.5 md:px-4 md:py-2 rounded-md font-Poppins font-semibold text-slate-900 shadow-md text-[14px] md:text-lg text-center justify-center items-center
                  hover:bg-white transition-all ease-in"
                >
                  Find Event
                </button>
              </div>
            </div>
        </div>
        {/* <div className="relative w-1/2">
          <div className="flex justify-center items-center shadow-md bg-none rounded-full overflow-hidden h-[350px] w-[350px]">
            <img className="h-[356px] w-[385px] opacity-100" src={HomeSvg} alt="Home Collaboration SVG" />
          </div>
        </div> */}
      </section>
      <section className="max-h-screen bg-blue-300 px-[15px] md:px-[30px] py-[15px] md:py-[30px]">
        <div className="px-[10px] md:px-[30px] py-[15px] md:py-[50px]">
          <h1 className="text-slate-800 text-xl md:text-2xl font-semibold font-Poppins">
            Categories
          </h1>
        </div>
        <div className=" flex justify-start items-center gap-4 md:gap-8 px-[10px] md:px-[30px] py-[20px]">
          <Link to="/categories/tech" >
            <div className="flex flex-col items-center gap-4">
              <div className="bg-slate-200 w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full">
                <img />
              </div>
              <p className="font-Poppins font-semibold text-slate-800 text-lg">Tech</p>
            </div>
          </Link>
          

        </div>
      </section>
      <section className="max-h-screen bg-gradient-to-tr from-yellow-200 to-purple-300 px-[15px] md:px-[30px] py-[15px] md:py-[30px]">
        <div className="px-[30px] py-[30px] md:py-[50px]">
          <h1 className="text-slate-800 text-2xl font-semibold font-Poppins">
            Trending events in Nigeria
          </h1>
        </div>
        <div className=" flex justify-start items-center gap-4 md:gap-8 px-[30px] py-[20px] overflow-x-scroll">
          <div className="min-w-[220px] md:w-[300px] h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <img alt="Event " className="h-1/4 w-full" />
            <div className="flex items-stretch flex-col h-3/4 w-full bg-white px-2.5 py-2.5 md:px-4 md:py-4" >
              <div className="w-full flex justify-between items-center">
                <h1 className="font-bold text-lg text-slate-800" >Title</h1>
                
                <div className="w-auto px-2 py-1.5 rounded-xl bg-green-200 ">
                  <p className="text-right font-semibold text-green-400">Free</p>
                </div>
              </div>
              <div className="py-2">
                <p>Excerpt about the event</p>
              </div>
              <div className="self-baseline w-full">
                <div className="">
                  <p className="font-semibold text-slate-800">Category: <span className="text-blue-600">Festival</span></p>
                </div>
                <div className="">
                  <button className="">Attend</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
// <div className="w-[150px] md:w-[250px] h-[250px] md:h-[320px] bg-slate-200 rounded-lg overflow-hidden">
// <img className="h-1/4 w-full" />
// <div className="h-3/4 w-full bg-white">

// </div>
// </div>
export default HomePage