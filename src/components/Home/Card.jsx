/* eslint-disable react/prop-types */
const Card = ({card}) => {
    return (
        <div className="">

            <img src={card.image} className="w-full" alt="" />
            <div className="pl-4 py-4" style={{backgroundColor:card.card_bg_color}}>
                <h1 className="py-1 px-3 text-sm font-normal rounded-md w-fit" style={{backgroundColor:card.category_bg_color , color:card.text_color}}>
                    {card.category}
                </h1>

                <h3 className="pt-1 text-xl font-semibold " style={{color:card.text_color}}>
                    {card.title}
                </h3>
            </div>
        </div>
    );
};

export default Card;