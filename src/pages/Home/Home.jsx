import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const handleSubmit = async (e) => {
    // Restricting the default behaviour of forms
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    // Now updating the table layout with the new data
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest crytocurrency marketplace.Sign up to
          explore more about the cryptos.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Search Crypto..."
            onChange={handleSearch}
            required
            list="coinList"
          />

          {/* This below line is just to suggest the user with the coin names */}
          {/* to display this datalist to the input fiels we have to name both of them with the same id name with LIST ATTRIBUTE  */}
          {/* REMEMBER LIST ATTRIBUTE IN INPUT, NOT ID  */}
          <datalist id="coinList">
            {allCoin.map((item, index) => (
              <option value={item.name} key={index} />
            ))}
          </datalist>

          {/* End of that datalist feature */}

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p style={{ textAlign: "right" }} className="market-cap">
            Market Cap
          </p>
        </div>
        {displayCoin.slice(0, 10).map((coin, index) => {
          // Example for bitcoin the url will be "/coin/bitcoin"
          return (
            <Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
              <p>{coin.market_cap_rank}</p>
              <div>
                <img src={coin.image} alt="" />
                <p>{coin.name + " - " + coin.symbol}</p>
              </div>
              {/* toLocaleString() is used put comma in between the values.Try to get to know about their internal workings and reason behind this behaviour */}
              <p>
                {currency.symbol} {coin.current_price.toLocaleString()}
              </p>
              <p
                style={{ textAlign: "center" }}
                className={
                  coin.price_change_percentage_24h > 0 ? "positive" : "negative"
                }
              >
                {Math.floor(coin.price_change_percentage_24h * 100) / 100}{" "}
              </p>
              <p style={{ textAlign: "right" }} className="market-cap">
                {currency.symbol} {coin.market_cap.toLocaleString()}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
