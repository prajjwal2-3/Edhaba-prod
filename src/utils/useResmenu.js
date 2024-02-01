import { MENU_API } from "../utils/constants";
import { useState,useEffect } from "react";

const useResmenu = (resID)=>{
    const [menu, setmenu] = useState(null);

  useEffect(() => {
    apicall();
    console.log("Menu api called");
  }, []);

  const apicall = async () => {
    try {
      const data = await fetch(MENU_API + resID);
      const json = await data.json();
      console.log("below is menu data ");
      console.log(json);
      setmenu(json.data);
    } catch (error) {
      console.log(error);
    }
  };
  return menu;
}

export default useResmenu;