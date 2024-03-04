import React from "react";
import { AllWorkExperience } from "./AllWorkExperience";
import styles from "./experience.module.css";
import Title from "../../assets/title/title.tsx";
import TranslateText from "../../assets/TranslateText/translateText.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience: React.FC = () => {
  return (
    <div className={styles.box}>
      <section id="Experience">
      <Title English="Experience" Spanish="Experencia" />
      <VerticalTimeline>
        {AllWorkExperience.map((e) => (
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "rgb(62, 187, 62)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={<TranslateText English={e.dateEn} Spanish={e.dateEs}/>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <img
                src={e.organizationIcon}
                alt="Company Logo"
                style={{ width: "100%", height: "auto", borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
            <TranslateText English={e.positionEn} Spanish={e.positionEs}/>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">{e.organization}</h4>
            <p>
            <TranslateText English={e.descriptionEn} Spanish={e.descriptionEs}/>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      </section>
    </div>
  );
};

export default Experience;
