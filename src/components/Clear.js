import React, { useContext } from "react";
import { Button, IconButton  } from "@material-ui/core";
import { Context } from "../context";
import { FiRefreshCcw } from "react-icons/fi";

const Clear = () => {
  const { clearTask, refreshData } = useContext(Context);
  return (
    <div style={{ paddingTop: "20px" }}>
      <Button variant="contained" color="secondary" onClick={clearTask}>
        Clear
      </Button>
      <IconButton 
        style={{ marginLeft: "20px" }}
        variant="outlined"
        color="secondary"
        onClick={refreshData}
      >
        <FiRefreshCcw></FiRefreshCcw>
      </IconButton >
    </div>
  );
};

export default Clear;
