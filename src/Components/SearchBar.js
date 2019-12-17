import React, { useState } from "react";
import {FormControl, InputLabel, Input, Button, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"
import Results from "./Results"



// import useDebounce from "hooks/useDebounce";

// import Loading from "components/Loading";

const useStyles = makeStyles(theme => ({
  search:{
    borderRadius:theme.spacing(1),
    display:"flex",
    margin:"auto",
  },
  form: {
    display:"inline flex",
    width:"100%",
  },
  submit:{
    width: "100%", 
      [theme.breakpoints.up('md')]:{
        width: "10%"
      },
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },
  left:{
    padding:theme.spacing(2),
    width:"40%",
  },
  right: {
    padding:theme.spacing(2),
    width:"40%",
  }
}));


export default function SearchBar(props) {
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");

  const classes = useStyles();
  const [data, setData] = useState({})

  let handleSearch = (job,city) => {
    axios.get(`https://api.ziprecruiter.com/jobs/v1?search=${job}&location=${city}&api_key=mthpyw9ea7zyswfuj3zur6bt55fce7qf`)
    .then(response=> {
      setData(()=>({
        results:response.data.jobs
      }))
    })
  }

  console.log("job",job, "city", city, "data", (data.results))
  return (
    <>
    <Paper>
    <div className={classes.search}>
       <form  className={classes.form}>
          <FormControl margin="normal" className={classes.left}>
              <InputLabel htmlFor="job" >Jobs</InputLabel>
              <Input id="job" name="Job title" autoFocus value={job} onChange={event => setJob(event.target.value)}>
              </Input>
            </FormControl>
          <FormControl variant="outlined" margin="normal" className={classes.right}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input id="city" name="city" autoFocus value={city} onChange={event => setCity(event.target.value)}>
            </Input>
          </FormControl>
          <Button className={classes.submit} 
            variant="contained" 
            color="secondary" 
            onClick= {()=>handleSearch(job,city)}
          >
            Search
          </Button>
        </form>
    </div>
    </Paper>

    {data.results? <Results results={data.results}/> : <h1></h1>}


    </>
  );
}