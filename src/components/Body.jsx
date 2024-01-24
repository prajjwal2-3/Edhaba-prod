import Restcard from "./Rescard";
import resdata from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resdata);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            const newResdata = resdata.restaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4
            );
            setList({ ...list, restaurants: newResdata });
            console.log(newResdata);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restcontainer">
        {list.restaurants.map((restaurant, index) => (
          <Restcard key={index} resdata1={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
