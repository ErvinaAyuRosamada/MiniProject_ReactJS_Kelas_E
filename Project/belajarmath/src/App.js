import './App.css';
import Home from './page/Home';
import DaftarMateriClass from './page/DaftarMateriClass';
import Navbar from './components/navbar';
import About from './page/About';
import ContactUs from './page/ContactUs';

import { BentukAljabar } from './materi/1';
import { LinearSatuVariable } from './materi/2';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

const GetListMateri = gql`
  query MyQuery {
  list_materi {
    id
    kelas
    materi
  }
}
`;

export default function App() {

  const {data} = useQuery(GetListMateri);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="matericlass" element={<DaftarMateriClass materimath={data}/>} />
          <Route path="about" element={<About/>}/>
          <Route path="contactus" element={<ContactUs/>}/>

          <Route path='1' element={<BentukAljabar/>}/>
          <Route path='2' element={<LinearSatuVariable/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
