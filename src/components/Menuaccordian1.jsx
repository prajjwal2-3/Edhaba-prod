import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { CDN_url } from '../utils/constants';

export default function AccordionUsage({data}) {
  console.log(data)
   const menunames = data.itemCards;
  
  return (
    <div className='shadow-sm m-2 p-2 '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {data.title}-({data.itemCards.length})
        </AccordionSummary>
        <AccordionDetails>
        <div className="menu ">
     
     
     <h2 className="menulist">
       <div className=" flex flex-col ">
         {menunames.map((element, index) => (
           
           <div key={index} className="mx-28 m-6 p-4 rounded-md shadow-md hover:scale-110 transition-transform duration-300 ">
             <div className="p-1 items-center flex justify-between">
               <div className="">
                 <p className="text-xl">
                   {element.card.info.name}
                 </p>
                 <p className="text-green-500">₹{" "}
                   {element.card.info.defaultPrice / 100 || element.card.info.price / 100}</p>
                   <div className="text-sm  text-gray-500 text-clip">{element.card.info.description}</div>
               </div>
               <div className="item-center">
                 <img
                   className="rounded-lg w-24  shadow-2xl"
                   alt="image didnt load"
                   src={CDN_url + element.card.info.imageId}
                 />
               </div>
             </div>
           </div>
         ))}
       </div>
     </h2>
     
    
   </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}