import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-blue-950 py-4">
      <p className="text-white">Cryptoverse</p>
      <p className="text-white">All right reseversed</p>
      <div className="flex gap-3 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/exchange">Exchange</Link>
      </div>
    </footer>
  );
};

export default Footer;
