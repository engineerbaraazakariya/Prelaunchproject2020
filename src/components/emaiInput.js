import React from "react";
import { withStyles, fade } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  input: {
    backgroundColor: theme.palette.common.white,
    width: 250,
    padding: "10px 12px",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade("#ffffff", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#ffffff"
    }
  }
}))(InputBase);

const BootstrapInputDark = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: 0
      //   theme.spacing(3),
    },
    "&:hover fieldset": {
      borderColor: "yellow"
    },
    "&.Mui-focused fieldset": {
      borderColor: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      }
    }
  },
  input: {
    //   borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid black",
    fontSize: 16,
    width: 250,
    margin: "0px 0 10px 0",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `${fade("#000000", 0.25)} 0 0 0 0.2rem`,
      borderColor: "#000000"
    }
  }
}))(InputBase);

export default function BasicTextFields() {
  const [inputs, onChange] = React.useState({});
  const [codeGenerated, onCodeChange] = React.useState(0);

  const handleChange = e => {
    onChange({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        onCodeChange(uuidv4().slice(0, 8));
      }}
    >
      <BootstrapInput
        id="outlined-basic1"
        label="Email"
        name="emailCustomer"
        variant="outlined"
        placeholder="hello@email.com"
        onChange={handleChange}
        className={"header-input"}
      />
      <Link to={"/referral"}>
        <button className="buttonSubscribe">Subscribe</button>
      </Link>
    </form>
  );
}
