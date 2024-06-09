import React, { useState } from 'react';
import axios from 'axios';

function PasswordReset() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSendCode = async () => {
    try {
      // Replace with your API endpoint
      const response = await axios.post('', { email });
      console.log(response.data);
      setStep(2);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      // Replace with your API endpoint
      const response = await axios.post('', { email, password, code });
      console.log(response.data);
      setStep(3);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="signPage">
     <div className="form_container">
      <div>
      {step === 1 && (
        <div>
          <input type="email"  name='email' className='input'value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter User Email" />
          <button onClick={handleSendCode}>Send Code</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      )}
      {step === 3 && (
        <p>Password has been successfully changed!</p>
      )}
      {error && <p>{error}</p>}
    </div>
    </div>
    </div>

  );
}

export default PasswordReset;
