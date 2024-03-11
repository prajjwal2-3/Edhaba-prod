import { CDN_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { removeitem } from "../utils/Cartslice";
import { clearcart } from "../utils/Cartslice";
const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  console.log(data);
  const dispatch = useDispatch();
  const handledelete = (index) => {
    dispatch(removeitem(index));
  };
  const clearcart1 = () => {
    dispatch(clearcart());
  };
  return (
    <h2 className="menulist sm:w-6/12 mx-auto">
      <div className=" text-center">
        <button
          className="rounded-md shadow-lg mt-2 bg-red-400 p-2 "
          onClick={clearcart1}
        >
          Clear Cart
        </button>
      </div>
      <div className=" flex flex-col ">
        {data.map((element, index) => (
          <div key={index} className=" m-4 p-4 rounded-md shadow-md ">
            <div className="p-1 items-center flex justify-between">
              <div className="">
                <p className="text-xl">{element.name}</p>
                <p className="text-green-500">
                  ₹ {element.defaultPrice / 100 || element.price / 100}
                </p>

                <div className="text-sm w-3/12 h-10 text-gray-500 overflow-hidden text-ellipsis">
                  {element.description}
                </div>
              </div>

              <div className="item-center">
                <img
                  className="rounded-lg w-24  shadow-2xl"
                  alt="image didnt load"
                  src={CDN_url + element.imageId}
                />
                <button
                  className="mx-4 rounded-md shadow-md bg-red-400 p-1 mt-2"
                  onClick={() => {
                    handledelete(index);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </h2>
  );
};
export default Cart;
