import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './skill.css';

function Skill() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    "Core Java", "JDBC", "Spring MVC", "Spring Boot", "HTML5", "CSS", 
    "Bootstrap", "JavaScript", "React.js", "Node.js", "Express.js", 
    "React Native", "Android", "iOS", "MySQL", "Git", "GitHub","JWT", "Postman", "Swagger"
  ];

  return (
    <>

     
        <h2 className="text-center">My Skills</h2>
        <div className="mt-4">
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div className="card1" data-aos="fade-up" key={index}>
              <h5>{skill}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skill;
