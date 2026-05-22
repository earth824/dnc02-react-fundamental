import { useState } from 'react';

export default function App() {
  const [emailInput, setEmailInput] = useState('a@email.com');
  const [continentId, setContinentId] = useState('3');
  const [profile, setProfile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate data in a form
    // test if value is valid email address

    // sent data in a form to a server
  };

  return (
    <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
      {/* Controlled component: form input controlled by react state */}
      <input
        type="text"
        placeholder="Enter your email"
        className="border px-3 py-1.5"
        onChange={(event) => {
          console.log(event.target.value);
          setEmailInput(event.target.value);
        }}
        value={emailInput}
      />
      {/* Controlled component: form input controlled by react state */}
      <select
        name=""
        id=""
        className="border px-3 py-1.5"
        onChange={(event) => {
          console.log(event.target.value);
          setContinentId(event.target.value);
        }}
        value={continentId}
      >
        <option value="1">Asia</option>
        <option value="2">Europe</option>
        <option value="3">Africa</option>
      </select>
      {/* Uncontrolled component */}
      <input
        type="file"
        className="border px-3 py-1.5 bg-gray-300"
        onChange={(event) => {
          console.log(event.target.value);
          console.log(event.target.files);
          if (event.target.files[0]) {
            console.log('TRUE');
            setProfile(event.target.files[0]);
          }
        }}

        // multiple
      />
      <button type="button" onClick={() => setProfile(null)}>
        Cancel Image
      </button>
      <button className="bg-green-400 py-2">Submit</button>
    </form>
  );
}
