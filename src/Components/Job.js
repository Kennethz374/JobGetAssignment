import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  paper:{
    padding: theme.spacing(1),
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgrey",
    marginBottom:0
  },
  card: {
    borderRadius: theme.spacing(2),
    height:"auto",
    width: "100%",
    margin:"auto",
    display: "flex",
    flexDirection:"column",
      [theme.breakpoints.up("sm")]:{
        flexDirection: "row"
      },
  },
  title: {
    fontSize: 14,
  },
  divOne: {
    width:"100%",
    [theme.breakpoints.up('sm')]:{
      width: "75%"
    },
  },
  divTwo: {
    width:"100%",
    [theme.breakpoints.up('sm')]:{
      width: "25%"
    },
  },
  button:{
    backgroundColor:"teal",
    margin:"auto",
    padding:theme.spacing(1),
    width:"85%",
  }
}));

export default function Job({companyName, location,name, min, max, snippet, posted}) {
  const classes = useStyles();

  function createMarkup() {
    return {__html: snippet};
  }

  return (
    <>
    <Paper className={classes.paper}>
      
      <Card className={classes.card}>

      <CardContent className={classes.divOne}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="h6" component="h1">
          {companyName} | {location}
        </Typography>

        <Typography variant="body2" component="p" dangerouslySetInnerHTML={createMarkup()} />
      </CardContent>

      <CardContent className={classes.divTwo}>
      <Typography variant="h6" component="h2">
          Salary: 
          <br/>
          ${min} - {max}
        </Typography>
        <Typography>
          Posted: {posted}
        </Typography>
      <CardActions>
        <Button className={classes.button} size="small">Apply Job</Button>
      </CardActions>
      </CardContent>
    </Card>
  </Paper>
  </>

);
}