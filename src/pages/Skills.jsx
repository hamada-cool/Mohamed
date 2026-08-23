export default function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">

        <div className="section-title">
          <h2>My Skills</h2>
          <p>
            Technologies I use to build modern and responsive web applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <i className="fab fa-html5"></i>
            <h3>HTML5</h3>
            <p>
              Semantic, accessible and SEO-friendly web pages.
            </p>
          </div>

          <div className="skill-card">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS3</h3>
            <p>
              Responsive layouts, Flexbox, Grid and animations.
            </p>
          </div>

          <div className="skill-card">
            <i className="fab fa-js-square"></i>
            <h3>JavaScript</h3>
            <p>
              Interactive websites with modern ES6+ features.
            </p>
          </div>

          <div className="skill-card">
            <i className="fab fa-bootstrap"></i>
            <h3>Bootstrap</h3>
            <p>
              Fast responsive UI using Bootstrap components.
            </p>
          </div>

          <div className="skill-card">
            <i className="fab fa-python"></i>
            <h3>Python</h3>
            <p>
              Backend development, automation and scripting.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}