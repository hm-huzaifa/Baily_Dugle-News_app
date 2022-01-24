import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactCountryFlag from "react-country-flag";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getCountryCode = () => {
    if (props.country === "Argentina") {
      return "ar";
    } else if (props.country === "Belgium") {
      return "be";
    } else if (props.country === "Brazil") {
      return "br";
    } else if (props.country === "France") {
      return "fr";
    } else if (props.country === "Germany") {
      return "de";
    } else if (props.country === "Netherlands") {
      return "nl";
    } else if (props.country === "United Kingdom") {
      return "gb";
    } else if (props.country === "United States") {
      return "us";
    }
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country.code
    }&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${
      props.pageSize
    }${props.keyWordEnable ? "&q=football" : ""}`;
    console.log(props.country.code);
    console.log("KeyWord Enable: ", props.keyWordEnable);
    setLoading({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - Baily Dugle`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    updateNews();
  }, [props.country]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country.code
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    console.log(props.country, getCountryCode());
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    console.log(parsedData);
  };

  return (
    <>
      <h1 className="my-70 text-center" style={{ marginTop: "70px" }}>
        Baily Dugle - {capitalize(props.category)}
      </h1>
      <h4 className="my-3 text-center">
        Current Region: {props.country.name}
        <ReactCountryFlag countryCode={props.country.code.toUpperCase()} svg />
      </h4>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title} // ? element.title.slice(0, 70) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    author={element.author}
                    source={element.source.name}
                    date={element.publishedAt}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: { name: "United States", code: "us" },
  pageSize: 9,
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
