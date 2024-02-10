import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Shimmer from "./shimmer";
import { CDN_url } from "../utils/constants";

const Categories = ()=>{
    const { resID } = useParams();
    const menu = useResmenu(resID);
    if (menu === null) return <Shimmer />;
    const categ = menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       )
       console.log(categ)
       const categname= categ.map((item) => item.card?.card?.title)
       console.log(categname)
       return(
        <div className="">
            {categname}
        </div>
       )
}
export default Categories;