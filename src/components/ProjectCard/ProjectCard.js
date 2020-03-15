import React from "react";
import "./ProjectCard.css";

function EmployeeCard(props) {
  return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Project:</strong> {props.projectname}
            </li>
            <li>
              <strong>GitHub:<a href={"" + props.github} > {props.github}</a></strong>
            </li>
            <li>
              <strong>Heroku:<a href="{props.heroku}" > {props.heroku}</a></strong>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default EmployeeCard;
