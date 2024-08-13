import React from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiMysql, SiPostman, SiEclipseide, SiVisualstudiocode } from "react-icons/si";

export const Skills = () => {
  const skills = [
    { title: "Java", icon: <FaJava /> },
    { title: "Spring", icon: <SiSpring /> },
    { title: "Spring Boot", icon: <SiSpringboot /> },
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3Alt /> },
    { title: "JavaScript", icon: <FaJs /> },
    { title: "React.js", icon: <FaReact /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "Postman", icon: <SiPostman /> },
    { title: "Eclipse", icon: <SiEclipseide /> },
    { title: "Spring Tool Suite", icon: <SiSpringboot /> },
    { title: "VS Code", icon: <SiVisualstudiocode /> },
  ];

  return (
    <section id="skills" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Skills</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "20px", justifyContent: "center" }}>
        {skills.map((skill, id) => (
          <div
            key={id}
            style={{
              textAlign: "center",
              color: "#333",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              animation: `fadeIn 1s ease-in-out ${0.1 * id}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={{ fontSize: "50px", marginBottom: "10px" }}>{skill.icon}</div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 768px) {
            section {
              padding: 10px;
            }
            
            h2 {
              font-size: 1.5em;
            }
            
            div {
              font-size: 40px;
            }
          }
        `}
      </style>
    </section>
  );
};
