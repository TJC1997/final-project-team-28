import TopNavbar from "../components/TopNavbar";

import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutText from "../data/aboutText.json";

const API_KEY = "f640a1d7d20cf0f12efc4848065a016e";

const About = () => {
  const page_tag = "about";

  const [pictures, set_pictures] = useState([]);

  function generateLink(pic) {
    console.log(pic);
    return (
      "https://farm" +
      pic.farm +
      ".staticflickr.com/" +
      pic.server +
      "/" +
      pic.id +
      "_" +
      pic.secret +
      ".jpg"
    );
  }
  useEffect(async () => {
    async function featchSearchResults() {
      let jsBody = {};
      try {
        const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&user_id=192392684%40N08&tags=${page_tag}&format=json&nojsoncallback=1`;
        const res = await fetch(link);
        jsBody = await res.json();
        console.log(link);
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("HTTP request abort");
        } else {
          console.log("error");
          console.log(e);
          // throw e;
        }
      }
      const photos = []
        .concat(jsBody.photos.photo)
        .sort((a, b) => (a.title > b.title ? 1 : -1));
      set_pictures(photos);
    }
    featchSearchResults();
  }, []);

  return (
    <div>
      <TopNavbar about />
      <div className="main-contents">
        <h3>Our Story Page</h3>

        <Carousel className="carousel" interval={null} indicators={false}>
          {Object.keys(pictures).map((item, i) => (
            <Carousel.Item key={i}>
              <img
                className="carousel-img"
                src={generateLink(pictures[item])}
              />
              <div className="carousel-cap">
                <h4>{aboutText[item].title}</h4>
                <p>{aboutText[item].text}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
