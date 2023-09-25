import DonationPage from "./DonationPage";

const Donations = () => {
    const getStoredData = JSON.parse(localStorage.getItem("donate"))

    return (
        <div className=" w-[90%] mx-auto py-8 grid gap-4 justify-center items-center grid-cols-1 md:grid-cols-2">
             
            {
                getStoredData.map(singleData =><DonationPage donate={singleData} key={singleData.id}></DonationPage>)
            }
        </div>
    );
};

export default Donations;