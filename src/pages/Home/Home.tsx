
import Banner from "../../components/Banner/Banner";
import bannerBg from "/src/assets/images/background-banner.png";
import LogementGallery from "../../components/LogementGallery/LogementGallery";
const BannerTitle = "Chez vous, partout et ailleurs";

export default function Home () {
  return (
    <>      
      <Banner img={bannerBg} overlay={true} title={BannerTitle} />
      <LogementGallery />
    </>
  );
};

