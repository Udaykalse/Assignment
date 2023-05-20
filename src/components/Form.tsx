
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormStyles {
  display: string;
  flexDirection: 'column' | 'row' | 'row-reverse' | 'column-reverse' | undefined;
  maxWidth: string;
  margin: string;
  padding: string;
  backgroundColor: string;
  borderRadius: string;
}

function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save user details in localStorage
    const userDetails = { name, phoneNumber, email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Navigate to the second page
    navigate('/second-page');
  };

  const formStyles: FormStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '50px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
  };

  const formGroupStyles = {
    marginBottom: '20px',
  };

  const inputStyles = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%',
  };

  const labelStyles = {
    marginBottom: '5px',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const submitButtonStyles = {
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <>
 <center><h1>Welcome</h1></center> 

    <form onSubmit={handleSubmit} style={formStyles}>
      
      <div style={formGroupStyles}>
        <label htmlFor="name" style={labelStyles}>
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyles} required
        />
      </div>
      <div style={formGroupStyles}>
        <label htmlFor="phoneNumber" style={labelStyles}>
          Phone
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={inputStyles} required
        />
      </div>
      <div style={formGroupStyles}>
        <label htmlFor="email" style={labelStyles}>
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles} required
        />
      </div>
      <button type="submit" style={submitButtonStyles}>
        Submit
      </button>
    </form></>
  );
}

export default Form;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface FormStyles {
//   // Styles interface definition
// }

// function Form() {
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Save user details in localStorage
//     const userDetails = { name, phoneNumber, email };
//     localStorage.setItem('userDetails', JSON.stringify(userDetails));

//     // Navigate to the second page
//     navigate('/second-page');
//   };

//   const formStyles: FormStyles = {
//     // Styles definition
//   };

//   // Rest of the code...

//   return (
//     <form onSubmit={handleSubmit} style={formStyles}>
//       {/* Form fields */}
//     </form>
//   );
// }

// export default Form;

