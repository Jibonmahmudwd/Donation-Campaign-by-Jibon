import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    const cards = useLoaderData() ;
    return (
        <div>
            <h3>   all card is  {cards.length} ;</h3>
            <div>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;