import React, { useState } from "react";
import {FormControl, InputLabel, Input, Button, Paper} from '@material-ui/core';
import axios from "axios";
import Results from "./Results";
import { Pagination } from 'semantic-ui-react';
import useStyles from "../Styles/SearchBarStyles";
import Filter from "../Components/Filter"

//API KEY
const API = process.env.REACT_APP_API

export default function SearchBar(props) {
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [page] = useState(1)
  const [data, setData] = useState({});
  const [miles, setMiles]=useState(25)
  const [open,setOpen]=useState(false)
  const classes = useStyles();

  const handleSearch = (job,city,page) => {
    axios.get(`https://api.ziprecruiter.com/jobs/v1?search=${job}&location=${city}&api_key=${API}&page=${page}&radius_miles=${miles}`)
    .then(response=> {
      setData(()=>({
        results:response.data.jobs,
        totalJobs: response.data.total_jobs
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

  const handleMileChange = event => {
    setMiles(event.target.value);
  };

  const handleMileClose = () => {
    setOpen(false);
  };

  const handleMileOpen = () => {
    setOpen(true);
  };

  return (
    <>
    <Paper>
        <form className={classes.form}>
          <div className={classes.left}>
            <FormControl fullWidth  className={classes.formControl}>
                <InputLabel htmlFor="job" >Jobs</InputLabel>
                <Input id="job" name="Job title" autoFocus value={job} onChange={event => setJob(event.target.value)}>
                </Input>
              </FormControl>
          </div>
          <div className={classes.middle}> 
            <FormControl fullWidth variant='outlined'  className={classes.formControl}>
              <InputLabel htmlFor="city">City</InputLabel>
              <Input id="city" name="city" autoFocus value={city} onChange={event => setCity(event.target.value)}>
              </Input>
            </FormControl>
          </div>
          <div className={classes.right} >
            <Button
              variant="contained" 
              color="secondary" 
              onClick={()=>handleSearch(job,city,page)}
            >
              Search
            </Button>
          </div>
        </form>

      <div>
        <Filter 
        miles={miles} 
        open={open}
        handleMileChange={handleMileChange} 
        handleMileClose={handleMileClose} 
        handleMileOpen={handleMileOpen}/>
      </div>
    </Paper>


    { (data.results) ? <Results results={data.results}/> : <></>}
    {data.results? 
        <Pagination   
        onPageChange={handlePaginationChange}
        defaultActivePage={page} 
        totalPages={data.totalJobs<=500? Math.round(data.totalJobs/20) + 1 : 25} />
      : 
        <></>}


    </>
  );
}