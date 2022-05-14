import React, { Component } from 'react';
import '../styles/GeneralInformation.css';

class GeneralInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className='info-header'>General Information</h2>
      </div>
    );
  }
}

export default GeneralInformation;
