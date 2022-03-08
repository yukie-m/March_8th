import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../scss/news.scss";
import { TailSpin } from "react-loader-spinner";

function News(props) {
  const [searchParams] = useSearchParams();
  const [showLoading, setShowLoading] = useState(true);
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("nz");
  const NewsURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${searchParams.get(
    "searchTerm"
  )}&apiKey=ac60ddbe151545b9950c5c3e85fbbffe`;

  useEffect(() => {
    setShowLoading(true);
    axios.get(NewsURL).then((response) => {
      console.log(response.data.articles);
      setData(response.data.articles);
      setShowLoading(false);
    });
  }, [searchParams.get("searchTerm"), country]);

  const updateCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <div className="news-header">
          {showLoading && (
            <TailSpin
              height="40"
              width="40"
              color="grey"
              margin="10px"
              ariaLabel="loading"
            />
          )}
          {!showLoading && <h3>News Headlines</h3>}
        </div>

        <div className="user-input">
          <select onChange={updateCountry} className="select-country">
            <option value="nz">New Zealand</option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="gb">UK</option>
            <option value="jp">Japan</option>
            <option value="hk">HongKong</option>
            <option value="ua">Ukraine</option>
            <option value="pl">Poland</option>
            <option value="kr">Korea</option>
          </select>
        </div>
      </div>
      <hr />
      {data.map((item, index) => (
        <div key={index} className="article">
          <a href={item.url} target="_blank">
            <div className="article-wrapper">
              <div className="text">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
              <div className="img">
                {item.urlToImage && <img src={item.urlToImage} alt="img" />}
              </div>
            </div>
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default News;
