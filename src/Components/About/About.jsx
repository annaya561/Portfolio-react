import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profile2 from "../../assets/profile2.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const finalCounts = [4, 5, 100]; // 👈 yeh actual numbers hain

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          finalCounts.forEach((final, i) => {
            let start = 0;
            const duration = 2000; // 2 sec
            const increment = final / (duration / 30); // har 30ms me increase

            const interval = setInterval(() => {
              start += increment;
              if (start >= final) {
                clearInterval(interval);
                start = final;
              }

              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[i] = Math.floor(start);
                return newCounts;
              });
            }, 30);
          });
          observer.disconnect(); // ek hi baar animation chale
        }
      },
      { threshold: 0.5 } // 50% visible hone pe start ho
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // 🟢 cleanup add karna best practice hai
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []); // ✅ dependency array empty rakhna

  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="About Banner" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile2} alt="Annaya Sharma" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with a strong passion for
              creating responsive, interactive, and visually appealing web
              interfaces.
            </p>
            <p>
              With hands-on experience in frontend technologies, I turn design
              concepts into seamless digital experiences.
            </p>
          </div>

          {/* <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>React Js</p><hr style={{width:"40%"}}/></div>
            <div className="about-skill"><p>Figma</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>PHP & Laravel</p><hr style={{width:"65%"}}/></div>
          </div> */}

          <ul class="about-info mt-4">
            <li>
              <span>Name:</span> <span>Annaya Sharma</span>
            </li>
            <li>
              <span>Date of birth:</span> <span>August 15, 2002</span>
            </li>
            <li>
              <span>Parmanent Address:</span> <span>Muzaffarpur,Bihar, India</span>
            </li>
            <li>
              <span>Zip code:</span> <span>842004</span>
            </li>
            <li>
              <span>Email:</span> <span>annayasharma15@gmail.com</span>
            </li>
            <li>
              <span>Phone: </span> <span>+91-790-368-5531</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 👇 counter wali jagah */}
      <div className="about-achievements" ref={sectionRef}>
        <div className="about-achievement">
          <h1>{counts[0]}+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{counts[1]}+</h1>
          <p>Technologies Used</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{counts[2]}%</h1>
          <p>Learning Attitude</p>
        </div>
      </div>
    </div>
  );
};

export default About;
