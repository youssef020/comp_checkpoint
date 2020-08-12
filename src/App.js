import React from 'react';
import './App.css';
import Adress from './Component/Profile/Adress.js';
import FullName from './Component/Profile/FullName.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';

function App() {
  return (
    <>
    <div className="container">
    <div className="card">
    <ProfilePhoto/>
</div>
    <div className="names">
    <Adress/>
    <FullName/>
    </div>
    </div>


</>
  );
}

export default App;
