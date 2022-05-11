import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const Login = () => {

    return(
        <div>
            <div classname="container w-50 " id='Login'>
                <form className='border border-radius p- my-5'>
                    <h1 className='text-center m-3'>Login</h1>
                    <div className='form-group m-3'>
                        <label for='exampleInputEmail'>Email Address</label><br></br>
                        <input type='email'></input>
                        <small></small>
                    </div>
                    <div className='form-group m-3'>
                        <label for='exampleInputPassword'>Password</label><br></br>
                        <input type='password'></input>
                    </div>
                    <button type='submit' className='btn btn-primary m-3'>Login</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
};

export default Login;