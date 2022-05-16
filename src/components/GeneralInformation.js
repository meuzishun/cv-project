import React, { Component } from 'react';
import '../styles/GeneralInformation.css';

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      phone: '',
      email: '',
      edit: true,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleEdit() {
    console.log(this.state);
    this.setState({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      edit: true,
    });
    console.log(this.state);
  }

  handleSubmission(e) {
    e.preventDefault();
    const form = e.target;
    this.setState({
      name: form[0].value,
      address: form[1].value,
      phone: form[2].value,
      email: form[3].value,
      edit: false,
    });
  }

  render() {
    return (
      <div>
        <h2 className='info-header'>General Information</h2>
        {this.state.edit ? (
          <form onSubmit={this.handleSubmission}>
            <label>Name: </label>
            <input defaultValue={this.state.name} />
            <label>Address: </label>
            <input defaultValue={this.state.address} />
            <label>phone: </label>
            <input defaultValue={this.state.phone} />
            <label>email: </label>
            <input defaultValue={this.state.email} />
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <div>
            <p>Name: {this.state.name}</p>
            <p>Address: {this.state.address}</p>
            <p>Phone: {this.state.phone}</p>
            <p>Email: {this.state.email}</p>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInformation;
