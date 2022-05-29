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
            <label htmlFor='general-name'>Name: </label>
            <input
              name='general-name'
              id='general-name'
              type='text'
              defaultValue={this.state.name}
              required
            />
          </div>
          <div className='form-input'>
            <label htmlFor='general-address'>Address: </label>
            <input
              name='general-address'
              id='general-address'
              type='text'
              defaultValue={this.state.address}
              required
            />
          </div>
          <div className='form-input'>
            <label htmlFor='general-phone'>Phone: </label>
            <input
              name='general-phone'
              id='general-phone'
              type='text'
              defaultValue={this.state.phone}
              required
              pattern='^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$'
            />
          </div>
          <div className='form-input'>
            <label htmlFor='general-email'>Email: </label>
            <input
              name='general-email'
              id='general-email'
              type='email'
              defaultValue={this.state.email}
              required
            />
          </div>
          <button className='submit-btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div className='component-container general-container'>
        <div className='top-row'>
          <h2 className='applicant-name'>{this.state.name}</h2>
          <button className='edit-btn' onClick={this.handleEdit}>
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
