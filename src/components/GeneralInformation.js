import React, { useState } from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    edit: true,
  });

  function handleEdit() {
    setGeneralInfo({
      name: generalInfo.name,
      address: generalInfo.address,
      phone: generalInfo.phone,
      email: generalInfo.email,
      edit: true,
    });
  }

  function handleSubmission(e) {
    e.preventDefault();
    const form = e.target;
    setGeneralInfo({
      name: form[0].value,
      address: form[1].value,
      phone: form[2].value,
      email: form[3].value,
      edit: false,
    });
  }

  return generalInfo.edit ? (
    <div className='component-container general-container'>
      <h2 className='general-header'>General Information</h2>
      <form onSubmit={handleSubmission}>
        <div className='form-input'>
          <label htmlFor='general-name'>Name: </label>
          <input
            name='general-name'
            id='general-name'
            type='text'
            defaultValue={generalInfo.name}
            required
          />
        </div>
        <div className='form-input'>
          <label htmlFor='general-address'>Address: </label>
          <input
            name='general-address'
            id='general-address'
            type='text'
            defaultValue={generalInfo.address}
            required
          />
        </div>
        <div className='form-input'>
          <label htmlFor='general-phone'>Phone: </label>
          <input
            name='general-phone'
            id='general-phone'
            type='text'
            defaultValue={generalInfo.phone}
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
            defaultValue={generalInfo.email}
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
        <h2 className='applicant-name'>{generalInfo.name}</h2>
        <button className='edit-btn' onClick={handleEdit}>
          Edit
        </button>
      </div>
      <p>{generalInfo.address}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.email}</p>
    </div>
  );
}

export default GeneralInformation;
