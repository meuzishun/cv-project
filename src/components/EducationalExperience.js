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

  render() {
    return (
      <div>
        <h2>Educational Experience</h2>
        {this.state.education.map((institute) => {
          return institute.edit ? (
            <form
              key={institute.key}
              id={institute.key}
              onSubmit={this.handleSubmission}
            >
              <label>School Name: </label>
              <input defaultValue={institute.schoolName} />
              <label>Title of Study: </label>
              <input defaultValue={institute.studyTitle} />
              <label>Graduation Data: </label>
              <input defaultValue={institute.graduationDate} />
              <button type='submit'>Submit</button>
            </form>
          ) : (
            <div key={institute.key} id={institute.key}>
              <p>School Name: {institute.schoolName}</p>
              <p>Title of Study: {institute.studyTitle}</p>
              <p>Graduation Data: {institute.graduationDate}</p>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          );
        })}
        <button onClick={this.addEducation}>Add</button>
      </div>
    );
  }
}

export default EducationalExperience;
