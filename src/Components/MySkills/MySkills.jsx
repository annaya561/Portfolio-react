import React, { useEffect, useRef, useState } from "react";
import "./MySkills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import codingCourse from "../../assets/coding-course.mp4";

const MySkills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML & CSS", width: "65%" },
    { name: "Javascript", width: "60%" },
    { name: "React Js", width: "50%" },
    { name: "Figma", width: "60%" },
    { name: "PHP & Laravel", width: "55%" },
  ];

  return (
    <div className="myskills" ref={sectionRef}>
      <div className="about-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="About Banner" />
      </div>

      <div className="about-sections">
        {/* Left: Skills Bar Graph */}
        <div className="skills-left">
          <div className="about-para">
            <p>
              Skilled in creating interactive, high-performance web interfaces
              with React, JavaScript, HTML, CSS, and backend solutions using PHP
              and Laravel.
            </p>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr
                  style={{
                    width: animate ? skill.width : "0%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Video */}
        <div className="skills-right">
          <video controls width="100%" height="auto">
            <source src={codingCourse} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
