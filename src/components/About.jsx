import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Vivek Singh, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
        Bachelor of Computer Applications (BCA), Galgotias University, 2021-2024 <br/>
        Full-Stack Web Development, physics wallah, May 2023-Feb 2024 <br/>
        Backend Development Course, <a className="text-red-600">Coursera (Microsoft)</a>, In Progress <br/>
        MERN Stack Development, SkillUp, 2025
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Certificates
        </h1>
        <span>
          MERN Stack Development Intern - UptoSkills <br/>
          React JS Tutorial - Cuvette <br/>
          Python Programing - Code Alpha <br/>
          Front-end Web Development - Reliance Foundation Skilling Academy <br/>
          Software Engineer Intern - HackerRank <br/>
          Android developer Virtual Internship - EduSkills <br/>
          CSS - HackerRank <br/>
          SQL using MySQL and Database Design Course - Scaler <br/>
          Naukri Campus Young Turks Participation - Naukari Campus
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission
        </h1>
        <p>
        My mission is to leverage my skills and creativity to deliver innovative web 
        development and software solutions that exceed client expectations and contribute 
        positively to the digital landscape. I am committed to continuous learning and growth, 
        always seeking new challenges and opportunities to expand my horizons. I aim to build 
        scalable, user-centric applications that solve real-world problems, enhance user 
        experience, and stay aligned with emerging technologies to drive impactful results.
        </p>
      </div>
    </div>
  );
}

export default About;