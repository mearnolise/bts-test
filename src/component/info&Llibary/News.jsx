import { BiTimeFive } from "react-icons/bi";
function News({ urls, title, date }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 Info-block ">
      <div className="news-div">
        <div className="news-top">
          <img className="news-img" src={urls} alt="new" />
        </div>

        <div className="news-bottom">
          <p className="news-bottom-text">{title}</p>
          <p>
            <BiTimeFive /> {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;

/*
<img className="news-img" src={url} alt="new" />
*/
