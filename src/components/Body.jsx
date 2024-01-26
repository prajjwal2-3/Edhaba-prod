import Restcard from "./Rescard";
// import resdata from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [list, setList] = useState([]);

  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json.data.cards[1].card.card.gridElements.infoWithStyle);

      setList(json.data.cards[1].card.card.gridElements.infoWithStyle);

      setisloading(false);
    } catch (error) {
      setisloading(false);
      console.log(error);
    }
  };

  const handleFilter = () => {
    const newResdata = list.restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setList({ ...list, restaurants: newResdata });
  };

  return isloading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="bars">
      <div className="search">
        <input type="text" className="search-input" />
        <button>search</button>
      </div>
      <div className="filter">
        <button className="btn-filter" onClick={handleFilter}>
          Top rated restaurants
        </button>
      </div>
      </div>

      <div className="restcontainer">
        {list.restaurants.map((restaurants, index) => (
          <Restcard key={index} resdata1={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
