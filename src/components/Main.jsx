import { useGetCryptosQuery } from "../services/cryptoApi"
import millify from "millify"
import Currencies from "./Currencies";
import { Link } from "react-router-dom";

const Main = () => {


  const { data, isLoading, error } = useGetCryptosQuery(10);




  if(isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    )
  }


  if (error) {
    return <div>{error}</div>
  }




  return (
    <main className="flex flex-col gap-8 p-4 bg-slate-100">
      
      <section>
      <h1 className="text-2xl font-semibold">Global Crypto Stat</h1>

      <div className="grid grid-cols-2 gap-5 pt-5">

      <div className="flex flex-col items-start">
        <p className="stat-name">Total</p>
        <p className="stat-figure">{data?.data.stats.total}</p>
      </div>

      
      <div className="flex flex-col items-start">
        <p className="stat-name">Total 24h</p>
        <p className="stat-figure">{millify(data?.data.stats.total24hVolume)}</p>
      </div>

      
      <div className="flex flex-col items-start">
        <p className="stat-name">Total Exchange</p>
        <p className="stat-figure">{millify(data?.data.stats.totalExchanges)}</p>
      </div>

      
      <div className="flex flex-col items-start">
        <p className="stat-name">Total Coins</p>
        <p className="stat-figure">{millify(data?.data.stats.totalCoins)}</p>
      </div>

      
      <div className="flex flex-col items-start">
        <p className="stat-name">Total Market Cap</p>
        <p className="stat-figure">{millify(data?.data.stats.totalMarketCap)}</p>
      </div>

      <div className="flex flex-col items-start">
        <p className="stat-name">Total Markets</p>
        <p className="stat-figure">{millify(data?.data.stats.totalMarkets)}</p>
      </div>

      </div>

      </section>


      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold text-sky-900">Top 10 Cryptocurrencies in the world</h2>
        <Currencies simplified />
        <Link to = "/currencies" className="text-sky-500 text-xl self-end">See more</Link>
      </section>



    </main>
  )
}

export default Main