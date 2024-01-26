import Restcard from "./Rescard";
// import resdata from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchtext, setsearchtext] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [afterfilter, setafterfilter] = useState([])

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

      setList(json.data.cards[1].card.card.gridElements.infoWithStyle);
      setafterfilter(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
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
    setList(list => ({ ...list, restaurants: newResdata }));
    console.log(newResdata);
  };

  const filterfunction = ()=>{
  const filteredlist = list.restaurants.filter(
        (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
  );
  setafterfilter(filteredlist);
  console.log("search button pressed")
  console.log(filteredlist)
  }

  return isloading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="bars">
      <div className="search">
        <input type="text" className="search-input" value={searchtext} onChange={(e)=>{
        setsearchtext(e.target.value);
        }} />
        <button onClick={filterfunction}>search</button>
      </div>
      <div className="filter">
        <button className="btn-filter" onClick={handleFilter}>
          Top rated restaurants
        </button>
      </div>
      </div>

      <div className="restcontainer">
        {afterfilter.map((res, index) => (
          <Restcard key={index} resdata1={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
