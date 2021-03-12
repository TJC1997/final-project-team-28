import TopNavbar from "../components/TopNavbar";

import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <TopNavbar home />
      <div className="main-contents">
        <h3>Home Page</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
