import React from "react";
import { Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root:{
    width:"100%"
  },
  div:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  },
  paper:{
    backgroundColor:"lightgrey"
  }
}));


export default function Header() {
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.paper}>
      <div className={classes.div}>
        <img src="https://lh3.googleusercontent.com/UZdMhggfrbQwVkbjVdKIDNMmZajIAZhL8u9YB9IItc0IGsT5FW6BN18lbD5SKayyE59J" alt="Smiley face" />
      </div>
    </Paper>
    </>
  )
}