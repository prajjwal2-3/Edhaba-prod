import Restcard from "./Rescard";
import resdata from "../utils/mockdata";

const Body = ()=>{
    return(
       <div className="body">
        <div className="search">Search</div>
        <div className="restcontainer">
        {resdata.restaurants.map((restaurant, index) => (
                <Restcard key={index} resdata1={restaurant} />
            ))}
         </div>
       </div> 
    )
}


export default Body;