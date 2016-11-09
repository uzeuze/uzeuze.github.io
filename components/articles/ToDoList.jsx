import React, {Component} from 'react';
import marked from 'marked';

const content = "# Building a To Do List App with React\n\n[See live demo on Codepen](http://codepen.io/uzeuze/full/dOyGYN/)\n\nThis is a step-by-step tutorial that teaches you how to build to-do list app with React. After completing this tutorial you will get basic understanding of:\n\n* How to bootstrap a React project with `create-react-app` command-line utility,\n* React-Bootstrap which seems the most popular UI framework.\n\n#### Reading Material\n\n* [Tutorial: Intro To React](https://facebook.github.io/react/tutorial/tutorial.html)\n* [Create React App](https://github.com/facebookincubator/create-react-app)\n* [React Bootstrap](https://react-bootstrap.github.io/)\n* CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)\n\n## Create a new App\n\nInstall Create React App globally.\n\n`npm install -g create-react-app`\n\nUse Node >= 6 and npm >= 3 for faster installation speed and better disk usage. This tool doesn’t assume a Node backend. The Node installation is only required for the build tools that rely on it locally, such as Webpack and Babel.\n\nTo create a new app, run:\n\n```\ncreate-react-app todo_app\ncd todo_app\n```\n\nRun the app in development mode with 'npm start' command. Open http://localhost:3000 to view it in the browser.\n\nChange title tag to 'To-Do App' in public/index.html.\n\n## Adding Bootstrap\n\nReact Bootstrap is a popular library for integrating Bootstrap with React apps.\nInstall React Bootstrap and Bootstrap from NPM. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:\n\n```\nnpm install react-bootstrap --save\nnpm install bootstrap@3 --save\n```\n\nImport Bootstrap CSS and optionally Bootstrap theme CSS in the src/index.js file:\n\n```\nimport 'bootstrap/dist/css/bootstrap.css';\nimport 'bootstrap/dist/css/bootstrap-theme.css';\n```\n\n## Compose Components\n\n#### App Component\n\nUpdate src/App.js file with the following code:\n\n```javascript\nimport React, { Component } from 'react';\nimport Task from './Task.js';\nimport {Grid, Row, Col, Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap';\nimport './App.css';\n\n\nclass App extends Component {\n  constructor() {\n    super();\n    this.state = {\n      tasks: [\n        {_id: 1, text: 'Create a Github account', done: false},\n        {_id: 2,  text: 'Follow uzeuze on Github', done: false},\n        {_id: 3,  text: 'Create a Codepen account', done: false},\n        {_id: 4,  text: 'Finish all tutorials', done: false}\n      ],\n      textValue: '',\n      hideDone: false\n    }\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n    this.toggleHide = this.toggleHide.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({textValue: event.target.value});\n  }\n\n  handleSubmit(event) {\n    event.preventDefault();\n    if(this.state.textValue) {\n      let newTasks = this.state.tasks.slice();\n      let text = this.state.textValue;\n      let newId;\n      if (newTasks.length >= 1) {\n        newId = Math.max.apply(Math,newTasks.map(function(o){return o._id;})) + 1;\n      } else {\n        newId = 1;\n      }\n      newTasks.push({\n        text: text.trim(),\n        done: false,\n        _id: newId\n      });\n      this.setState({\n        tasks: newTasks,\n        textValue: ''\n      });\n    }\n  }\n\n  toggleDone(id) {\n    var newTasks = this.state.tasks.slice();\n    newTasks.map((task) => {\n      if(task._id === id) {\n          task.done = !task.done;\n      }\n      return task;\n    });\n    this.setState({tasks: newTasks});\n  }\n\n  deleteTask(id) {\n      let newTasks = this.state.tasks.slice();\n      for(let i=0; i < newTasks.length; i++){\n        if(newTasks[i]._id === id) {\n          newTasks.splice(i, 1);\n        }\n      }\n      this.setState({tasks: newTasks});\n  }\n\n  toggleHide() {\n    this.setState({hideDone: !this.state.hideDone});\n  }\n\n  getIncompleteCount() {\n    let tasks = this.state.tasks.slice();\n    tasks = tasks.filter((task) => {\n      return task.done === false;\n    });\n    return tasks.length;\n  }\n\n  render() {\n    let taskArray;\n    if (this.state.hideDone){\n      taskArray = this.state.tasks.slice();\n      taskArray = taskArray.filter((task) => {\n        return task.done === false;\n      });\n    } else {\n      taskArray = this.state.tasks;\n    }\n    let tasks = taskArray.map((task, index) => {\n      return (\n        <Task key={task._id}\n              task={task}\n              deleteTask={this.deleteTask.bind(this, task._id)}\n              toggleDone={this.toggleDone.bind(this, task._id)}\n        />\n      );\n    });\n    return (\n      <div className=\"App\">\n        <header className=\"App__header\">\n          <Grid fluid={true}>\n            <Row>\n              <Col sm={4}>\n                <h1 className=\"header-title\">To Do List ({this.getIncompleteCount()})</h1>\n              </Col>\n              <Col sm={8}>\n                <Button className=\"button-hide\" onClick={this.toggleHide}>\n                  {this.state.hideDone ?\n                    \"SHOW COMPLETED TASKS\"\n                    :\n                    \"HIDE COMPLETED TASKS\"\n                  }\n                </Button>\n              </Col>\n            </Row>\n          </Grid>\n        </header>\n\n        <form className=\"App__form\" onSubmit={this.handleSubmit} >\n          <FormGroup>\n            <InputGroup>\n              <FormControl type=\"text\"\n                           className=\"task-input\"\n                           placeholder=\"Type to add new tasks\"\n                           value={this.state.textValue}\n                           onChange={this.handleChange}\n              />\n              <InputGroup.Addon onClick={this.handleSubmit}>+</InputGroup.Addon>\n            </InputGroup>\n          </FormGroup>\n        </form>\n\n        <ul className=\"task-list\">\n          {tasks}\n        </ul>\n      </div>\n    );\n  }\n}\n\nexport default App;\n```\n\n#### Task Component\n\nCreate Task.js file in src folder and put below code inside it.\n\n```javascript\nimport React, {PropTypes} from 'react';\nimport {Button, Glyphicon} from 'react-bootstrap';\n\nexport default function Task(props) {\n  const taskClassName = props.task.done ? 'done Task' : 'Task';\n  return (\n    <li className={taskClassName}>\n      <input\n        className=\"checkbox-done\"\n        type=\"checkbox\"\n        checked={props.task.done}\n        onChange={props.toggleDone}\n      />\n      <span className=\"text\">{props.task.text}</span>\n      <Button className=\"delete\" onClick={props.deleteTask}>\n        <Glyphicon glyph=\"trash\" />\n      </Button>\n    </li>\n  );\n}\n\nTask.propTypes = {\n  task: PropTypes.object.isRequired,\n  toggleDone: PropTypes.func.isRequired,\n  deleteTask: PropTypes.func.isRequired\n};\n```\n\n## Add styles\n\nUpdate index.css file.\n\n```\nhtml, body {\n  height: 100%;\n  width: 100%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background: #E6EE9C; /* For browsers that do not support gradients */\n  background: -webkit-linear-gradient(left top, #66BB6A, #E6EE9C); /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(bottom right, #66BB6A, #E6EE9C); /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(bottom right, #66BB6A, #E6EE9C); /* For Firefox 3.6 to 15 */\n  background: linear-gradient(to bottom right, #66BB6A, #E6EE9C); /* Standard syntax */\n}\n```\n\nUpdate App.css file.\n\n```\n.App {\n  max-width: 400px;\n  margin: 10px auto;\n}\n\n.App__header {\n  background-color: #2E7D32;\n  color: #fff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.header-title {\n  font-size: 14px;\n  margin-top: 7px;\n  margin-bottom: 0;\n}\n\n.App__header .button-hide,\n.App__header .button-hide:focus,\n.App__header .button-hide:hover,\n.App__header .button-hide:active:focus {\n  font-size: 12px;\n  float: right;\n  background-color: #81C784;\n  background-image: none;\n  border: 0;\n  border-radius: 0;\n  color: #fff;\n  letter-spacing: 1px;\n}\n\n\n\n.App__form {\n  margin-top: 5px;\n}\n\n.App__form .form-group {\n  margin-bottom: 5px;\n}\n\n.App__form .task-input,\n.App__form .input-group-addon {\n  background-color: #43A047;\n  color: #fff;\n}\n\n.App__form .task-input {\n  border-right: 0;\n  border-top: 2px;\n  border-bottom: 2px;\n}\n\n.App__form .input-group-addon {\n  border: 0;\n  font-size: 22px;\n  padding: 4px 12px 8px 12px;\n  cursor: pointer;\n}\n\ninput[type=\"text\"].task-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #fff;\n}\ninput[type=\"text\"].task-input::-moz-placeholder { /* Firefox 19+ */\n  color: #fff;\n}\ninput[type=\"text\"].task-input:-ms-input-placeholder { /* IE 10+ */\n  color: #fff;\n}\ninput[type=\"text\"].task-input:-moz-placeholder { /* Firefox 18- */\n  color: #fff;\n}\n\n.task-list {\n  padding: 0;\n}\n\n@media (max-width: 768px) {\n  .header-title {\n    text-align: center;\n    margin-bottom: 10px\n  }\n  .row {\n    text-align: center;\n  }\n  .App__header .button-hide, .App__header .button-hide:focus, .App__header .button-hide:hover,.App__header .button-hide:active:focus  {\n    float: none;\n  }\n}\n```\n\nCreate Task.css file and import it to Task.js.\n\n`import './Task.css';`\n\nsrc/Task.css :\n```\n.Task {\n  list-style-type: none;\n  background-color: #f1f1f1;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.Task .checkbox-done {\n  margin-right: 10px;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n.Task .delete, .Task .delete:active:focus, .Task .delete:hover, .Task .delete:focus {\n  position: relative;\n  top: -8px;\n  background-image: none;\n  background-color: red;\n  color: #fff;\n  float: right;\n}\n```\n\nRun the app in development mode with `npm start` command.\nOpen [http://localhost:3000](http://localhost:3000) to view it in the browser.";

export default class ToDoList extends Component {
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

ToDoList.defaultProps = {
  content: content
};
