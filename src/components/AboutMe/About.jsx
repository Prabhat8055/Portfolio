import "./About.css"; // optional, for custom styling

const About = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-content">
          <h1>ABOUT PRABHAT</h1>
          <h2>Hello! I’m Prabhat Bhasme.</h2>
          <p style={{fontFamily:"monospace"}}>
            I’m currently pursuing a Bachelor’s degree in Instrumentation and
            Control Engineering at Vishwakarma Institute of Technology, Pune.
            I’m passionate about solving challenging problems, especially
            through Data Structures and Algorithms. As a skilled developer with
            a flair for frontend and backend development, I enjoy crafting
            seamless and dynamic user experiences. My expertise includes working
            with modern frameworks and libraries to create engaging animations
            and building robust full-stack projects that merge functionality
            with creativity. Check out my work to see the innovative solutions
            I’ve brought to life!{" "}
          </p>
          <p style={{fontFamily:"monospace"}}>
            Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet.
          </p>
        </div>

        <div className="skills">
          <SkillBar skill="C++" percentage="70%" />
          <SkillBar skill="Python" percentage="80%" />
          <SkillBar skill="HTML5, CSS3, JS" percentage="90%" />
          <SkillBar skill="React" percentage="60%" />
          <SkillBar skill="SQL" percentage="70%" />
          <SkillBar skill="Git, Git-Hub" percentage="50%" />
          {/* Add more skills as needed */}
        </div>
      </section>
    </>
  );
};

// SkillBar component for individual skills
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span>{skill}</span>
        <span>{percentage}</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: percentage }}></div>
      </div>
    </div>
  );
};

export default About;
