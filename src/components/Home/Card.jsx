/* eslint-disable react/prop-types */
const Card = ({card}) => {
    return (
        <div className="p-6 ">
            <h3>{card.id}</h3>
            <img src={card.image} alt="" />
            <h1>{card.title}</h1>
        </div>
    );
};

export default Card;