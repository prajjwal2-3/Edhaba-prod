import Restcard from "./Rescard";
// import resdata from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOlinestat from "../utils/useOnlinestat";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchtext, setsearchtext] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [afterfilter, setafterfilter] = useState([]);


  useEffect(() => {
    fetchdata();
    console.log("Api called");
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        RES_API
      );

      const json = await data.json();

      console.log("below is api data ");
      console.log(json);
      let dataIndex;
      for (let i = 1; i <= 4; i++) {
        if (json.data.cards[i].card.card.hasOwnProperty("gridElements")) {
          dataIndex = i;
          console.log("restaurants are found in index " + i);
          break; // Exit the loop once 'gridElements' is found
        }
      }
      setList(json.data.cards[dataIndex].card.card.gridElements.infoWithStyle);
      setafterfilter(
        json.data.cards[dataIndex].card.card.gridElements.infoWithStyle
          .restaurants
      );
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
    setList((list) => ({ ...list, restaurants: newResdata }));
    console.log(newResdata);
  };

  const filterfunction = () => {
    const filteredlist = list.restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setafterfilter(filteredlist);
    console.log("search button pressed");
    console.log(filteredlist);
  };
  const onlinestat = useOlinestat();
  if(onlinestat === false) return (
    <h1>you're offline</h1>
  );

  return isloading ? (
    <Shimmer />
    
  ) : (
    <div className="body">
      <div className=" flex sm:flex-row flex-col   justify-center">
        <div className="search flex sm:p-2  m-4">
          <input
            type="text"
            className="search-input border-2 sm:p-2 p-1 mx-auto rounded-lg border-gray-300 focus:border-gray-600"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button className="sm:px-4 sm:py-2 px-1  mx-auto sm:mx-4 bg-green-400 rounded-lg" onClick={filterfunction}>search</button>
        </div>
        <div className="filter sm:p-2 sm:m-4 mx-auto ">
          <button className=" sm:px-4 sm:py-2 p-1 bg-green-400 rounded-lg" onClick={handleFilter}>
            Top rated restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-auto mb-10 text-center text-pretty justify-center ">
        {afterfilter.map((res) => (
          <Link
            to={"/restaurants/" + res.info.id}
            key={res.info.id}
            className="linkr mb-6"
          >
            <Restcard resdata1={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
