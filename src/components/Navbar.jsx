/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Card from "./Home/Card";
// import { useState } from "react";



const Navbar = () => {
//get and set iput text state
  const [text , setText] = useState('') ;


//get and set iput text state end
const [cards, setCards] = useState([]);
const [newCards, setNewCards] = useState([]);


  const handleChange = (e) => {
    
    setText(e.target.value);
    e.target.value = '' ;

  }
    useEffect(()=>{
      setNewCards(cards)
    },[cards])
  const handleButton = () =>{
     
      

    if(text.length ){
        console.log("hi");
        const filterCard = cards.filter(newC => newC.category.toLowerCase() === text.toLowerCase()) ;
        filterCard.length && setNewCards(filterCard);
      } 
      setText('')
    }

//get and set iput text end

  useEffect(()=>{
    fetch("./data.json")
    .then(res => res.json())
    .then(data => setCards(data))
  },[])


  //Active location:
  const [show, setShow] = useState(true);

  const location = useLocation().pathname;
  const isExist = location === "/";

  useEffect(() => {
    setShow(isExist);
  }, [isExist]);

  return (
    <div>
      <div className={`${show ? "relative" : "static"}`}> 
      {/* bg image section */}
      <div className={`${show || "hidden"}`}>
        <img
          className=" opacity-10 h-72 md:h-96 w-full"
          src="https://i.ibb.co/3krh4xh/navbarBg.jpg"
          alt="bg-img"
        />
      </div>

      <div
        className={`${
          show ? "absolute" : "static"
        } inset-0 w-[90%] mx-auto py-8 `}
      >
        {/* navbar start */}
        <div className="flex justify-between items-center">
          <div className=" w-1/4 ">
            <img src="https://i.ibb.co/7ynYT32/Logo.png" alt="logo" />
          </div>

          <div>
            <ol className="flex gap-3 text-xl font-bold md:gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ol>
          </div>
        </div>
        {/* navbar end */}

        {/* search section */}
        <div
          className={`${show || "hidden"} flex flex-col gap-7 justify-center items-center pt-12`}
        >
          <h2 className=" text-center text-3xl text-black font-bold ">
            {" "}
            I Grow By Helping People In Need
          </h2>

          <div>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              name="text"
              className="border border-gray-400 pl-2 py-2  rounded-l-md outline-none"
              placeholder="Search here....."
            />
            <span className="border text-lg py-2 px-3 border-gray-400 bg-[#FF444A] text-white rounded-r-md">
              <button onClick={handleButton}>Search</button>
            </span>
          </div>
        </div>

      </div>
      </div>
      
      {/* cards section */}

      <div className={`${show || "hidden"} px-10 pt-10 lg:px-16 mb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4`}>
                {
                    newCards.map(card => <Card key={card.id} card={card}></Card>)
                }
      </div>


    </div>
  );
};

export default Navbar;
