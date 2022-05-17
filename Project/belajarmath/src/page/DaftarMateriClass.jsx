import Footer from "../components/Footer"
import ListMateri from "../components/ListMateri";

function DaftarMateriClass ({materimath}) {

    return(
        <div>
            <div class="matericlass">
                <h2>Daftar Materi</h2>
                <div>
                    <div className="row m-auto justify-content-center">
                        {materimath.map((data) => <ListMateri data={data}/>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default DaftarMateriClass;