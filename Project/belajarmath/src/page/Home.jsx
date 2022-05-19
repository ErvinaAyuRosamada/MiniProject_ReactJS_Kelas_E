import {Outlet, Link} from "react-router-dom";
import gambar1 from '../assets/Designer _Isometric.png'
import gambarabout from '../assets/mathematics.png'

const Home = () => {

    return(
        <div>
        <div className="home">                                                                                               
                <div className="home-1 row">
                    <div className="col-6">
                        <img src={gambar1} width="400px" height="400px" alt="gambarpc"/>
                    </div>
                    <div className="col-6">
                        <h4>Belajar Matematika dengan Mudah</h4>
                        <p>Tanpa perlu keluar rumah dan belajar secara gratis hanya di sini</p><br></br>
                    <Link to='matericlass'><button className="get">Get Start</button></Link>
                    </div>
                </div>

                <div className="home-1 row" id="about" >
                        <h4>About Us</h4>
                    <div className="col-6">
                        <p>Website ini adalah website yanbdhebwsancmsdnjdwfbjcxmcndscbdhfdhnsbcdhdhedjwhrjfb bsbsjdnc njakwbndcc ndnejdejewk dnjejrh jdewhedj</p>
                    </div>
                    <div className="col-6">
                        <img src={gambarabout} width="250px" height="250px" alt="gambarbuku"/>
                    </div>
                </div>

                <div className="home-1" id="contact" >
                    <h4 className="justify-content-center">Contact Us</h4>
                    <div className="row">
                    <div className="col-6">
                        <form>
                            <div>
                                <label for="name">Name      </label>
                                <input type='text'/>
                            </div>
                            <div>
                                <label for='email'>Email    </label>
                                <input type='email'/>
                            </div>
                            <div>
                                <label for='message'>Message</label>
                                <textarea type='text'/>
                            </div>
                            <button>send</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <ul type="none">
                            <li>Instagram</li>
                            <li>Whats App</li>
                            <li>Linked In</li>
                        </ul>
                    </div>
                    </div>
                </div>
        </div>
        <Outlet/>
        </div>
    )
};

export default Home;