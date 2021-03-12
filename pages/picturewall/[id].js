import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
const API_KEY = "f640a1d7d20cf0f12efc4848065a016e";

function PictureImg(props) {
  const [pictures, set_pictures] = useState([]);
  const [loading, set_loading] = useState([true]);
  const page_tag = props.tag;

  useEffect(async () => {
    async function featchSearchResults() {
      set_loading(true);
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
      set_loading(false);
    }
    featchSearchResults();
  }, []);

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

  // console.log(pictures[props.pic_id]);

  return (
    <div>
      {!loading && (
        <img
          className="big-picture-img"
          src={generateLink(pictures[props.pic_id])}
        />
      )}
    </div>
  );
}

function PicturePage() {
  const [id, set_id] = useState("");
  const router = useRouter();
  // const id = router.query.id;

  function findTag() {
    if (id < 14) {
      return [id, "Corvallis"];
    } else if (id >= 14 && id < 24) {
      return [id - 14, "craterlake"];
    } else if (id >= 24 && id < 37) {
      return [id - 24, "hike"];
    } else if (id >= 37 && id < 43) {
      return [id - 37, "crab"];
    } else if (id >= 43 && id < 47) {
      return [id - 43, "xmas"];
    } else {
      return [id - 47, "MT.Pisgah"];
    }
  }

  useEffect(() => {
    if (router && router.query) {
      console.log("ID", router.query.id);
      set_id(router.query.id);
    }
  }, [router]);

  const [pic_id, tag] = findTag();

  return (
    <div>
      <TopNavbar picturewall />
      {id != "" && id != undefined && (
        <div className="big-picture">
          <PictureImg
            className="main-content"
            tag={tag}
            pic_id={pic_id}
            key={id}
          />
        </div>
      )}
    </div>
  );
}

export default PicturePage;
