import React from "react";
import { useState } from "react";

function LoginForm({ Login, error }) {
  //not sure what we destructure here , the functon or the values in the funciton

  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>

        {error != "" ? <div className="error">{error}</div> : ""}
        {/*error ko destruct kia haii to use krliya directly....yha pe error state paas ki thi
        ..logout dabte hi seterror me value gai...to mtlb poora starting se run krega , aur tbhi
        yha ki condition true hogai*/}

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          {/*we are getting all of the detials but we are updating only the name */}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Pasword:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
