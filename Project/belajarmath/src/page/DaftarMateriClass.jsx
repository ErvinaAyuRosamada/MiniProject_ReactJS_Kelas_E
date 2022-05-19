import ListMateri from "../components/ListMateri";
import { Link } from "react-router-dom";

function DaftarMateriClass ({materimath}) {

    console.log('daftar materi', materimath)
    return(
        <div>
            <div className="matericlass">
                <div>
            <h2 className="justify-content-center m-auto">Daftar Materi</h2>
                    <div className="row m-auto justify-content-center">
                        {/* { materimath.length > 0 ? materimath?.map((data) => <ListMateri data={data}/>) : <></>} */}
                        { materimath.list_materi?.map((data) => <ListMateri data={data}/>) }
                    </div>
                    <Link to='/matericlass/ujikemampuan'><button className="uji">Uji Kemampuan Diri</button></Link>
                </div>
            </div>
        </div>
    )
};

export default DaftarMateriClass;