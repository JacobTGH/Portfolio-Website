import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Recipe Manager', description: 'This project was a fun challenge where I had to work in a team to create a recipe manager, which helped me develop my skills when it comes to functions and classes' },
    { title: 'Project 2', description: 'A description of project 2...' },
    { title: 'Project 3', description: 'A description of project 3...' },
  ];

  return (
    <section id="projects">
      <h2>My projects!</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <p>Please check out my <a href="https://github.com/JacobTGH">github</a> for more projects of mine!</p>
    </section>
  );
};

export default Projects;
