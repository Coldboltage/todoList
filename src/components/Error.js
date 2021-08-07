import React, {useContext} from "react";
import {Context} from "./../context"

const Error = () => {
  const {error} = useContext(Context);
  return (
    <div>
      {error && <h3>I am an error</h3>}
      
    </div>
      )
};
export default Error;
