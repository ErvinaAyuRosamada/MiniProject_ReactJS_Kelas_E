import Footer from "../components/Footer"
import { gql, useQuery } from '@apollo/client';

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
    const {data, loading, error} = useQuery(GetDetailMateri);

    if(!loading){
        return(
            <div>
                <div contentEditable='true' dangerouslySetInnerHTML={{ __html: data.detail }}></div>
                <Footer/>
            </div>
        )
    }
    
}

export default DetailMateri