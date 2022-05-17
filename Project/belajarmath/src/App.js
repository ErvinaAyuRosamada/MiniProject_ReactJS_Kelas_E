import './App.css';
import Home from './page/Home';
import DaftarMateriClass from './page/DaftarMateriClass';
import Navbar from './components/navbar';
import About from './page/About';
import ContactUs from './page/ContactUs';

import { BentukAljabar } from './materi/1';
import { LinearSatuVariable } from './materi/2';
import { GarisDanSUdut } from './materi/3';
import { Segi3danSegi4 } from './materi/4';
import { RelasiDanFungsi } from './materi/5';
import { DuaVariabel } from './materi/6';
import { Lingkaran } from './materi/7';
import { BangunDatar } from './materi/8';
import { PangkatDanAkar } from './materi/9';
import { PersamaanKuadrat } from './materi/10';
import { Transformasi } from './materi/11';
import { BangunLengkung } from './materi/12';

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

  const {data, loading, error} = useQuery(GetListMateri);
  console.log('data',data)

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
          <Route path='3' element={<GarisDanSUdut/>}/>
          <Route path='4' element={<Segi3danSegi4/>}/>
          <Route path='5' element={<RelasiDanFungsi/>}/>
          <Route path='6' element={<DuaVariabel/>}/>
          <Route path='7' element={<Lingkaran/>}/>
          <Route path='8' element={<BangunDatar/>}/>
          <Route path='9' element={<PangkatDanAkar/>}/>
          <Route path='10' element={<PersamaanKuadrat/>}/>
          <Route path='11' element={<Transformasi/>}/>
          <Route path='12' element={<BangunLengkung/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
