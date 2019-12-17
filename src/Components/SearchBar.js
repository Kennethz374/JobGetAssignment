import React, { useState, useEffect } from "react";
import {FormControl, InputLabel, Input, Button, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Results from "./Results";
import { Icon, Pagination } from 'semantic-ui-react';


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
  const [page, setPage] = useState(1)
  const [data, setData] = useState({});
  const classes = useStyles();

  const handleSearch = (job,city,page) => {
    axios.get(`https://api.ziprecruiter.com/jobs/v1?search=${job}&location=${city}&api_key=mthpyw9ea7zyswfuj3zur6bt55fce7qf&page=${page}`)
    .then(response=> {
      setData(()=>({
        results:response.data.jobs,
        pagination: Math.round(response.data.total_jobs / 20)
      }))
    })
  }
  useEffect((job,city,page)=>{
    axios.get(`htps://api.ziprecruiter.com/jobs/v1?search=${job}&location=${city}&api_key=mthpyw9ea7zyswfuj3zur6bt55fce7qf&page=${page}`)
    .then(response=> {
      setData(()=>({
        results:response.data.jobs,
        pagination: Math.round(response.data.total_jobs / 20)
      }))
  },[page])
  })
  const handlePaginationChange = (e, data) => {
    setPage(data.activePage)
    console.log("page",page)
  }

  console.log("job",job, "city", city, "data", (data.results), "page",page)
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
            onClick= {()=>handleSearch(job,city,page)}
          >
            Search
          </Button>
        </form>
    </div>
    </Paper>


    {data.results? <Results results={data.results}/> : <></>}
    {data.results? 
        <Pagination   
        onPageChange={()=>handlePaginationChange}
        defaultActivePage={1} 
        totalPages={data.pagination} />
      : 
        <></>}


    </>
  );
}