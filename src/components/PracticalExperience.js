import React, { useState } from 'react';
import uniqid from 'uniqid';
import { format } from 'date-fns';

function PracticalExperience() {
  const [experience, setExperience] = useState([]);

  function addExperience() {
    setExperience([
      ...experience,
      {
        companyName: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        key: uniqid(),
        edit: true,
      },
    ]);
  }

  function handleSubmission(e) {
    e.preventDefault();
    const form = e.target;
    setExperience(
      experience.map((company) => {
        if (company.key === form.id) {
          company.companyName = form[0].value;
          company.positionTitle = form[1].value;
          company.startDate = new Date(form[2].value);
          company.endDate = new Date(form[3].value);
          company.edit = false;
        }
        return company;
      })
    );
  }

  function handleEdit(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    setExperience(
      experience.map((company) => {
        if (company.key === id) {
          company.edit = true;
        }
        return company;
      })
    );
  }

  function handleRemove(e) {
    e.preventDefault();
    const id = e.target.parentElement.parentElement.id;
    setExperience(experience.filter((company) => company.key !== id));
  }

  return (
    <div className='component-container experience-container'>
      <div className='top-row'>
        <h2 className='experience-heading'>Practical Experience</h2>
        <button className='add-btn' onClick={addExperience}>
          Add
        </button>
      </div>
      {experience.map((company) => {
        return company.edit ? (
          <div className='company-container edit' key={company.key}>
            <h3>Enter information for practical experience</h3>
            <form id={company.key} onSubmit={handleSubmission}>
              <div className='form-input'>
                <label htmlFor='company-name'>Company Name: </label>
                <input
                  name='company-name'
                  id='company-name'
                  type='text'
                  defaultValue={company.companyName}
                  required
                />
              </div>
              <div className='form-input'>
                <label htmlFor='position-title'>Title of Position: </label>
                <input
                  name='position-title'
                  id='position-title'
                  type='text'
                  defaultValue={company.positionTitle}
                  required
                />
              </div>
              <div className='form-input'>
                <label htmlFor='start-date'>Start Date: </label>
                <input
                  name='start-date'
                  id='start-date'
                  type='date'
                  defaultValue={company.startDate}
                  required
                />
              </div>
              <div className='form-input'>
                <label htmlFor='end-date'>End Date: </label>
                <input
                  name='end-date'
                  id='end-date'
                  type='date'
                  defaultValue={company.endDate}
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
          <div key={company.key} id={company.key} className='company-container'>
            <div className='top-row'>
              <h3 className='company-name'>{company.companyName}</h3>
              <button className='edit-btn' onClick={handleEdit}>
                Edit
              </button>
            </div>
            <p>Title of Position: {company.positionTitle}</p>
            <p>Start Date: {format(company.startDate, 'MMM d yyyy')}</p>
            <p>End Date: {format(company.endDate, 'MMM d yyyy')}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PracticalExperience;
