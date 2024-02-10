
import { CDN_url } from "../utils/constants";

const Categories = ({data})=>{
   console.log(data)
           return(
        <div className="">
           <p>{data.title}</p>
        </div>
       )
}
export default Categories;