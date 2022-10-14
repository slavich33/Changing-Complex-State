import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChamge(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // replacing this two lines with destructing
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChamge}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          // Always set value!
        />
        <input
          onChange={handleChamge}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          // Always set value!
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
