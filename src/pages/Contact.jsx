import React, {useState} from "react";
import "../CSS/contact.scss";


const Contact = () => {
  
const[name, setName] = useState("")
const[email, setEmail] = useState("")
const [textarea, setTextArea] = useState("")
const [error, setError] = useState(false)

const handleSubmit = (e)=>{
  e.preventDefault()

}
  return (
    <div className="cc-input">
      <div className="mb-3 ">
        <label className="form-label">
          <h2>Contact Us</h2>
          <div className="Underline"> </div>
        </label>
        <p>{error}</p>
        <input
          type="text"
          className="form-control cc-name"
          id="exampleFormControlInput1"
          placeholder="Name:"
          value={name}
          onChange={(e) =>setName(e.target.value)}


        />
        
        <input
          type="Email"
          className="form-control cc-name"
          id="exampleFormControlInput1"
          placeholder="Email:"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label"></label>
        <textarea
          className="form-control cc-name textarea"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="What do you wanna say?"
          value={textarea}
          onChange={(e) =>setTextArea(e.target.value)}
        ></textarea>

        <button onClick={handleSubmit} type="button" className="btn cc-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
