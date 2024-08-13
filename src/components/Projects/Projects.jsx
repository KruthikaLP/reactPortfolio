import React from "react";

const projects = [
  {
    title: "Music App",
    description: "A Java Spring Boot-based music application featuring a user-friendly interface built with HTML, CSS, and Bootstrap. Users can stream and manage their music, with premium features available through Razorpay integration for a seamless subscription experience."
  },
  {
    title: "Data Structures Implementation Using Swings in Java",
    description: "Implemented various data structures, including linked lists, stacks, and queues using Java Swing. Designed and implemented efficient algorithms and integrated them with Swing components for a user-friendly interface."
  },
  {
    title: "Interactive Portfolio Website",
    description: "An interactive portfolio website developed using React.js, featuring a dynamic and animated user interface that highlights my skills, projects, and background."
  }
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {projects.map((project, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{project.title}</h3>
            <p style={{ margin: "0" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
