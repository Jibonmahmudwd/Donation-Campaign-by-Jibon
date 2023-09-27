import { useEffect, useState } from "react";
import DonationPage from "./DonationPage";
import swal from "sweetalert";

const Donations = () => {
    const getStoredData = JSON.parse(localStorage.getItem("donate")) || [];

    const newData = [...getStoredData] ;

    const [displayData , setDisplayData] = useState(newData) ;
    const [seeAll , setSeeAll] = useState(false) ;
    const [seeless , setSeeless] = useState(false) ;

    
 
    useEffect(()=>{
        if(newData.length <= 4){
            setDisplayData(newData) 
        }
        else if(newData.length >4){
            const sliceData = newData?.slice(0,4) ;
            setDisplayData(sliceData) ;
            setSeeAll(true)
        }

        // if (displayData.length == newData.length ){
        //     console.log(displayData.length , newData.length );
        //     setSeeless(true)
        // }

    },[])
    
    const handleSeeButton = () =>{
           setDisplayData(newData) ;
           setSeeAll(false) ;
           setSeeless(true) ;
   }

      const handlelessButton =() => {
        const sliceData = newData?.slice(0,4) ;
        setDisplayData(sliceData) ;
        setSeeless(false) ;
        setSeeAll(true) ;
    }
   

    if(!displayData.length){
        swal("Soorrryy!", "Please Donate Something", "error") ;
    }

     
    
    return (
        <div className=" w-[90%] mx-auto ">
             <div className="py-8 grid gap-5 justify-center items-center grid-cols-1 md:grid-cols-2">
                 {
                displayData.map(singleData =><DonationPage donate={singleData} key={singleData.id}></DonationPage>)
                }
                
             </div>

             <div className="flex justify-center mb-10">
               
                <button onClick={handleSeeButton}  className={`${!seeAll ? "hidden" : ""} shadow-black shadow-2xl text-xl font-semibold bg-[#009444] text-white px-5 py-2 rounded-md`}>
                    See All</button>
            
                <button onClick={handlelessButton}  className={`${!seeless ? "hidden" : ""} shadow-black shadow-2xl text-xl font-semibold bg-[#009444] text-white px-5 py-2 rounded-md`}>See Less</button>
               
             </div>

        </div>
    );
};

export default Donations;