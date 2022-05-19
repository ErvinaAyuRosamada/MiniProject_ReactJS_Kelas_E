import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";

const GetDetailMateri = gql`
  query MyQuery {
  list_materi {
    id
    kelas
    materi
    detail
  }
}
`;
function DetailMateri(){
    const {id} = useParams()
    const {data, loading, error} = useQuery(GetDetailMateri);

    if(!loading){
        return(
            <div>
              {data.list_materi?.filter(list => list.id === id).map(list =>(
                <div contentEditable='true' dangerouslySetInnerHTML={{ __html: list.detail }}></div>
                ))}
            </div>
        )
    }
    
}

export default DetailMateri