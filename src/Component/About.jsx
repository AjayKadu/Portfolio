import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './about.css'

function About() {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    setTimeout(() => setAnimate(false), 2000); // Reset animation after 1s
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className="container mt-3">
                <h2 className={`text-center ${animate ? 'animate__animated animate__fadeInDown' : ''}`}>
                    About Me
                </h2>
                <h3 className="lead mt-2">	&#9830; Education</h3>
                <div className={`row mt-4 ${animate ? 'animate__animated animate__zoomIn' : ''}`}>
                    {[
                        { title: "10th", course: "SSC", stream: "General", school: "Y.C.Sainik School, Washim.", start: "June 2017", end: "March 2018", percentage: "86%" },
                        { title: "12th", course: "HSC", stream: "Science", school: "Y.C.Sainik School, Washim.", start: "June 2019", end: "March 2020", percentage: "77%" },
                        { title: "Engineering", course: "Bachlore of Engineering", stream: "Information Technology", school: "Sipna COET, Amravati.", start: "Sep 2020", end: "June 2024", percentage: "70%" },
                        { title: "PG-Diploma", course: "CDAC", stream: "Mobile Computing (DMC)", school: "Sunbeam Infotech, Pune.", start: "Aug 2024", end: "Feb 2025", percentage: "77%" }
                    ].map((edu, index) => (
                        <div className="col-md-3" key={index}>
                            <h4 className='pt-3'>{edu.title}</h4>
                            <ul className="list-group">
                                {[{ label: "Course", value: edu.course },
                                  { label: "Stream", value: edu.stream },
                                  { label: "College", value: edu.school },
                                  { label: "Start Date", value: edu.start },
                                  { label: "End Date", value: edu.end },
                                  { label: "Percentage", value: edu.percentage }
                                ].map((item, idx) => (
                                    <li className="list-group-item" key={idx}>
                                        <div id='liDiv'>
                                            <div id='heading'><p>{item.label}: </p></div>
                                            <div id='desc'><p>&nbsp; {item.value}</p></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <hr />
        </>
    );
}

export default About;
