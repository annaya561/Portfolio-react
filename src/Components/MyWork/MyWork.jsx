import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

// Apne project images import kar lo
import project1 from '../../assets/weather.png';
import project2 from '../../assets/news.png';
import project3 from '../../assets/lms.png';
import project4 from '../../assets/crud.png';
import project5 from '../../assets/license.png';

const MyWork = () => {
  return (
    <div className="mywork">
      {/* Title */}
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="My Work Banner" />
      </div>

      <section className="mywork-area">
        {/* Projects Grid */}
        <div className="projects-grid">
          {[project1, project2, project3, project4, project5].map((proj, index) => (
            <div key={index} className="single-project">
              <img src={proj} alt={`Project ${index + 1}`} />
              <p>
                {['Weather App', 'News Web App', 'CRUD Operation', 'iNotes CRUD', 'Ecommerce Website'][index]}
              </p>
            </div>
          ))}
        </div>

        {/* Experience / Contact */}
        <div className="experience-area">
          <div className="years-area">
            <h2 className="years">4+</h2>
            <h2>
              <span>Projects</span>
              <span>Successfully</span>
              <span>Completed</span>
            </h2>
          </div>

          <div className="call-area">
            <span><i className="fas fa-phone-alt fa-2x"></i></span>
            <div className="call-now">
              <a href="#" className="text-uppercase h4 font-roboto">Contact Me : <br/></a>
              <span className="font-roboto py-2">(+91)-7903685531</span>
            </div>
            <div className="call-now">
              <a href="#" className="text-uppercase h4 font-roboto">Mail to : <br/></a>
              <span className="font-roboto py-2">annayasharma15@gmail.com</span>
            </div>
          </div>
          <div className="bg-panel"></div>
        </div>
      </section>

    </div>
  );
};

export default MyWork;
