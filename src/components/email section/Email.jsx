import React, {useState} from 'react'
import "../email section/style/Email.scss";

const Email = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || (!email.includes("@"))) {
      setError("Please enter a valid email address")
  }}
  return (
    <div>
       <section className="d-flex flex-column flex-lg-row container justify-content-between align-items-center gap-5 my-5">
        {/* text content */}
        <div className="cc-flex">
          <h2>
            Join our Newsletter and Get{" "}
            <span className="cc-text-color">20% off</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            praesentium dolorum magni ipsa voluptatibus voluptates velit
            repellendus quo nobis veritatis.
          </p>
        </div>
        {/* input content */}
        
        <section className="cc-flex">
        <p>{error}</p>
          <div className="cc-wrapper">
            <div className="input-group">
             
              <input
                type="Email"
                className="form-control "
                placeholder="Enter email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button onClick={handleSubmit} className="input-group-text cc-button" id="basic-addon2">
                @example.com
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Email
