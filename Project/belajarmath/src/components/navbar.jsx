import {Outlet, Link} from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

    return(
        <div>
                <div class="row" id="navbar">
                    <div class="col-9">
                        <span><b>Belajar Matematika</b></span>
                    </div>
                    <div class="col-1">
                        <Link to="/">Home</Link>
                    </div>
                    <div class="col-1">
                        <Link to="/about">About</Link>
                    </div>
                    <div class="col-1">
                        <Link to="/contactus">Contact Us</Link>
                    </div>
                </div>
            <Outlet/>
        </div>
    )
};

export default Navbar;