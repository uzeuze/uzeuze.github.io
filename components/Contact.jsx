import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="Contact container">
      <h1>Contact</h1>
        <Form action="https://formspree.io/egemencanuze@gmail.com" method="POST">
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" name="email" placeholder="Your email"/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <FormControl componentClass="textarea" name="message" placeholder="Your message" />
          </FormGroup>
          <Button bsStyle="primary" type="submit" value="send">
            Submit
          </Button>
        </Form>
    </div>
  );
}
