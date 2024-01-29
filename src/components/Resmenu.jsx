import { useEffect } from "react";


const Resmenu = () => {

    useEffect(()=>{
        apicall();
    },[])

    const apicall = async () => {
        try {
          const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
              const json = await response.json();
              console.log(json);
              console.log("called")
             
          } catch (error) {
         console.log(error);
        }
      };
    return(
        <div className="menu">
            <h1 className="title">name of restaurant</h1>
            <h2 className="menulist">
                <ul>
                    <li>biryani</li>
                    
                </ul>
            </h2>
        </div>
    )
}
export default Resmenu;