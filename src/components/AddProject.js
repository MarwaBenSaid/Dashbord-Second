import React from "react";
import "./AddProject.css";

function AddProject() {
  return (
    <div>
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
        />

        <link rel="stylesheet" href="Signup.css" />
      </head>
    <div className=" add-project-container ">
      <div className="add-project-form">
        <form>
        <div class="mb-2">
  <label for="ControlInput" className="form-label">Project Name</label>
  <input className="form-control" type="text" id="project-name" name="project-name" />
</div>
<div class="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="project-description" name="project-description" rows="3" />
</div>
</form>
<div className="form-buttons d-grid d-md-block mt-5">
<button type="button" class=" cancel-button">Cancel</button>
<button type="button" class=" submit-button">Submit</button>
</div>
       
      </div>
    </div>
    </div>
  );
}

export default AddProject;
