import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "../Styles/HeaderStyles";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.div}>
          <img
            src="https://lh3.googleusercontent.com/UZdMhggfrbQwVkbjVdKIDNMmZajIAZhL8u9YB9IItc0IGsT5FW6BN18lbD5SKayyE59J"
            alt="Smiley face"
          />
        </div>
      </Paper>
    </>
  );
}
