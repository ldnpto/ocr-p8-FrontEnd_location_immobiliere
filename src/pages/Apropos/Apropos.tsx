import Banner from "../../components/Banner/Banner";
import "./Apropos.scss";
import bannerBg from "/src/assets/images/background-apropos.png";
import aproposJson from "../../assets/data/apropos.json";
import Collapse from "../../components/Collapse/Collapse";

interface AproposItem {
  title: string;
  description: string;
}

export default function Apropos () {
  return (
    <div>
      <Banner img={bannerBg} overlay={false} title='' />
      <div className="apropos">
        {aproposJson.map((item: AproposItem, index: number) => (
          <Collapse title={item.title} text={item.description} key={index} />
        ))}
      </div>
    </div>
  );
};

