import React, { useState } from "react";
import {FormControl, InputLabel, Input, Button, Paper} from '@material-ui/core';
import axios from "axios";
import Results from "./Results";
import { Pagination } from 'semantic-ui-react';
import useStyles from "../Styles/SearchBarStyles";

//API KEY
const API = process.env.REACT_APP_API

export default function SearchBar(props) {
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [page] = useState(1)
  const [data, setData] = useState({});
  const classes = useStyles();

  const handleSearch = (job,city,page) => {
    axios.get(`https://api.ziprecruiter.com/jobs/v1?search=${job}&location=${city}&api_key=${API}&page=${page}&jobs_per_page=20`)
    .then(response=> {
      setData(()=>({
        results:response.data.jobs,
        pagination: Math.round(response.data.total_jobs / 20)
      }))
    });
  }

  const handlePaginationChange = (e, data) => {
    handleSearch(job,city,data.activePage)
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
            onClick={()=>handleSearch(job,city,page)}
          >
            Search
          </Button>
        </form>
    </div>
    </Paper>


    { (data.results) ? <Results results={data.results}/> : <></>}
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