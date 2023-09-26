import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  const [show , setShow] = useState(true);
  
  const location = useLocation().pathname;
  const isExist = location === "/" ;

  useEffect(()=>{
    setShow(isExist)

  },[isExist])

  // console.log(show); 

  return (
    <div className={`${show ? "relative" : "static" }`}>
      {/* bg image section */}
       <div className={`${show || "hidden"}`}>
            <img className=" opacity-10 h-72 md:h-96 w-full" src="https://i.ibb.co/3krh4xh/navbarBg.jpg" alt="bg-img" />
       </div>

      <div className={`${show ? "absolute" : "static" } inset-0 w-[90%] mx-auto py-8 `}>
        {/* navbar start */}
        <div className="flex justify-between items-center">
          <div className=" w-1/4 ">
            <img src="https://i.ibb.co/7ynYT32/Logo.png" alt="logo" />
          </div>

          <div>
            <ol className="flex gap-3 text-xl font-bold md:gap-4">
            <li>
              <NavLink to="/"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}
               >
                Home
              </NavLink>
              
            </li>
            <li >
              <NavLink to="/donation"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}
              >
                Donation
              </NavLink>
            </li>
            <li >
              <NavLink to="/statistics"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}
              >
                Statistics
              </NavLink>
            </li>
            </ol>
          </div>

        </div>
        {/* navbar end */}
    
        {/* search section */}
        <div className={`${show || "hidden"} flex flex-col gap-7 justify-center items-center pt-12`}>
        <h2 className=" text-center text-3xl text-black font-bold "> I Grow By Helping People In Need</h2>
        <div>
            <input type="text" name="" className="border border-gray-400 pl-2 py-2  rounded-l-md outline-none" placeholder="Search here....." />
            <span className="border text-lg py-2 px-3 border-gray-400 bg-[#FF444A] text-white rounded-r-md"><button>Search</button></span>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
