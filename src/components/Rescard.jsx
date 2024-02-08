import { CDN_url } from "../utils/constants";
const Restcard = (resobj)=>{
    return(
        <div className="m-4 border-2 p-2 w-60 h-full rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-300 hover:scale-110 transition-transform duration-300 text-slate-800 ">
          <img className="rounded-lg w-56 h-44" alt="image didnt load" src={
             CDN_url  + resobj.resdata1.info.cloudinaryImageId
              }/>
           <h3 className="py-2 font-bold">{resobj.resdata1.info.name}</h3>
           {/* {console.log(resobj.resdata1.info.name)} */}
           <h4 className="linkr">{resobj.resdata1.info.locality}</h4> 
          <div className="overflow-ellipsis"><h4 >{resobj.resdata1.info.cuisines.join(", ")}</h4></div>
           <h4 className="linkr">{resobj.resdata1.info.avgRatingString} stars</h4>
           <h4 className="linkr">{resobj.resdata1.info.costForTwo}</h4>
            </div>
    )
  }
  export default Restcard;
  