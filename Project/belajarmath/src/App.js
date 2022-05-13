import './App.css';
import Home from './page/Home';
import DaftarMateriClass from './page/DaftarMateriClass';
import Navbar from './components/navbar';
import Login from './page/Login';
import SignUp from './page/SignUp';
import About from './page/About';
import ContactUs from './page/ContactUs';
import { daftarmateri } from './DaftarMateri';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="matericlass" element={<DaftarMateriClass materimath={daftarmateri}/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />}/>
          <Route path="about" element={<About/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
