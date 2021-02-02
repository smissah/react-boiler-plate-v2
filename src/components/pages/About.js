import { Link } from "react-router-dom";

const About = () => {
  return (
    //using Link instead of a tags stops page reloads
    <div>
      <h4>Version 1.0.4</h4>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;
