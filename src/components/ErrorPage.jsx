import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen text-3xl font-bold text-center flex flex-col gap-5 justify-center items-center">
            <h2>Oooopps!!!!</h2>
            <h4> Cannot reach the page</h4>
            <Link to='/'><button className="btn btn-neutral">GO HOME</button></Link>
        </div>
    );
};

export default ErrorPage;