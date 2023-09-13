import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-carousel-minimal";

const data = [
  {
    image:
      "https://img.ltwebstatic.com/images3_ccc/2023/07/24/1690177873e2a2966b1dec17bcfe439788602c9a74.webp",
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_ccc/2023/07/25/16902790660f3b814bdf2e00de5a317c191e2ccb94.webp",
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_ccc/2023/07/24/16901777412a63fb383efb13c24f432b2cc4179725.webp",
  },
  {
    image: "https://cdn.tgdd.vn/2023/07/banner/iP11-1200-300-1200x300.png",
  },
  {
    image:
      "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/sliding-opporeno10-datgach-khong-bhmr.png",
  },
];
const Slider = () => {
  return (
    <div className="slider container-shopapp">
      <div className="slider__wrapcarousel">
        <Carousel
          data={data}
          time={3000}
          width="100vw"
          height="540px"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
        />
      </div>
    </div>
  );
};

export default Slider;
