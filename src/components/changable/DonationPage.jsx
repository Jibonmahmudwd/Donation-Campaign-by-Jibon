import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationPage = ({ donate }) => {
  const { id, image, title, category,card_bg_color, category_bg_color, text_color, price } =
    donate || {};
  return (
    <div className="lg:flex lg:h-[164px] ">
      <div className="">
        <img className="rounded-l-lg h-[164px] w-full object-fill" src={image} alt="" />
      </div>

      <div style={{ backgroundColor: card_bg_color  }} className="pl-5 py-2 lg:py-0 w-full rounded-r-lg ">
        <h1
          className="py-1 md:mt-3 px-3 text-base rounded-md w-fit shadow-black shadow-sm"
          style={{
            backgroundColor: category_bg_color,
            color: text_color,
          }}
        >
          {category}
        </h1>

        <h3 className="text-2xl font-semibold text-black ">
            {title}
        </h3>
        <h3 className="text-lg font-semibold" style={{color:text_color}}>${price}.00</h3>
        <Link to={`/cards/${id}`}>
            <button className=" shadow-black shadow-2xl py-1 px-5 my-2 mb-4 text-white rounded-md text-lg font-semibold " style={{backgroundColor:text_color}}>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DonationPage;
