import React, {Component} from 'react';
import marked from 'marked';

const content = "# BUILD A SIMPLE API THAT CONVERTS GIVEN NUMBER INTO A ROMAN NUMERAL\n\nWe will build a simple API that converts given number into a roman numeral with Express. After finishing this tutorial, you will be familiar with:\n\n* Take a request, parse it and respond with a JSON object and an HTTP status code.\n\n#### Reading Material\n\n* [Express Hello World Example](http://expressjs.com/en/starter/hello-world.html)\n\n## Create a new App\n\nCreate a new project folder:\n\n`mkdir api-roman-numeral-converter`\n\nCreate package.json file by running npm init -y\n\nInstall express locally\n\n`npm install express --save`\n\nCreate app.js file.\n\n```javascript\nconst express = require('express');\n\nlet app = express();\n\napp.get('/to-roman/:number', (req, res) => {\n  //parseInt function either returns a number or NaN\n  let number = parseInt(req.params.number),\n      keys = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},\n      roman = \"\";\n  //If given number is NaN respond with an error.\n  if (isNaN(number)) {\n    // HTTP status code 400 means that the request was malformed.\n    res.status(400).json({ error: \"Bad request\"});\n    //return to prevent sending respond twice\n    return;\n  }\n  number = (\"\" + number).split(\"\");\n  for(let j=0; j<number.length; j++){\n    number[j] = +number[j]*Math.pow(10,number.length-j-1);\n     for ( let i in keys ) {\n      while ( number[j] >= keys[i] ) {\n        roman += i;\n        number[j] -= keys[i];\n      }\n    }\n  }\n  res.json({result: roman});\n});\n\n//If client requests an invalid URI, application will return an HTTP 404 “Not Found” error\napp.use((req,res) => {\n  res.status(404);\n  res.json({ message: \"404 Not Found\", status_code: 404 });\n});\n\napp.listen(3000, () => {\n  console.log(\"App is running on port 3000\");\n});\n```\n\nAdd start script to package.json file.\n\n```\n\"scripts\": {\n  \"start\": \"node app\"\n},\n```\n\nAdd .gitignore file:\n\n```\nnode_modules\n.DS_Store\nnpm-debug.log\n```\n\nRun `npm start` and visit http://localhost:3000/\n";

export default class RomanConverterAPI extends Component {
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

RomanConverterAPI.defaultProps = {
  content: content
};
