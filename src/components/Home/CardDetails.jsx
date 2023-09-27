import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardDetails = () => {
    const {cardId} = useParams() ;
    const cardIdInt = parseInt(cardId) ;
    
    const allCard = useLoaderData()  ;

    const [displayCard ,setDiplayCard] = useState({}) ;

    useEffect(()=>{
       const reqCard = allCard.find(singleCard => singleCard.id === cardIdInt)
       setDiplayCard(reqCard) 
    },[allCard, cardIdInt]) ;

    


    const handleClickData = () => {
        const donateData = [] ;
        const getStoredData = JSON.parse(localStorage.getItem("donate")) ;

        if(!getStoredData){
            donateData.push(displayCard) ;
            localStorage.setItem("donate" , JSON.stringify(donateData));
            swal("Donated!", "Thanks Your Donation!", "success");
        }
        else{
           const isExist = getStoredData.find(data => data.id=== cardIdInt ) ;
           if(!isExist){
            donateData.push(...getStoredData , displayCard) ;
            localStorage.setItem("donate" , JSON.stringify(donateData));
            swal("Donated!", "Thanks Your Donation!", "success");
           }
           else{
            swal("Already Donated!", "Try To Donate Another", "error");
           }
            
        }
   
        

    }


    
    const {image, price , description, title ,text_color} = displayCard || {};
    return (
        <div className="py-6 w-[90%] m-auto">
            <div className=" relative">
                <img className="w-full md:h-[600px] object-fill" src={image} alt="" />
                <div className="h-24 w-full bg-black bg-opacity-50 absolute bottom-0 ">
                    <button onClick={handleClickData} className=" absolute bottom-6 left-7 py-2 px-3 rounded-md text-xl text-white font-semibold" style={{backgroundColor:text_color}}>Donate ${price}</button>
                </div>
            </div> 
            <div className="py-7 text-center md:text-left">
                <h2 className="text-4xl py-2 font-bold">{title}</h2>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;