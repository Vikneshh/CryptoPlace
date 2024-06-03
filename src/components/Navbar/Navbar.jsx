import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyChangeHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyChangeHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <button>
          Sign up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
