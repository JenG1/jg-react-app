import React from "react";
import "./ProjectCard.css";

function EmployeeCard(props) {
  return (
    // row
      <div className="card row">
        <div className="img-container col-4">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content col-8">
          <ul className="project-list">
            <li>
              <strong>Project:</strong> {props.projectname}
            </li>
            <li>
              <strong>GitHub:<a href={props.github}> {props.github}</a></strong>
            </li>
            <li>
              <strong>Heroku:<a href={props.heroku}> {props.heroku}</a></strong>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default EmployeeCard;
