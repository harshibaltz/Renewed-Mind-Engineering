import React, { useState } from 'react';

function ProfileCard() {
  const [age, setAge] = useState('');
  const [ageStatus, setAgeStatus] = useState(null);

  const checkAge = () => {
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber < 0) {
      setAgeStatus('Please enter a valid age');
    } else if (ageNumber < 19) {
      setAgeStatus('You are a minor');
    } else {
      setAgeStatus('You are an adult');
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src="public\IMG_20251225_115023_968@1642939910.jpg" alt="Profile" />
      </div>
      <h2>Russel Valdez</h2>
      <p className="bio">
        Hello! I'm Russel, a student passionate about Science and new technology. 
        I'm very curious. You can follow me on LinkedIn.
      </p>

      {/* Age checker */}
      <div className="age-checker">
        <h3>Age Verification</h3>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
        <button onClick={checkAge}>Check Age</button>
        {ageStatus && (
          <div className={`age-status ${ageStatus.includes('adult') ? 'adult' : 'minor'}`}>
            {ageStatus}
          </div>
        )}
      </div>

      <div className="reactions">
        <button>Like</button>
        <button>Validate</button>
        <button>Unlike</button>
      </div>
    </div>
  );
}

export default ProfileCard;