import TopNavbar from "../components/TopNavbar";
import Layout from "../components/Layout";
import { FaAmazon, FaBed, FaTshirt, FaHeart} from "react-icons/fa"
import { Nav } from "react-bootstrap";
const Registration = () => {
  return (
    <Layout>
      <TopNavbar registration />
      <div className="main-contents">
        <div className="registrateBack">
          <h3 className="registration">Registration Page</h3>
          <h4 className="registration"> Here is a few stores we registered with:</h4>
        </div>
        <div className="store">
            <div>
              <a className="link" href="https://www.amazon.com/?tag=hydrusmsnabk-20&hvadid=78477763310050&hvqmt=e&hvbmt=be&hvdev=c&ref=pd_sl_290dlthsvq_e">
                <FaAmazon className="icon" />
                <li> Amazon </li>
              </a>
            </div>
            <div>
            <a className="link" href="https://www.crateandbarrel.me/">
                <FaBed className="icon" />
                <li>  Crate&Barrel </li>
            </a>
            </div>
            <div>
            <a className="link" href="https://www.kohls.com/">
                <FaTshirt className="icon" />
                <li>  Kohls </li>
            </a>
            </div>
            <div>
              <a  className="link"  href="https://www.macys.com/">
              <FaTshirt className="icon" />
                <li>  Macys </li>
              </a>
            </div>
            <div>
               <a  className="link"  href="https://www.weddingwire.com/wedding-registry?nw=1">
                <FaHeart className="icon" />
                <li>  Newly Wish </li>
              </a>
            </div>
        </div>
        <div className="thanks"> <h1> Thank you! </h1></div>
      </div>
    </Layout>
  );
};

export default Registration;
