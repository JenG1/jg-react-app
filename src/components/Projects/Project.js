import React, { Component } from "react";
import projects from "../../projects.json";
import ProjectCard from '../ProjectCard/ProjectCard.js';

class Projects extends Component {
  state = {
    projects
  };
  render() {
    return (
        <div>
          <div>
            <h1>Projects</h1>
          </div>
          {this.state.projects.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              projectname={project.projectname}
              image={project.image}
              github={project.github}
              heroku={project.heroku}
            />
          ))}
        </div>
    );
  }
}

export default Projects;