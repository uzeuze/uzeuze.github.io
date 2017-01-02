import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function Home() {
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
            <Col md={6}>
              <a href="http://www.papirusapp.com/" target="_blank">
                <div className="Project__item" id="papirus">
                  papirus
                </div>
              </a>
              <h4 className="Project__item_title">Papirus</h4>
            </Col>
            <Col md={6}>
              <a href="http://polls-uzeuze.herokuapp.com/" target="_blank">
                <div className="Project__item" id="voting-app">
                  Voting
                </div>
              </a>
              <h4 className="Project__item_title">Voting App</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="http://www.uz-energy.com/" target="_blank">
                <div className="Project__item" id="uzenerji">
                  uzenerji
                </div>
              </a>
              <h4 className="Project__item_title">Uzenerji</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/XKXKzY/" target="_blank">
                <div className="Project__item" id="rembrandt-tribute">
                  rembrandt tribute
                </div>
              </a>
              <h4 className="Project__item_title">Rembrandt Tribute Page</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/GNgpPj/" target="_blank">
                <div className="Project__item" id="hangman">
                  hangman
                </div>
              </a>
              <h4 className="Project__item_title">hangman</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/xRbmWw/" target="_blank">
                <div className="Project__item" id="library">
                  library
                </div>
              </a>
              <h4 className="Project__item_title">library</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="https://codepen.io/uzeuze/full/aNedqR/" target="_blank">
                <div className="Project__item" id="calculator">
                  calculator
                </div>
              </a>
              <h4 className="Project__item_title">calculator</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/dMxaPb/" target="_blank">
                <div className="Project__item" id="pomodoro">
                  pomodoro
                </div>
              </a>
              <h4 className="Project__item_title">pomodoro</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/dOyGYN/" target="_blank">
                <div className="Project__item" id="todo">
                  todo
                </div>
              </a>
              <h4 className="Project__item_title">todo</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/BzjVaP/" target="_blank">
                <div className="Project__item" id="quote-generator">
                  quote generator
                </div>
              </a>
              <h4 className="Project__item_title">quote generator</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/BzNWYG/" target="_blank">
                <div className="Project__item" id="markdown-previewer">
                  markdown-previewer
                </div>
              </a>
              <h4 className="Project__item_title">markdown-previewer</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/BzowMy/" target="_blank">
                <div className="Project__item" id="camper-leaderboard">
                  camper-leaderboard
                </div>
              </a>
              <h4 className="Project__item_title">camper-leaderboard</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/ONdWzm/" target="_blank">
                <div className="Project__item" id="weather-api">
                  weather-api
                </div>
              </a>
              <h4 className="Project__item_title">weather-api</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/RaOKEP/" target="_blank">
                <div className="Project__item" id="wikipedia-viewer">
                  wikipedia-viewer
                </div>
              </a>
              <h4 className="Project__item_title">wikipedia-viewer</h4>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/BzBYNL/" target="_blank">
                <div className="Project__item" id="simon-game">
                  simon-game
                </div>
              </a>
              <h4 className="Project__item_title">simon-game</h4>
            </Col>
            <Col md={6}>
              <a href="http://codepen.io/uzeuze/full/rLxxGE/" target="_blank">
                <div className="Project__item" id="recipe-box">
                  recipe-box
                </div>
              </a>
              <h4 className="Project__item_title">recipe-box</h4>
            </Col>
          </Row>
        </Grid>
      </section>
      <h3>My Works</h3>
      <ul>
        <li><a href="http://www.papirusapp.com/" target="_blank">Papirus App</a></li>
        <li><a href="http://www.uz-energy.com/" target="_blank">Uz-Enerji</a></li>
      </ul>
      <h4>Freecodecamp API Projects</h4>
      <ul>
        <li><a href="http://url-shortener-uze.herokuapp.com/" target="_blank">URL Shortener Microservice</a></li>
        <li><a href="https://header-parser-api-uze.herokuapp.com/api/whoami" target="_blank">Request Header Parser Microservice</a></li>
        <li><a href="https://timestamp-api-uze.herokuapp.com/" target="_blank">Timestamp Microservice</a></li>
      </ul>
      <h4>Codepen Projects</h4>
      <ul>
        <li><a href="http://codepen.io/uzeuze/full/GNgpPj/" target="_blank">Hangman Game</a></li>
        <li><a href="http://codepen.io/uzeuze/full/xRbmWw/" target="_blank">Library App</a></li>
        <li><a href="http://codepen.io/uzeuze/full/dOyGYN/" target="_blank">To Do App</a></li>
        <li><a href="http://codepen.io/uzeuze/full/XKXKzY/" target="_blank">Rembrandt Tribute Page</a></li>
        <li><a href="http://codepen.io/uzeuze/full/BzNWYG/" target="_blank">Markdown Previewer</a></li>
        <li><a href="http://codepen.io/uzeuze/full/BzowMy/" target="_blank">Camper Leaderboard</a></li>
        <li><a href="http://codepen.io/uzeuze/full/rLxxGE/" target="_blank">Recipe Box</a></li>
        <li><a href="http://codepen.io/uzeuze/full/BzBYNL/" target="_blank">Simon Game</a></li>
        <li><a href="http://codepen.io/uzeuze/full/EyYyQg/" target="_blank">Tic Tac Toe Game</a></li>
        <li><a href="http://codepen.io/uzeuze/full/dMxaPb/" target="_blank">Pomodoro Clock</a></li>
        <li><a href="https://codepen.io/uzeuze/full/aNedqR/" target="_blank">JavaScript Calculator</a></li>
        <li><a href="http://codepen.io/uzeuze/full/RaOKEP/" target="_blank">Wikipedia Viewer</a></li>
        <li><a href="http://codepen.io/uzeuze/full/ONdWzm/" target="_blank">Local Weather App</a></li>
        <li><a href="http://codepen.io/uzeuze/full/BzjVaP/" target="_blank">Random Quote Machine</a></li>
      </ul>
    </div>
  );
}

export default Home;
