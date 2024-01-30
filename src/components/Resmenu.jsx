import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Resmenu = () => {
const {resID} = useParams();

 useEffect(()=>{
        apicall();
        console.log("called")
    })

    const apicall = async () => {
        try{
            const data = await fetch(MENU_API + resID)
            const json = await data.json();
            console.log(json)
        }
        catch(error){
         console.log(error)
        }
      };
    return(
        <div className="menu">
            <h1 className="title">name of restaurant</h1>
            <h2 className="menulist">
                <ul>
                    <li>biryani</li>
                    
                </ul>
            </h2>
        </div>
    )
}
export default Resmenu;