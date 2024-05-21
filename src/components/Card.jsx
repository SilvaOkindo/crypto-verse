/* eslint-disable react/prop-types */
import millify from "millify";
const Card = ({name, price, iconUrl, marketCap, change, rank}) => {
  return (
    <div className="flex flex-col gap-5 bg-white rounded shadow-lg p-4 hover:shadow-none duration-300">
      <div className="flex items-center justify-between">
        <p className="text-md font-bold text-blue-900">{`${rank} ${name}`}</p>
        <img src={iconUrl} alt="" className="h-10 w-10"/>
      </div>

      <div>
        <p className="text-sky-800 font-semibold">Price: {millify(price)}</p>
        <p className="text-sky-800 font-semibold">Market cap: {millify(marketCap)}</p>
        <p className="text-sky-800 font-semibold">Daily exchnage: {millify(change)}</p>
      </div>
    </div>
  );
};

export default Card;
