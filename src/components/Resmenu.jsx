import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./shimmer";

const Resmenu = () => {
const {resID} = useParams();
const [menu, setmenu] = useState(null);

 useEffect(()=>{
        apicall();
        console.log("called")
    },[])

    const apicall = async () => {
        try{
            const data = await fetch(MENU_API + resID)
            const json = await data.json();
            console.log(json)
          setmenu(json.data)
        }
        catch(error){
         console.log(error)
        }
      };
      if(menu === null) return <Shimmer />;

      const {name,cuisines,city,locality,avgRatingString,isOpen} = menu.cards[0].card.card.info;
      const menulist = menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
      const menunames= menulist.map(item => item.card.info.name)
      console.log(menunames);
    return(
        
        
        <div className="menu">
            <h1 className="title">{name}</h1>
            <p>{cuisines.join("")}</p>
            <p>{avgRatingString}* stars</p>
            <p>{locality}</p>
            <p>{city}</p>
            <p>{isOpen}</p>
            <h2 className="menulist">
                <ul>
                    {menunames}
                    
                </ul>
            </h2>
        </div>
    )
}
export default Resmenu;