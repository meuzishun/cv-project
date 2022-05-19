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
    this.setState({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      edit: true,
    });
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
    return this.state.edit ? (
      <div className='component-container general-container'>
        <h2 className='general-header'>General Information</h2>
        <form onSubmit={this.handleSubmission}>
          <div className='form-input'>
            <label>Name: </label>
            <input type='text' defaultValue={this.state.name} required />
          </div>
          <div className='form-input'>
            <label>Address: </label>
            <input type='text' defaultValue={this.state.address} required />
          </div>
          <div className='form-input'>
            <label>Phone: </label>
            <input type='text' defaultValue={this.state.phone} required />
          </div>
          <div className='form-input'>
            <label>Email: </label>
            <input type='email' defaultValue={this.state.email} required />
          </div>
          <button className='submitBtn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div className='component-container general-container'>
        <div className='top-row'>
          <h2>{this.state.name}</h2>
          <button className='editBtn' onClick={this.handleEdit}>
            Edit
          </button>
        </div>
        <p>{this.state.address}</p>
        <p>{this.state.phone}</p>
        <p>{this.state.email}</p>
      </div>
    );
  }
}

export default GeneralInformation;
