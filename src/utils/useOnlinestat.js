import { useEffect, useState } from "react"

const useOlinestat = ()=>{
    const [isonline,setisonline] = useState(true);
   
useEffect(()=>{
    window.addEventListener("online", () => {
        setisonline(true);
      });
            window.addEventListener("offline", () => {
        setisonline(false);
      });
},[])
console.log(isonline)
  return isonline;
 
}

export default useOlinestat;