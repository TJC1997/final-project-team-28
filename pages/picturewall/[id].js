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

  return (
    <div>
      {Object.keys(pictures).map(
        (item, i) =>
          i == props.pic_id && (
            <img
              key={i}
              className="big-picture-img"
              src={generateLink(pictures[item])}
            />
          )
      )}
    </div>
  );
}

function PicturePage() {
  // const router = useRouter();
  // const id = router.query.id;
  // let pic_id = id;

  const [id, set_id] = useState(0);
  const router = useRouter();
  let pic_id = 0;

  useEffect(() => {
    if (router && router.query) {
      // console.log(router.query);
      set_id(router.query.id);
    }
  }, [router]);

  function findTag() {
    pic_id = id;
    if (id < 14) {
      return "Corvallis";
    } else if (id >= 14 && id < 24) {
      pic_id = id - 14;
      return "craterlake";
    } else if (id >= 24 && id < 37) {
      pic_id = id - 24;
      return "hike";
    } else if (id >= 37 && id < 43) {
      pic_id = id - 37;
      return "crab";
    } else if (id >= 43 && id < 47) {
      pic_id = id - 43;
      return "xmas";
    } else {
      pic_id = id - 47;
      return "MT.Pisgah";
    }
  }
  const tag = findTag();
  // console.log(tag, pic_id);

  return (
    <div>
      <TopNavbar picturewall />
      <div className="big-picture">
        <PictureImg className="main-content" tag={tag} pic_id={pic_id} />
      </div>
      <Footer />
    </div>
  );
}

export default PicturePage;
