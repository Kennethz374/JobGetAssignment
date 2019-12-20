import React from "react";
import {Typography,Paper,Card,CardActions,CardContent,Button} from '@material-ui/core';
import useStyles from "../Styles/JobStyles"

//dangerouseInnerSetHtml could cause potential XSS problem
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

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
        <Typography variant="h5" component="h3">
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
          {formatter.format(min)} - {formatter.format(max)}
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