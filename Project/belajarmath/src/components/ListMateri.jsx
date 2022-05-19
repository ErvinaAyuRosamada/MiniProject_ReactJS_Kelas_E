import { Link } from "react-router-dom"

export default function ListMateri ({data}) {

    return(
        <div id="listmateri">
            <Link to={`detail-materi/${data.id}`}>
                <ul className="col-4" type="none">
                    <li>
                            <div className="p-1 text-black">kelas  : {data.kelas}</div>
                            <div className="p-1 text-black">materi : {data.materi}</div>
                    </li>
                </ul>
            </Link>
        </div>
    )
}