import Restcard from "./Rescard";
// import resdata from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () => {
  //this allows us to update the ui according to db changes
  const [list, setList] = useState([]);
  //this allows us to have a flag check whether api has loaded data or not and if not then it shows loading
  const [isloading, setisloading] = useState(true);

  //this hooks lets us have our ui loaded first and then wait for api 
  useEffect(()=>{
    fetchdata();
  },[])
  

  const fetchdata = async ()=>{
    //try and catch method is used to have a check for error
    try{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      //data received needs to be converted in json format for it to be used in ui
      const json  = await data.json();
    //makes sure that json is received
      console.log(json.data.cards[1].card.card.gridElements.infoWithStyle);
      //updates the list array previously it was empty
      setList(json.data.cards[1].card.card.gridElements.infoWithStyle)
      //this marks that page is no longer loading
      setisloading(false) ;
    }
    catch(error){
      setisloading(false);
      console.log(error)
    }
  }

  const handleFilter = () => {
    //this is filter function to filter restaurants according to rating it uses state hook
    const newResdata = list.restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setList({ ...list, restaurants: newResdata });
    
    };
  if(isloading){
    return(
      <p>loading..</p>
    )
  }else{
    return (
      <div className="body">
        <div className="filter">
          <button
            className="btn-filter"
            onClick={handleFilter}
          >
            Top rated restaurants
          </button>
        </div>
          {/*this maps the arrays to populate rescard*/}
        <div className="restcontainer">

          {list.restaurants.map((restaurants, index) => (
            <Restcard key={index} resdata1={restaurants} />
          ))}
        </div>
      </div>
    );
  }

};

export default Body;
