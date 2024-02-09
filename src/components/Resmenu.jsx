import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Shimmer from "./shimmer";
import { CDN_url } from "../utils/constants";
const Resmenu = () => {
  const { resID } = useParams();
  const menu = useResmenu(resID);
  if (menu === null) return <Shimmer />;

  const { name, cuisines, city, locality, avgRatingString, isOpen, cloudinaryImageId } =
    menu.cards[0].card.card.info;
  let dataIndex1;
  let menufound = false; 
  for (let i = 0; i <= 4; i++) {
    if (
      menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
        i
      ]?.card?.card?.hasOwnProperty("itemCards")
    ) {
      dataIndex1 = i;
      menufound = true;
      console.log("menu is found on index " + i);
      break;
    }
  }
  if (!menufound) {
    console.log("menu not found");
    return (
      <>
        <div>
          <h1>no menu</h1>
        </div>
      </>
    );
  }
  const menulist =
    menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[dataIndex1].card.card
      .itemCards;
  const menunames = menulist.map((item) => item.card.info);
  console.log(menunames);
  return (
    <div className="menu  justify-center">
      <div className="flex justify-center h-52 items-center bg-slate-600">
      <div className="m-2 ">
      <h1 className="font-extrabold text-white "></h1>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRatingString}* stars</p>
      <p>{locality}</p>
      <p>{city}</p>
      <p className="text-yellow-500">{isOpen}</p>
      </div>
      <img className="rounded-lg w-56 h-44" alt="image didnt load" src={
             CDN_url  + cloudinaryImageId
              }/>
     
      </div>
      <h2 className="menulist">
        <div>
          {menunames.map((element, index) => (
            <li key={index}>
              {element.name}-Rs{" "}
              {element.defaultPrice / 100 || element.price / 100}
            </li>
          ))}
        </div>
      </h2>
    </div>
  );
};
export default Resmenu;
