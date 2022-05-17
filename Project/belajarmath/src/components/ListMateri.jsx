export default function ListMateri ({data}) {

    return(
        <div id="listmateri" className="col-3">
                <div className="p-3 text-white">{data.materi}</div>
        </div>
    )
}