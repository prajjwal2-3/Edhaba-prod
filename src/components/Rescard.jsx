import { CDN_url } from "../utils/constants";
const Restcard = (resobj)=>{
    return(
        <div className="card">
          <img className="image" alt="image didnt load" src={
             CDN_url  + resobj.resdata1.info.cloudinaryImageId
              }/>
           <h3>{resobj.resdata1.info.name}</h3>
           {/* {console.log(resobj.resdata1.info.name)} */}
           <h4>{resobj.resdata1.info.locality}</h4> 
           <h4>{resobj.resdata1.info.avgRatingString} stars</h4>
           <h4>{resobj.resdata1.info.cuisines.join(", ")}</h4>
           <h4>{resobj.resdata1.info.costForTwo}</h4>
            </div>
    )
  }
  export default Restcard;
  