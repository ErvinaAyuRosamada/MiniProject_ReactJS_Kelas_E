import Footer from "../components/Footer"
import ListMateri from "../components/ListMateri";

function DaftarMateriClass ({materimath}) {

    return(
        <div>
            <div class="matericlass">
                <h2>Daftar Materi</h2>
                <div class="row">
                    <div class="col-3">
                        {materimath.map((materi) => <ListMateri materi={materi}/>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default DaftarMateriClass;