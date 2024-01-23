import Restcard from "./Rescard";
import resdata from "../utils/mockdata";
import { useState } from "react";

const Body = ()=>{
    return(
       <div className="body">
        <div className="filter">
          <button className="btn-filter"onClick={()=>{console.log("button clicked")}}>Top rated restaurents</button>
        </div>
        <div className="restcontainer">
        {resdata.restaurants.map((restaurant, index) => (
                <Restcard key={index} resdata1={restaurant} />
            ))}
         </div>
       </div> 
    )
}

//normal js variable

let normal = something;

//state variable

const [normalarray] = useState();


export default Body;