import React, {useContext} from "react";
import {Context} from "../context"

const Error = () => {
  const {alert, msg} = useContext(Context);
  return (
    <div>
      {alert && <h3>{msg}</h3>}

      
    </div>
      )
};
export default Error;
