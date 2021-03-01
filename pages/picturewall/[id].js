import { useRouter } from "next/router";
import TopNavbar from "../../components/TopNavbar";

const PicturePage = () => {
  const router = useRouter();
  return (
    <div>
      <TopNavbar picturewall />
      Picture page with id: {router.query.id}
    </div>
  );
};

export default PicturePage;
