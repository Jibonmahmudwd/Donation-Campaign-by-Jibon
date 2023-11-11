import { Outlet} from "react-router-dom";
import Navbar from './Navbar'
import Footer from "./Footer";


const Roots = () => {
    return (
        <div>
            <div>
             <Navbar></Navbar>
            </div>

            <div>

                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;