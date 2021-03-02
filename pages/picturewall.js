import TopNavbar from "../components/TopNavbar";
import Layout from "../components/Layout";
const PictureWall = () => {
  return (
    <Layout>
      <TopNavbar picturewall />
      <div className="main-contents">
        <h3>Picture Wall Page</h3>
      </div>
    </Layout>
  );
};

export default PictureWall;
