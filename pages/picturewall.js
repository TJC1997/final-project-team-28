import TopNavbar from "../components/TopNavbar";

import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const API_KEY = "f640a1d7d20cf0f12efc4848065a016e";

function PictureGroup(props) {
  const [pictures, set_pictures] = useState([]);
  const page_tag = props.tag;
  function generateLink(pic) {
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
        // console.log(link);
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
      <h3 className="picture-group-title">{props.title}</h3>
      <div className="picture-group">
        {Object.keys(pictures).map((item, i) => {
          // console.log(i + props.start_key);
          return (
            <div className="picture-card" key={i + props.start_key}>
              <Link href={`picturewall/${i + props.start_key}`}>
                <img
                  className="picture-img"
                  src={generateLink(pictures[item])}
                />
              </Link>
              <h5>{pictures[item].title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const PictureWall = () => {
  return (
    <div>
      <TopNavbar picturewall />
      <div className="main-contents">
        <h3>Picture Wall Page</h3>
        <PictureGroup
          tag={"Corvallis"}
          title={"Pictures at Corvallis"}
          start_key={0}
        />
        <PictureGroup
          tag={"craterlake"}
          title={"Pictures at Crater Lake"}
          start_key={14}
        />
        <PictureGroup
          tag={"hike"}
          title={"Pictures at different hikes"}
          start_key={24}
        />
        <PictureGroup
          tag={"crab"}
          title={"Pictures at Crabbing Trip"}
          start_key={37}
        />
        <PictureGroup
          tag={"xmas"}
          title={"Pictures at Christmas"}
          start_key={43}
        />
        <PictureGroup
          tag={"MT.Pisgah"}
          title={"Pictures at proposal  Day!"}
          start_key={47}
        />
      </div>
    </div>
  );
};

export default PictureWall;
