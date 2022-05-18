import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [],
    };

    this.addEducation = this.addEducation.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  addEducation() {
    this.setState({
      education: this.state.education.concat({
        schoolName: '',
        studyTitle: '',
        graduationDate: '',
        key: uniqid(),
        edit: true,
      }),
    });
  }

  handleSubmission(e) {
    e.preventDefault();
    const form = e.target;
    this.setState({
      education: this.state.education.map((institute) => {
        if (institute.key === form.id) {
          institute.schoolName = form[0].value;
          institute.studyTitle = form[1].value;
          institute.graduationDate = form[2].value;
          institute.edit = false;
        }
        return institute;
      }),
    });
  }

  handleEdit(e) {
    e.preventDefault();
    const id = e.target.parentElement.id;
    this.setState({
      education: this.state.education.map((institute) => {
        if (institute.key === id) {
          institute.edit = true;
        }
        return institute;
      }),
    });
  }

  handleRemove(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    this.setState({
      education: this.state.education.filter(
        (institute) => institute.key !== id
      ),
    });
  }

  render() {
    return (
      <div className='component-container education-container'>
        <h2>Educational Experience</h2>
        {this.state.education.map((institute) => {
          return institute.edit ? (
            <div className='institution-container'>
              <h3>Enter information for an educational experience</h3>
              <form
                key={institute.key}
                id={institute.key}
                onSubmit={this.handleSubmission}
              >
                <div className='form-input'>
                  <label>School Name: </label>
                  <input defaultValue={institute.schoolName} />
                </div>
                <div className='form-input'>
                  <label>Title of Study: </label>
                  <input defaultValue={institute.studyTitle} />
                </div>
                <div className='form-input'>
                  <label>Graduation Date: </label>
                  <input defaultValue={institute.graduationDate} />
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
              key={institute.key}
              id={institute.key}
              className='institution-container'
            >
              <h3>{institute.schoolName}</h3>
              <p>Title of Study: {institute.studyTitle}</p>
              <p>Graduation Date: {institute.graduationDate}</p>
              <button className='editBtn' onClick={this.handleEdit}>
                Edit
              </button>
            </div>
          );
        })}
        <button className='addBtn' onClick={this.addEducation}>
          Add
        </button>
      </div>
    );
  }
}

export default EducationalExperience;
