import React, { useState } from 'react';
import uniqid from 'uniqid';
import { format } from 'date-fns';

// class EducationalExperience extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       education: [],
//     };

//     this.addEducation = this.addEducation.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleSubmission = this.handleSubmission.bind(this);
//     this.handleRemove = this.handleRemove.bind(this);
//   }

//   addEducation() {
//     this.setState({
//       education: this.state.education.concat({
//         schoolName: '',
//         studyTitle: '',
//         graduationDate: '',
//         key: uniqid(),
//         edit: true,
//       }),
//     });
//   }

//   handleSubmission(e) {
//     e.preventDefault();
//     const form = e.target;
//     this.setState({
//       education: this.state.education.map((institute) => {
//         if (institute.key === form.id) {
//           institute.schoolName = form[0].value;
//           institute.studyTitle = form[1].value;
//           institute.graduationDate = new Date(form[2].value);
//           institute.edit = false;
//         }
//         return institute;
//       }),
//     });
//   }

//   handleEdit(e) {
//     e.preventDefault();
//     const id = e.target.parentElement.parentElement.id;
//     this.setState({
//       education: this.state.education.map((institute) => {
//         if (institute.key === id) {
//           institute.edit = true;
//         }
//         return institute;
//       }),
//     });
//   }

//   handleRemove(e) {
//     e.preventDefault();
//     const id = e.target.parentElement.parentElement.id;
//     this.setState({
//       education: this.state.education.filter(
//         (institute) => institute.key !== id
//       ),
//     });
//   }

//   render() {
//     return (
//       <div className='component-container education-container'>
//         <div className='top-row'>
//           <h2 className='education-heading'>Educational Experience</h2>
//           <button className='add-btn' onClick={this.addEducation}>
//             Add
//           </button>
//         </div>
//         {this.state.education.map((institute) => {
//           return institute.edit ? (
//             <div className='institution-container edit' key={institute.key}>
//               <h3>Enter information for an educational experience</h3>
//               <form id={institute.key} onSubmit={this.handleSubmission}>
//                 <div className='form-input'>
//                   <label htmlFor='school-name'>School Name: </label>
//                   <input
//                     name='school-name'
//                     id='school-name'
//                     type='text'
//                     defaultValue={institute.schoolName}
//                     required
//                   />
//                 </div>
//                 <div className='form-input'>
//                   <label htmlFor='study-title'>Title of Study: </label>
//                   <input
//                     name='study-title'
//                     id='study-title'
//                     type='text'
//                     defaultValue={institute.studyTitle}
//                     required
//                   />
//                 </div>
//                 <div className='form-input'>
//                   <label htmlFor='graduation-date'>Graduation Date: </label>
//                   <input
//                     name='graduation-date'
//                     id='graduation-date'
//                     type='date'
//                     defaultValue={institute.graduationDate}
//                     required
//                   />
//                 </div>
//                 <div className='button-container'>
//                   <button className='submit-btn' type='submit'>
//                     Submit
//                   </button>
//                   <button className='remove-btn' onClick={this.handleRemove}>
//                     Remove
//                   </button>
//                 </div>
//               </form>
//             </div>
//           ) : (
//             <div
//               key={institute.key}
//               id={institute.key}
//               className='institution-container'
//             >
//               <div className='top-row'>
//                 <h3 className='institution-name'>{institute.schoolName}</h3>
//                 <button className='edit-btn' onClick={this.handleEdit}>
//                   Edit
//                 </button>
//               </div>
//               <p>Title of Study: {institute.studyTitle}</p>
//               <p>
//                 Graduation Date: {format(institute.graduationDate, 'MMM yyyy')}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

function EducationalExperience() {
  const [education, setEducation] = useState([]);

  function addEducation() {
    setEducation([
      ...education,
      {
        schoolName: '',
        studyTitle: '',
        graduationDate: '',
        key: uniqid(),
        edit: true,
      },
    ]);
  }

  function handleSubmission(e) {
    e.preventDefault();
    const form = e.target;
    setEducation(
      education.map((institute) => {
        if (institute.key === form.id) {
          institute.schoolName = form[0].value;
          institute.studyTitle = form[1].value;
          institute.graduationDate = new Date(form[2].value);
          institute.edit = false;
        }
        return institute;
      })
    );
  }

  function handleEdit(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    setEducation(
      education.map((institute) => {
        if (institute.key === id) {
          institute.edit = true;
        }
        return institute;
      })
    );
  }

  function handleRemove(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    setEducation(education.filter((institute) => institute.key !== id));
  }

  return (
    <div className='component-container education-container'>
      <div className='top-row'>
        <h2 className='education-heading'>Educational Experience</h2>
        <button className='add-btn' onClick={addEducation}>
          Add
        </button>
      </div>
      {education.map((institute) => {
        return institute.edit ? (
          <div className='institution-container edit' key={institute.key}>
            <h3>Enter information for an educational experience</h3>
            <form id={institute.key} onSubmit={handleSubmission}>
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
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
                <button className='remove-btn' onClick={handleRemove}>
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
              <h3 className='institution-name'>{institute.schoolName}</h3>
              <button className='edit-btn' onClick={handleEdit}>
                Edit
              </button>
            </div>
            <p>Title of Study: {institute.studyTitle}</p>
            <p>
              Graduation Date: {format(institute.graduationDate, 'MMM yyyy')}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationalExperience;
