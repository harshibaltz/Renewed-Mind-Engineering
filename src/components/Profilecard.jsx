import { useState } from 'react';

function Profilecard() {
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
    <div className="Profile-card-container">
      <div className="Image-box">
        <img 
          src="/IMG_20251225_115023_968@1642939910.jpg" 
          alt="Russel image"
        />
      </div>
      
      <div className="Description">
        <p className="Name">Russel Valdez</p>
        <p className="Profile-Description">
          Hello! I'm Russel, a student passionate of Science, new technology. 
          very curious, I have an account on LinkedIn were you can find and 
          follow me in my journey in web applications, 3D modeling and many more.
        </p>
      </div>

      {/* Age Checking Section */}
      <div className="age-checker">
        <h3>Age Verification</h3>
        <div className="age-input-group">
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="age-input"
          />
          <button onClick={checkAge} className="age-check-btn">
            Check Age
          </button>
        </div>
        
        {ageStatus && (
          <div className={`age-status ${
            ageStatus === 'You are an adult' ? 'adult' : 
            ageStatus === 'You are a minor' ? 'minor' : 'error'
          }`}>
            {ageStatus === 'You are an adult' && '✅ '}
            {ageStatus === 'You are a minor' && '⚠️ '}
            {ageStatus}
          </div>
        )}
      </div>

      <div className="reaction-buttons">
        <button className="Reactions">Like</button>
        <button className="Reactions">Validate</button>
        <button className="Reactions">Unlike</button>
      </div>

      <p className="find-me">Find Me On:</p>
      
      <div className="social-buttons">
        <button className="Reactions">Whatsapp</button>
        <button className="Reactions">Facebook</button>
        <button className="Reactions">Instagram</button>
      </div>
    </div>
  );
}

export default Profilecard;