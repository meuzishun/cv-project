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
    const id = e.target.parentElement.parentElement.id;
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
        <div className='top-row'>
          <h2>Educational Experience</h2>
          <button className='addBtn' onClick={this.addEducation}>
            Add
          </button>
        </div>
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
                  <label htmlFor='school-name'>School Name: </label>
                  <input
                    name='school-name'
                    id='school-name'
                    type='text'
                    defaultValue={institute.schoolName}
                    required
                  />
                </div>
                <div className='form-input'>
                  <label htmlFor='study-title'>Title of Study: </label>
                  <input
                    name='study-title'
                    id='study-title'
                    type='text'
                    defaultValue={institute.studyTitle}
                    required
                  />
                </div>
                <div className='form-input'>
                  <label htmlFor='graduation-date'>Graduation Date: </label>
                  <input
                    name='graduation-date'
                    id='graduation-date'
                    type='date'
                    defaultValue={institute.graduationDate}
                    required
                  />
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
              <div className='top-row'>
                <h3>{institute.schoolName}</h3>
                <button className='editBtn' onClick={this.handleEdit}>
                  Edit
                </button>
              </div>
              <p>Title of Study: {institute.studyTitle}</p>
              <p>Graduation Date: {institute.graduationDate}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationalExperience;
