import TopNavbar from "../components/TopNavbar";

const Info = () => {
  return (
    <div>
      <TopNavbar info />
      <div className="main-contents">
        <h3>Wedding Info Page</h3>
        <p style={{ marginTop: 10, fontSize: 'large'}}>Wedding Date and Time: August 7, 2021 at 3PM</p>
        <p style={{ fontSize: 'large'}}>Location: East Side Baptist Church in Springfield, OR</p>
        <iframe width="800" height="500" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe3Zbku3gwFQRez9TF21jSkg&key=AIzaSyA1J68CoZ7i5S2lufRdMNZZeSTUdK_B_-g"></iframe>
      </div>
    </div>
  );
};

export default Info;
