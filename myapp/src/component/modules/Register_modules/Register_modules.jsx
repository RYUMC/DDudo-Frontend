import "./Register_modules.css";
import { Link } from "react-router-dom";

//
import React from "react";
import { RecoilRoot } from "recoil";
//

export function Register_modules() {
  const [inputs, setInputs] = React.useState(0);

  const onChange = (event) => {
    setInputs(event.target.value);
  };

  return (
    <RecoilRoot>
      <div className="Register_modules-containter">
        <div className="regi_title">Register</div>
        <Link to="/DDudo-Frontend" className="previous_button">
          〈
        </Link>
        <div className="regi_form">
          <input
            value={inputs}
            id="id"
            type="text"
            placeholder="ID"
            onChange={onChange}
          />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Age" />
          <div className="regi_line"></div>
          <div className="regi_btn">Register</div>
        </div>
      </div>
    </RecoilRoot>
  );
}
