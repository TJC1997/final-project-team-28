import TopNavbar from "../components/TopNavbar";
import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
      <TopNavbar home />
      <div className="main-contents">
        <h3>Home Page</h3>
      </div>
    </Layout>
  );
};

export default Home;
