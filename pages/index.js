import TopNavbar from "../components/TopNavbar";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

import homeText from "../data/homeText.json";

const Home = () => {
  const page_tag = "home";
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
        const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.NEXT_PUBLIC_FLICKR_API_KEY}&user_id=192392684%40N08&tags=${page_tag}&format=json&nojsoncallback=1`;
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
      <TopNavbar home />
      <div className="main-contents">
        <h3 style={{ marginBottom: 20 }}>Home Page</h3>
        {Object.keys(pictures).map((item, i) => (
          <img
            className="home-pic"
            key={i}
            src={generateLink(pictures[item])}
          />
        ))}
        <p className="home-cap">{homeText["0"].text}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
