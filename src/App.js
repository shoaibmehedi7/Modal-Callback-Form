import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Modal,Button} from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Request Callback
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              <h1>Request</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="container">
  <h2>Request Callback</h2>
  <form class="form-horizontal" action="/action_page.php">
    <div class="form-group">
      <label class="control-label col-sm-2" for="name">Name:</label>
      <div class="col-sm-2">
        <input type="email" class="form-control" id="name" placeholder="Name" name="Name"/>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="phone">Phone:</label>
      <div class="col-sm-2">          
        <input type="password" class="form-control" id="phone" placeholder="Enter Phone" name="phone"/>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </div>
  </form>
</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
    );
  }
}

export default App;
