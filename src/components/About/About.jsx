import React from "react";

export const About = () => {
  return (
    <section id="about" style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>About</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ul style={{ listStyleType: "none", padding: "0", width: "100%", maxWidth: "800px" }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
              transition: "transform 0.3s ease",
              animation: `fadeIn 1s ease-in-out 0.2s`,
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>Education</h3>
              <p style={{ margin: "0" }}>
                B.E in Computer Science & Engineering<br />
                MVJ College of Engineering, 2019-2023<br />
                CPI: 8.12
              </p>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
              transition: "transform 0.3s ease",
              animation: `fadeIn 1s ease-in-out 0.4s`,
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>Internship</h3>
              <p style={{ margin: "0" }}>
                Full Stack Java Intern at Kodnest Institute<br />
                Duration: 6 months<br />
                Worked on full-stack Java development, including Java, Spring Boot, Hibernate, and frontend technologies. Gained experience in designing, implementing, and deploying features across the technology stack.
              </p>
            </div>
          </li>
        </ul>
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
            
            ul {
              padding: 0;
              margin-top: 10px;
            }
            
            li {
              flex-direction: column;
              align-items: flex-start;
              text-align: center;
              padding: 15px;
            }
          }
        `}
      </style>
    </section>
  );
};
