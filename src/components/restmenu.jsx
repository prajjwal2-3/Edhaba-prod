import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Shimmer from "./shimmer";
import { CDN_url } from "../utils/constants";
import AccordionUsage from "./Menuaccordian1";
import Categories from "./Categories";
const Resmenu = () => {
  const { resID } = useParams();
  const menu = useResmenu(resID);
 
  if (menu === null) return <Shimmer />;
  
  const {
    name,
    cuisines,
    city,
    locality,
    avgRatingString,
    isOpen,
    cloudinaryImageId,
  } = menu.cards[0].card.card.info;
  

  const categ = menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.hasOwnProperty("itemCards")
     )
  
        console.log(categ)
  
  return (
     <div className="">
      <p>
        {categ.map((element,index) => (
          <AccordionUsage key = {index} data={element?.card?.card} />
                
        ))}
      </p>
     </div>
    // <div className="menu ">
     
    //   <div className="flex justify-evenly  h-56 items-center bg-slate-600">
    //     <div className="m-4 p-2 flex flex-col text-center">
    //       <h1 className="font-extrabold text-4xl text-gray-300 ">{name}</h1>
    //       <p>{cuisines.join(", ")}</p>
    //       <p>{locality}</p>
    //       <p>{city}</p>
    //       <p>{avgRatingString}* stars</p>
          
    //     </div>
    //     <img
    //       className="rounded-lg w-52 shadow-2xl  h-44"
    //       alt="image didnt load"
    //       src={CDN_url + cloudinaryImageId}
    //     />
    //   </div>
    //   <h2 className="menulist">
    //     <div className=" flex flex-col ">
    //       {menunames.map((element, index) => (
            
    //         <div key={index} className="mx-28 m-6 p-4 rounded-md shadow-md hover:scale-110 transition-transform duration-300 ">
    //           <div className="p-1 items-center flex justify-between">
    //             <div className="">
    //               <p className="text-xl">
    //                 {element.name}
    //               </p>
    //               <p className="text-green-500">₹{" "}
    //                 {element.defaultPrice / 100 || element.price / 100}</p>
    //                 <p className="text-sm text-gray-500">{element.description}</p>
    //             </div>
    //             <div className="item-center">
    //               <img
    //                 className="rounded-lg w-24  shadow-2xl"
    //                 alt="image didnt load"
    //                 src={CDN_url + element.imageId}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </h2>
      
     
    // </div>
    
  );
};
export default Resmenu;
