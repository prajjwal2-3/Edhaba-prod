import { useParams } from "react-router-dom";
import useResmenu from "../utils/useResmenu";
import Shimmer from "./shimmer";
import { CDN_url } from "../utils/constants";
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
    <div className="menu ">
      <div className="flex justify-evenly  h-56 items-center bg-slate-600">
        <div className="m-4 p-2 flex flex-col text-center">
          <h1 className="font-extrabold text-4xl text-gray-300 ">{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>{locality}</p>
          <p>{city}</p>
          <p>{avgRatingString}* stars</p>
          <p>Restaurant: {isOpen.toString() ? "Open✅" : "Closed🔴"}</p>
        </div>
        <img
          className="rounded-lg w-52 shadow-2xl  h-44"
          alt="image didnt load"
          src={CDN_url + cloudinaryImageId}
        />
      </div>
      <h2 className="menulist">
        <div className=" flex flex-col text-center">
          {menunames.map((element, index) => (
            <div key={index} className="mx-28 m-6 p-4 rounded-md shadow-md ">
              <div className="p-1 items-center flex justify-evenly">
                <div className="">
                  <p>
                    {element.name}
                  </p>
                  <p>Rs{" "}
                    {element.defaultPrice / 100 || element.price / 100}</p>
                </div>
                <div className="item-center">
                  <img
                    className="rounded-lg w-24  shadow-2xl"
                    alt="image didnt load"
                    src={CDN_url + element.imageId}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </h2>
    </div>
  );
};
export default Resmenu;
