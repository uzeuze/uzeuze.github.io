import React, {Component} from 'react';
import marked from 'marked';

const content = "# Create a Hangman Game using React, Babel and Webpack\n\n[See live demo on Codepen](http://codepen.io/uzeuze/full/GNgpPj/)\n\nThis is a step-by-step tutorial that teaches you how to build your own hangman game with React, Babel and Webpack. After completing this tutorial you will get basic understanding of:\n\n* How to use next versions of JavaScript (ES6 / ES2015, ES7 / ES2016, etc.), JavaScript syntax extensions, such as React's JSX in your projects with Babel.\n* How to get things done with Webpack (Javascript Bundler).\n\n#### Reading Material\n\n* [How to guide for Webpack](https://github.com/petehunt/webpack-howto)\n* [Webpack for React](http://www.pro-react.com/materials/appendixA/)\n\n## Create a new App\n\nCreate a new project folder:\n\n`mkdir hangman_game`\n\nTo create a package.json file with defaults, run the following command on the terminal:\n\n`npm init -y`\n\nInstall project dependencies locally with:\n\n`npm install --save react react-dom jquery react-bootstrap`\n\nInstall dev dependencies locally with:\n\n`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server style-loader css-loader`\n\nCreate public folder.\nAdd index.html to public folder. Add Bootstrap CDN to include Bootstrap's CSS styles.\nThe index.html will contain a pretty basic HTML page, whose only purpose is to load the bundled JavaScript file:\n\n```\n<!DOCTYPE html>\n<html lang=\"en\">\n <head>\n   <meta charset=\"utf-8\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css\">\n   <title>Hangman Game</title>\n </head>\n <body>\n   <div id=\"root\"></div>\n   <script type=\"text/javascript\" src=\"bundle.js\"></script>\n </body>\n</html>\n```\n\nCreate src folder.\nCreate index.js file in src folder. The index.html file will insert the HTML element returned by the App module in the page.\n\n```javascript\nimport React, {Component} from 'react';\nimport {render} from 'react-dom';\nimport App from './components/App';\nimport './styles/index.css';\n\nrender(\n  <App />,\n  document.getElementById('root')\n);\n```\n\nCreate components folder.\n\n#### App Component\n\nAdd App.js file in components folder:\n\n```javascript\nimport React, {Component} from 'react';\nimport WordToGuess from './WordToGuess';\nimport NewGameButton from './NewGameButton';\nimport GuessForm from './GuessForm';\nimport HangmanCanvas from './HangmanCanvas';\nimport {Grid, Row, Col} from 'react-bootstrap';\nimport $ from 'jquery';\nimport '../styles/App.css';\n\nclass App extends Component {\n  constructor() {\n    super();\n    this.state = {\n      word: \"\",\n      guesses: [],\n      gameStatus: \"\",\n      wrongGuesses: [],\n      isLoading: false\n    }\n    this.newGame = this.newGame.bind(this);\n  }\n  componentDidMount() {\n    this.getNewWord();\n  }\n\n  newGame() {\n    this.getNewWord();\n    this.setState({\n      guesses: [],\n      gameStatus: \"\",\n      wrongGuesses: []\n    });\n  }\n\n  getNewWord() {\n    this.setState({isLoading: true });\n    $.ajax({\n        type: \"GET\",\n        url: \"http://randomword.setgetgo.com/get.php\",\n        dataType: \"jsonp\",\n        success: function(data){\n          this.setState({\n            word: data.Word.toLowerCase(),\n            isLoading: false\n          });\n        }.bind(this)\n    });\n  }\n\n  handleGuess(input) {\n    let NewGuesses = this.state.guesses;\n    let word = this.state.word;\n    let wrongGuesses = [];\n\n    input.split(\"\").forEach((guess) => {\n      guess = guess.toLowerCase();\n      if(guess !== \" \" && NewGuesses.indexOf(guess) === -1) {\n        NewGuesses.push(guess);\n      }\n    });\n\n    NewGuesses.forEach((letter) => {\n      if(word.indexOf(letter) === -1) {\n        wrongGuesses.push(letter);\n      }\n    });\n\n    this.checkWinOrLose();\n    this.setState({\n      guesses: NewGuesses,\n      wrongGuesses: wrongGuesses\n    });\n  }\n\n  checkWinOrLose() {\n    let guesses = this.state.guesses;\n    let correctGuesses = 0,\n        wrongGuesses = 0;\n    let word = this.state.word;\n\n    guesses.forEach((letter) => {\n      if(word.indexOf(letter) === -1) {\n        wrongGuesses += 1;\n      }\n    });\n\n    if(wrongGuesses >= 6) {\n      this.setState({ gameStatus: \"GAME OVER\"});\n    }\n\n    word.split(\"\").forEach((letter) => {\n      if(guesses.indexOf(letter) !== -1) {\n        correctGuesses += 1;\n      }\n    });\n\n    if(word.length === correctGuesses) {\n      this.setState({ gameStatus: \"YOU WIN!\"});\n    }\n  }\n\n  render() {\n    let gameBox,\n        wrongGuesses;\n    let wrongArr = this.state.wrongGuesses.slice();\n\n    if(this.state.isLoading) {\n      gameBox = (\n        <h3>Loading...</h3>\n      );\n    } else if(this.state.gameStatus) {\n      gameBox = <h3>{this.state.gameStatus}</h3>;\n    } else {\n      gameBox = (\n        <GuessForm handleGuess={this.handleGuess.bind(this)}/>\n      );\n    }\n\n    wrongGuesses = wrongArr.map((letter, i) => {\n      return <span className=\"wrong-guessed-letter\" key={i}>{letter}</span>\n    });\n\n    return (\n      <div className=\"App text-center\">\n        <h1>Hangman Game</h1>\n        <WordToGuess word={this.state.word} guesses={this.state.guesses}/>\n        <Grid>\n          <Row>\n            <Col sm={6} smPush={6}>\n              {gameBox}\n              {\n                this.state.wrongGuesses.length > 0\n                  ? <p className=\"App__wrong-guesses\">Wrong Guesses: {wrongGuesses}</p>\n                  :\n                  \"\"\n              }\n            </Col>\n            <Col sm={6} smPull={6}>\n              <HangmanCanvas wrongCount={this.state.wrongGuesses ? this.state.wrongGuesses.length : 0}/>\n            </Col>\n          </Row>\n        </Grid>\n        <NewGameButton newGame={this.newGame}/>\n      </div>\n    );\n  }\n}\n\nexport default App;\n```\n\n#### WordToGuess Component\n\nsrc/components/WordToGuess.js\n\n```javascript\nimport React, {Component} from 'react';\nimport Dash from './Dash';\n\nexport default class WordToGuess extends Component {\n  getDisplay() {\n    let word = this.props.word;\n    let display = word.split(\"\").map((letter, index) => {\n      if (this.props.guesses.indexOf(letter) !== -1) {\n        return <Dash key={index} display={letter}/>\n      } else {\n        return <Dash key={index}/>\n      }\n    });\n    return display;\n  }\n  render() {\n    let display = this.getDisplay();\n    return (\n      <div className=\"WordToGuess\">\n        {display}\n      </div>\n    );\n  }\n}\n```\n#### GuessForm Component\n\nsrc/components/GuessForm.js\n\n```javascript\nimport React, {Component} from 'react';\nimport {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';\nimport '../styles/GuessForm.css';\n\nexport default class GuessForm extends Component {\n  constructor() {\n      super();\n      this.state = {\n        textValue: \"\"\n      }\n      this.handleSubmit = this.handleSubmit.bind(this);\n      this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({ textValue: event.target.value });\n  }\n\n  handleSubmit(event) {\n    event.preventDefault();\n    this.props.handleGuess(this.state.textValue);\n    this.setState({textValue: \"\"});\n  }\n\n  render() {\n    return (\n      <form className=\"GuessForm\" onSubmit={this.handleSubmit} >\n        <FormGroup>\n          <InputGroup className=\"GuessForm__input\">\n            <FormControl\n              type=\"text\"\n              value={this.state.textValue}\n              onChange={this.handleChange}\n              autoFocus={true}\n            />\n            <InputGroup.Addon\n              className=\"GuessForm__button\"\n              onClick={this.handleSubmit}\n            >\n              Guess\n            </InputGroup.Addon>\n          </InputGroup>\n        </FormGroup>\n      </form>\n    );\n  }\n}\n```\n\n#### Dash Component\n\nsrc/components/Dash.js\n\n```javascript\nimport React, {Component} from 'react';\nimport '../styles/Dash.css';\n\nexport default function Dash(props) {\n  return (\n    <span className=\"Dash\">\n      {\n        props.display\n        ? `  ${props.display}  `\n        : \"  _  \"\n      }\n    </span>\n  );\n}\n```\n#### HangmanCanvas Component\n\nsrc/components/HangmanCanvas.js\n\n```javascript\nimport React, {Component} from 'react';\n\nexport default class HangmanCanvas extends Component {\n\n  componentDidMount() {\n      this.updateCanvas(this.props.wrongCount);\n  }\n\n  componentWillReceiveProps(newProps) {\n      this.updateCanvas(newProps.wrongCount);\n  }\n\n  updateCanvas(badGuesses) {\n    let canvas = this.refs.canvas;\n    canvas.width = canvas.width;\n    let c = canvas.getContext('2d');\n    c.lineWidth = 10;\n    c.strokeStyle = '#F2D95E';\n    c.font = 'bold 24px Optimer, Arial, Helvetica, sans-serif';\n    c.fillStyle = 'red';\n    drawLine(c, [20,190], [180,190]);\n    drawLine(c, [30,185], [30,10]);\n    c.lineTo(147,10);\n    c.stroke();\n    c.lineWidth = 3;\n    drawLine(c, [145,15], [145,30]);\n    if (badGuesses > 0) {\n        // draw head\n        c.strokeStyle = '#6F6E72';\n        c.beginPath();\n        c.moveTo(160, 45);\n        c.arc(145, 45, 15, 0, (Math.PI/180)*360);\n        c.stroke();\n\n        if (badGuesses > 1) {\n            // draw body\n            drawLine(c, [145,60], [145,130]);\n        }\n        if (badGuesses > 2) {\n            // draw left arm\n            drawLine(c, [145,80], [110,90]);\n        }\n        if (badGuesses > 3) {\n            // draw right arm\n            drawLine(c, [145,80], [180,90]);\n        }\n        if (badGuesses > 4) {\n            // draw left leg\n            drawLine(c, [145,130], [130,170]);\n        }\n        if (badGuesses > 5) {\n            // draw right leg and end game\n            drawLine(c, [145,130], [160,170]);\n            c.fillText('Game over', 45, 110);\n        }\n    }\n\n    function drawLine(context, from, to) {\n      context.beginPath();\n      context.moveTo(from[0], from[1]);\n      context.lineTo(to[0], to[1]);\n      context.stroke();\n    }\n  }\n\n  render() {\n      return (\n          <canvas ref=\"canvas\" width={200} height={200}/>\n      );\n  }\n}\n```\n\n#### NewGameButton Component\n\nsrc/components/NewGameButton.js\n\n```javascript\nimport React, {Component} from 'react';\nimport {Button} from 'react-bootstrap';\n\nexport default function NewGameButton(props) {\n  return (\n    <Button\n      className=\"NewGameButton\"\n      onClick={props.newGame}\n    >\n      New Game\n    </Button>\n  );\n}\n```\n\n## Add Styles\n\nsrc/styles/index.css\n```\nbody {\n  background-color: #87D1D4;\n}\n\n.WordToGuess {\n  margin-bottom: 40px;\n}\n\n.NewGameButton,\n.NewGameButton:hover,\n.NewGameButton:active:focus,\n.NewGameButton:focus {\n   background-color: #FF5722;\n   color: #fff;\n   border: none;\n   border-radius: 0;\n}\n\n.wrong-guessed-letter {\n  margin: 5px;\n  color: red;\n}\n```\n\nsrc/styles/App.css\n```\n.App__wrong-guesses {\n  font-size: 18px;\n}\n```\nsrc/styles/Dash.css\n```\n.Dash {\n  font-size: 50px;\n}\n\n@media (max-width: 768px) {\n  .Dash {\n    font-size: 20px;\n  }\n}\n```\n\nsrc/styles/GuessForm.css\n```\n.GuessForm {\n  width: 120px;\n  margin: 0 auto;\n}\n\n.GuessForm__input {\n  width: 120px;\n}\n\n.GuessForm__button {\n  background-color: #00897b;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n}\n```\n\n## Webpack Configuration\n\nCreate webpack.config.js file in root directory:\n\n```\nmodule.exports = {\n  entry: [\n    './src/index.js'\n  ],\n  output: {\n    path: __dirname + \"/public\",\n    filename: \"bundle.js\"\n  },\n  module: {\n    loaders: [\n      { test: /\.jsx?$/,\n        exclude: /node_modules/,\n        loader: 'babel',\n        query: {\n          presets: ['es2015', 'react']\n        }\n      },\n      { test: /\.css$/, loader: \"style!css!\" }\n    ]\n  },\n  devServer: {\n    contentBase: \"./public\",\n    colors: true,\n    historyApiFallback: true,\n    inline: true\n  }\n};\n```\n\n* Add start script to package.json file.\n```\n\"scripts\": {\n  \"start\": \"node_modules/.bin/webpack-dev-server --progress\"\n},\n```\n\n* Add .gitignore file:\n```\nnode_modules\n.DS_Store\nnpm-debug.log\n```\n\n* Run `npm start` and visit http://localhost:8080/";

export default class HangmanGame extends Component {
  rawMarkup(){
    let rawMarkup = marked(this.props.content);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div>
        <span dangerouslySetInnerHTML= {this.rawMarkup()} />
      </div>
    );
  }
}

HangmanGame.defaultProps = {
  content: content
};