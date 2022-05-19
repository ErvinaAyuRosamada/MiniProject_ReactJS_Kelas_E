import {Outlet, Link} from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

    return(
        <div>
                <div className="row" id="navbar">
                    <div className="col-9">
                        <span><b>Belajar Matematika</b></span>
                    </div>
                    <div className="col-1">
                        <Link to="/" >Home</Link>
                    </div>
                    <div className="col-1">
                        <a href="#about">About</a>
                    </div>
                    <div className="col-1">
                        <a href="#contact">Contact Us</a>
                    </div>
                </div>
            <Outlet/>
        </div>
    )
};

export default Navbar;