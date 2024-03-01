import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Shimmer from "./shimmer";
import { CDN_url } from "../utils/constants";
import AccordionUsage from "./Menuaccordian1";

const Resmenu = () => {
  const { resID } = useParams();
  const menu = useResmenu(resID);
 console.log(menu)
  if (menu === null) return <Shimmer />;
  
  const {
    name,
    cuisines,
    city,
    locality,
    avgRatingString,
    isOpen,
    cloudinaryImageId,
  } = menu?.cards[0]?.card?.card?.info;
  

  const categ = menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.hasOwnProperty("itemCards")
     )
  
        console.log(categ)
  
  return (
   <>
    <div className="flex justify-evenly  h-56 items-center bg-slate-600">
    <div className="m-4 p-2 flex flex-col text-center">
      <h1 className="font-extrabold text-4xl text-gray-300 ">{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
      <p>{city}</p>
      <p>{avgRatingString}* stars</p>
      
    </div>
    <img
      className="rounded-lg w-52 shadow-2xl  h-44"
      alt="image didnt load"
      src={CDN_url + cloudinaryImageId}
    />
  </div>
     <div className="flex text-center justify-center w-6/12 m-auto">
      <p>
        {categ.map((element,index) => (
          <AccordionUsage key = {index} data={element?.card?.card} />
                
        ))}
      </p>
     </div>
   </>
   
    
  );
};
export default Resmenu;
