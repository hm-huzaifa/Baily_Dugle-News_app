import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, source, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            position: "absolute",
            justifyContent: "flex-end",
            display: "flex",
            right: "0",
          }}
        >
          <span className="badge bg-danger">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://thumbs.dreamstime.com/b/news-text-grunge-paper-close-up-concept-37543916.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
