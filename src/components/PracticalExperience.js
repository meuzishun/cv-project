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
    const id = e.target.parentElement.id;
    this.setState({
      experience: this.state.experience.map((company) => {
        if (company.key === id) {
          company.edit = true;
        }
        return company;
      }),
    });
  }

  render() {
    return (
      <div className='component-container'>
        <h2>Practical Experience</h2>
        {this.state.experience.map((company) => {
          return company.edit ? (
            <form
              key={company.key}
              id={company.key}
              onSubmit={this.handleSubmission}
            >
              <div>
                <label>Company Name: </label>
                <input defaultValue={company.companyName} />
              </div>
              <div>
                <label>Title of Position: </label>
                <input defaultValue={company.positionTitle} />
              </div>
              <div>
                <label>Start Date: </label>
                <input defaultValue={company.startDate} />
              </div>
              <div>
                <label>End Date: </label>
                <input defaultValue={company.endDate} />
              </div>
              <button className='submitBtn' type='submit'>
                Submit
              </button>
            </form>
          ) : (
            <div key={company.key} id={company.key}>
              <p>School Name: {company.companyName}</p>
              <p>Title of Position: {company.positionTitle}</p>
              <p>Start Date: {company.startDate}</p>
              <p>End Date: {company.endDate}</p>
              <button className='editBtn' onClick={this.handleEdit}>
                Edit
              </button>
            </div>
          );
        })}
        <button className='addBtn' onClick={this.addExperience}>
          Add
        </button>
      </div>
    );
  }
}

export default PracticalExperience;
