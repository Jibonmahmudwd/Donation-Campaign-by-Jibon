import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
    const {id ,image,category, title, card_bg_color, category_bg_color ,text_color} = card || {} ;
  return (
    <div >
      <Link to={`/cards/${id}`} className="flex flex-col h-full">
        <img src={image} className="w-full rounded-lg" alt="" />

        <div
          className=" pl-4 py-4 pr-1 flex-grow flex flex-col"
          style={{ backgroundColor: card_bg_color }}
        >
          <h1
            className=" shadow-zinc-400 shadow-sm py-1 px-3 text-lg font-[500px] rounded-md w-fit"
            style={{
              backgroundColor: category_bg_color,
              color: text_color,
            }}
          >
            {category}
          </h1>

          <h3
            className="pt-1 text-xl font-semibold "
            style={{ color: text_color }}
          >
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
