
// importing react from react
import React from "react";

// creating a function "Links" that takes one argument "props" that allows me to pass
// props down from the app.js file. When function is called it will return the h3 and two a elements
// which will in turn show the two links to github and linkedin

function Links(props){
  return(
      
      <h3>Links

          <a href="https://github.com/liza">{props.github}</a>


          <a href="https://www.linkedin.com/in/liza/"> {props.linkedin}</a>
      
        </h3>
  );
}
// exporting the whole "Links" funtion so that it can be imported on the app.js file for use
export default Links