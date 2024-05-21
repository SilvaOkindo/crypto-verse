/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Card from "./Card";
import { Link } from "react-router-dom";

const Currencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data, isLoading, error } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data?.data.coins) {
      const filteredCoins = data?.data.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setCryptos(filteredCoins);
    }
  }, [data?.data.coins, searchTerm]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(cryptos);

  return (
    <div className=" p-4 bg-slate-100">
      {!simplified && (
        <div className="flex justify-center mb-10">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search coin"
            className="p-1 rounded outline-none border-sky-700 border w-[400px] shadow-sky-800 shadow"
          />
        </div>
      )}
      <div className="grid md:grid-cols-4 gap-5 ">
        {cryptos.map((coin) => (
          <Link key={coin.rank} to={`${coin.uuid}`}>
            <Card
              rank={coin.rank}
              name={coin.name.substring(0, 11).trim()}
              price={coin.price}
              iconUrl={coin.iconUrl}
              marketCap={coin.marketCap}
              change={coin.change}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Currencies;
