import "./Education.scss";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

const Education = () => {
  const eduLists = [
    {
      year: "01.07.2021-Present",
      where: "Preezma",
      about: "Full Stack Developer",
    },
    {
      year: "01.12.2020-01.03.2021",
      where: '"Bitschool" IT and business school',
      about: "React.JS",
    },
    {
      year: "01.11.2020-01.02.2021",
      where: '"Sunny School" Training Center',
      about: "Node js",
    },
    {
      year: "01.07.2020-01.09.2020",
      where: "RUSSIAN-ARMENIAN UNIVERSITY",
      about: "Fundamentals of Programming, basics of programming",
    },
    {
      year: "01.05.2020-01.09.2020",
      where: `UNDP IMPACTAIM ACCELERATOR #5`,
      about: "Basics of programming, HTML/CSS, Javascript",
    },
    {
      year: "2009-2013",
      where: `Armenian State University of Economics `,
      about: `Regulation of Economy & International Economic Relation`,
    },
  ];

  const isTabletOrMobile = useMediaQuery({ query: "(max-width:600px)" });

  return (
    <div id="education" className="edu">
      <h2>Education & Experience</h2>
      <div className="timeline">
        {eduLists.map((edu, index) => {
          if (index % 2 === 0 || isTabletOrMobile) {
            return (
              <div className="container contLeft" key={index}>
                <Fade right>
                  <div className="left">
                    <div className="content">
                      <h2>{edu.year}</h2>
                      <h4>{edu.where.toUpperCase()}</h4>
                      <p>{edu.about}</p>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          }
          return (
            <div className="container contRight" key={index}>
              <Fade left>
                <div className="right">
                  <div className="content">
                    <h2>{edu.year}</h2>
                    <h4>{edu.where.toUpperCase()}</h4>
                    <p>{edu.about}</p>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
