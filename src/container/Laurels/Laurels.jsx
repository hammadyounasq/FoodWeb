import React from "react";

import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

function AwardCard({ award: { imgUrl, title, subtitle } }) {
  return (
    <div className="app__laurels_award-card">
      <img src={imgUrl} alt={`${title} award`} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__cormorant" style={{ color: "#fff" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading tittle="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="Restaurant laurels and awards" />
    </div>
  </div>
);

export default Laurels;
