import TopNavbar from "../components/TopNavbar";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";

const About = () => {
  const child_tag = "child";

  const [pictures, set_pictures] = useState([]);

  useEffect(async () => {
    async function featchSearchResults() {
      let jsBody = {};
      try {
        const link = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=401bb95aed4a6262fce92c7268c892cf&user_id=192392684%40N08&tags=${child_tag}&format=json&nojsoncallback=1&auth_token=72157718485143846-d170d219229460cc&api_sig=26d44d3df1928c1205349e8876925ce2`;
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
      set_pictures(jsBody.photos.photo);
    }
    featchSearchResults();
  }, []);

  console.log(pictures);

  const p1 = pictures[0];
  const p2 = pictures[1];
  console.log(p1.farm);
  const s1 =
    "https://farm" +
    p1.farm +
    ".staticflickr.com/" +
    p1.server +
    "/" +
    p1.id +
    "_" +
    p1.secret +
    ".jpg";
  console.log(s1);
  return (
    <Layout>
      <TopNavbar about />
      <div className="main-contents">
        <h3>Our Story Page</h3>
        <img src={s1} />
      </div>
    </Layout>
  );
};

export default About;
