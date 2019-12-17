import React, { useState, useEffect } from "react";
import {FormControl, InputLabel, Input, Button, Paper} from '@material-ui/core';
import axios from "axios";
import Results from "./Results";
import { Pagination } from 'semantic-ui-react';
import useStyles from "../Styles/SearchBarStyles"


export default function SearchBar(props) {
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [page] = useState(1)
  const [data, setData] = useState({});
  const classes = useStyles();

  const handleSearch = (job,city,page) => {
    axios.get(`https://api.ziprecruiter.com/jobs/v1?search=${job}&location=${city}&api_key=mthpyw9ea7zyswfuj3zur6bt55fce7qf&page=${page}&jobs_per_page=10`)
    .then(response=> {
      setData(()=>({
        results:response.data.jobs,
        pagination: Math.round(response.data.total_jobs / 10)
      }))
    });
  }

  const handlePaginationChange = (e, data) => {
    handleSearch(job,city,data.activePage)
    setTimeout(function() {
      console.log("page",page);
    }, 2000);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
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


    { (data.results) ? <Results results={data.results}/> : <h1></h1>}
    {data.results? 
        <Pagination   
        onPageChange={handlePaginationChange}
        defaultActivePage={page} 
        totalPages={data.pagination} />
      : 
        <></>}


    </>
  );
}