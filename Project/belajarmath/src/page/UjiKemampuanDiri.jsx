import React, {useState} from 'react';
import { soal } from '../latihan/dataSoal';

const UjiKemampuanDiri = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const {id, pertanyaan, jawaban} = soal[currentIndex];

    const pertanyaansebelumnya = () => {
        if (currentIndex ===0) return;
        setCurrentIndex(currentIndex - 1);
    }

    const pertanyaanselanjutnya = () => {
        if (soal.length -1 === currentIndex) return;
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            <h2>Uji Kemampuan Diri</h2>

            <div className='card'>
                <div className='card-header'>
                    {currentIndex + 1}. {pertanyaan}</div>
                <div className='card-body'>
                    {jawaban.map((item, index) => (
                        <div
                        style={{
                            display: "flex",
                        }}
                        key={index}
                        >
                            <div
                        style={{
                            height: 20,
                            width:20,
                            borderRadius: 100,
                            backgroundColor: "green",
                            cursor: "pointer"
                        }}
                        />
                        {item.title}</div>
                    ))}
                </div>
            </div>
            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 10
            }}>
                <button className='btn btn-info col-sm-2'
                onClick={() => pertanyaansebelumnya()}
                disabled={currentIndex ===0 ? true : false}
                >
                    sebelumnya</button>

                <button className='btn btn-primary col-sm-2'
                onClick={() => pertanyaanselanjutnya()}
                disabled={soal.length -1 === currentIndex ? true : false}
                >
                    selanjutnya</button>
            </div>
        </div>
    );
};

export default UjiKemampuanDiri;