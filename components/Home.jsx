import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import projectsData from './projects_data';
import { Link } from 'react-router';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showProjects: false,
    };
  }
  renderProject(project) {
    return (
      <Col md={6} key={project.url}>
        <a className="Link__project" href={project.url} target="_blank">
          <div className="Project__item" id={project['image-name']}>
            <div className="Project__item_overlay">
              <div className="Project__item_link_icon">
                <Glyphicon glyph="link" className="Project__item_glyph" />
              </div>
            </div>
          </div>
        </a>
        <h4 className="Project__item_title">{project.title}</h4>
      </Col>
    );
  }

  render() {
    let projects;
    if (this.state.showProjects) {
      projects = projectsData;
    } else {
      projects = projectsData.slice(0,4);
    }
    return (
      <div className="Home">
        <section className="Home__hero">
          <div className="Home__hero_content container">
            <h1 className="Home__hero_title">WEB & MOBILE DEVELOPMENT</h1>
            <p className="Home__hero_subtitle">
              Hello! I'm Egemen Can Uze. I design and develop web and mobile applications.
            </p>
          </div>
        </section>
        <section className="Home__projects text-center">
          <h2>PROJECTS</h2>
          <Grid>
            <Row>
              { projects.map((project) => this.renderProject(project))}
            </Row>
          </Grid>
          <button
            className="btn btn-projects"
            onClick={() => this.setState({ showProjects: !this.state.showProjects })}
          >
            { this.state.showProjects ? 'SHOW LESS' : 'ALL PROJECTS' }
          </button>
        </section>
        <footer className="Home__footer text-center">
          <h2 className="Home__footer_title">GET IN TOUCH</h2>
          <p className="Home__footer_subtitle">If you want to work with me on one of your digital projects, get in touch with me through the button below.</p>
          <Link to="/contact" className="btn Home_footer_button">CONTACT ME</Link>
        </footer>
      </div>
    );
  }
}

export default Home;
