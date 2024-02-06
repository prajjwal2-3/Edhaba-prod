import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Shimmer from "./shimmer";

const Resmenu = () => {
  const { resID } = useParams();
  const menu = useResmenu(resID);
  if (menu === null) return <Shimmer />;

  const { name, cuisines, city, locality, avgRatingString, isOpen } =
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
    <div className="menu">
      <h1 className="title">{name}</h1>
      <p>{cuisines.join("")}</p>
      <p>{avgRatingString}* stars</p>
      <p>{locality}</p>
      <p>{city}</p>
      <p>{isOpen}</p>
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
