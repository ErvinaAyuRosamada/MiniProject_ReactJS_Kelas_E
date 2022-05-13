import {Outlet, Link} from "react-router-dom";
import Footer from "../components/Footer"
import vectary from '../assets/Vectarytexture.png'

const Home = () => {

    return(
        <div>
        <div className="home">                                                                                               
                <div class="row">
                    <div class="col-6">
                        <img src={vectary} width="100%" alt="gambarbuku"/>
                    </div>
                    <div class="col-6">
                        <h4>Belajar Matematika dengan Mudah</h4>
                        <p>Tanpa perlu keluar rumah dan belajar secara gratis hanya di sini</p><br></br>
                    <button><Link to='matericlass'>Get Start</Link></button>
                    </div>
                </div>
        </div>
        <Footer/>
        <Outlet/>
        </div>
    )
};

export default Home;