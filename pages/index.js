import TopNavbar from "../components/TopNavbar";
import Image from 'next/image';

import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <TopNavbar home />
      <div className="main-contents">
        <h3 style={{ marginBottom: 20}}>Home Page</h3>
        <Image src={"/weddingphoto.jpg"} width={700} height={500}/>
        <p className='home-cap'>Tony and Kaitlin are getting married this coming August. They met at Oregon State University with the same major in computer science. They both really like and took a few of Rob Hess’s classes since they were very practical and useful. This final project for CS 499 is a website for Tony & Kaitlin’s wedding information. The website introduces the story between Tony and Kaitlin, provides wedding information, showcases pictures of Tony and Kaitlin, and includes registration for the wedding itself.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
