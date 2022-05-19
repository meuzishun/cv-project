import React, { Component } from 'react';
import uniqid from 'uniqid';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: [],
    };

    this.addExperience = this.addExperience.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  addExperience() {
    this.setState({
      experience: this.state.experience.concat({
        companyName: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        key: uniqid(),
        edit: true,
      }),
    });
  }

  handleSubmission(e) {
    e.preventDefault();
    const form = e.target;
    this.setState({
      experience: this.state.experience.map((company) => {
        if (company.key === form.id) {
          company.companyName = form[0].value;
          company.positionTitle = form[1].value;
          company.startDate = form[2].value;
          company.endDate = form[3].value;
          company.edit = false;
        }
        return company;
      }),
    });
  }

  handleEdit(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    this.setState({
      experience: this.state.experience.map((company) => {
        if (company.key === id) {
          company.edit = true;
        }
        return company;
      }),
    });
  }

  handleRemove(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    this.setState({
      experience: this.state.experience.filter((company) => company.key !== id),
    });
  }

  render() {
    return (
      <div className='component-container experience-container'>
        <div className='top-row'>
          <h2>Practical Experience</h2>
          <button className='addBtn' onClick={this.addExperience}>
            Add
          </button>
        </div>
        {this.state.experience.map((company) => {
          return company.edit ? (
            <div className='company-container'>
              <h3>Enter information for practical experience</h3>
              <form
                key={company.key}
                id={company.key}
                onSubmit={this.handleSubmission}
              >
                <div className='form-input'>
                  <label>Company Name: </label>
                  <input defaultValue={company.companyName} required />
                </div>
                <div className='form-input'>
                  <label>Title of Position: </label>
                  <input defaultValue={company.positionTitle} required />
                </div>
                <div className='form-input'>
                  <label>Start Date: </label>
                  <input defaultValue={company.startDate} required />
                </div>
                <div className='form-input'>
                  <label>End Date: </label>
                  <input defaultValue={company.endDate} required />
                </div>
                <div className='button-container'>
                  <button className='submitBtn' type='submit'>
                    Submit
                  </button>
                  <button className='removeBtn' onClick={this.handleRemove}>
                    Remove
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div
              key={company.key}
              id={company.key}
              className='company-container'
            >
              <div className='top-row'>
                <h3>{company.companyName}</h3>
                <button className='editBtn' onClick={this.handleEdit}>
                  Edit
                </button>
              </div>
              <p>Title of Position: {company.positionTitle}</p>
              <p>Start Date: {company.startDate}</p>
              <p>End Date: {company.endDate}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PracticalExperience;