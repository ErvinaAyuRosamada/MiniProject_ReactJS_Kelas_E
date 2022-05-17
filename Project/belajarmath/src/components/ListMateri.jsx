import { Link } from "react-router-dom"

export default function ListMateri ({data}) {

    return(
        <div id="listmateri" className="col-3">
                <Link to={`detail-materi/${data.id}`}>
                    <div className="p-3 text-white">{data.materi}</div>
                </Link>
        </div>
    )
}