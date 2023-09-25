import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [show , setShow] = useState(false)
  return (
    <div className={`${show ?"static" : "relative"}`}>
       <div className={`${show && "hidden"}`}>
            <img className=" opacity-10 h-72 md:h-96 w-full" src="https://i.ibb.co/3krh4xh/navbarBg.jpg" alt="bg-img" />
       </div>

      <div className="absolute inset-0 w-[90%] mx-auto py-8 ">
        {/* navbar start */}
        <div className="flex justify-between items-center">
        <div className=" w-1/4 ">
          <img src="https://i.ibb.co/7ynYT32/Logo.png" alt="logo" />
        </div>

        <div>
          <ol className="flex gap-3 text-xl font-lg md:gap-4">
            <li onClick={()=>setShow(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={()=>setShow(true)}>
              <Link to="/donation">Donation</Link>
            </li>
            <li onClick={()=>setShow(true)}>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ol>
        </div>

        </div>
       {/* navbar end */}
    
    {/* banner */}
      <div className={`${show && "hidden"} flex flex-col gap-7 justify-center items-center pt-12`}>
        <h2 className=" text-center text-3xl text-black font-bold "> I Grow By Helping People In Need</h2>
        <div>
            <input type="text" name="" className="border border-gray-400 pl-2 py-2  rounded-l-md" placeholder="Search here....." />
            <span className="border text-lg py-2 px-3 border-gray-400 bg-[#FF444A] text-white rounded-r-md"><button>Search</button></span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
