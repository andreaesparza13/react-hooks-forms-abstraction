import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });
  // const [lastName, setLastName] = useState("Henry");

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.checked === "checkbox") {
      value = event.target.checked
    }
    setFormData({
      ...formData,
    [name]: value

  })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  // function handleFirstNameChange(event) {
  //   // setFirstName(event.target.value);
  //   setFormData({...formData, firstName: event.target.value});
  // }

  // function handleLastNameChange(event) {
  //   // setLastName(event.target.value);
  //   setFormData({...formData, lastName: event.target.value});
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
