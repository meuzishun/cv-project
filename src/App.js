// import React, { Component } from 'react';
import React from 'react';
import Header from './components/Header';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
//TODO: Import styles here like below
import './styles/App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <div className='App'>
//         <Header />
//         <main className='main-container'>
//           <GeneralInformation />
//           <EducationalExperience />
//           <PracticalExperience />
//         </main>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main-container'>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </main>
    </div>
  );
}

export default App;
