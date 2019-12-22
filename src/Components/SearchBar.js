import React, { useEffect,useCallback } from "react";
import {FormControl, InputLabel, Input, Button, Paper} from '@material-ui/core';
import axios from "axios";
import Results from "./Results";
import { Pagination } from 'semantic-ui-react';
import useStyles from "../Styles/SearchBarStyles";
import Filter from "../Components/Filter"
import Loading from "./Loading"
import useAppState from "../Hooks/useAppState"
//API KEY
const API = process.env.REACT_APP_API


export default function SearchBar(props) {
  const classes = useStyles();
  const initialState = {
    data: {},
    job: "",
    city:"",
    page: 1,
    miles:100,
    date: 100,
    openMile:false,
    openDate:false,
    loading:false
  }
  const {
    state, 
    setState,
    handlePaginationChange,
    handleDateChange,
    handleDateClose,
    handleDateOpen,
    handleMileChange,
    handleMileClose,
    handleMileOpen,
  }=useAppState(initialState);

  useEffect(()=>{
    handleSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state.miles,state.date,state.page,state.job,state.city]) 
  //if and state changes it will call handleSearch and re render

  const handleSearch = () => {
    axios.get(`https://api.ziprecruiter.com/jobs/v1?search=${state.job}&location=${state.city}&api_key=${API}&page=${state.page}&radius_miles=${state.miles}&days_ago=${state.date}`)
    .then(response=> {
      setState((state)=>({
        ...state,
        data:response.data,
        loading:false
      }));
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onSubmit = useCallback(e => {
    e.preventDefault()
    const { job, city } = e.target
    setState({...state, job: job.value, city: city.value })
    e.target.reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <Paper>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.left}>
            <FormControl fullWidth  className={classes.formControl}>
                <InputLabel htmlFor="job" >Jobs</InputLabel>
                <Input type="text" id="job" name="job" autoFocus >
                </Input>
              </FormControl>
          </div>
          <div className={classes.middle}> 
            <FormControl fullWidth variant='outlined'  className={classes.formControl}>
              <InputLabel htmlFor="city">City</InputLabel>
              <Input id="city" name="city" autoFocus type="text">
              </Input>
            </FormControl>
          </div>
          <div className={classes.right} >
            <Button
              variant="contained" 
              color="secondary" 
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>

        

      <div>
        <Filter 
        miles={state.miles} 
        openMile={state.openMile}
        handleMileChange={handleMileChange} 
        handleMileClose={handleMileClose} 
        handleMileOpen={handleMileOpen}
        date={state.date} 
        openDate={state.openDate}
        handleDateChange={handleDateChange} 
        handleDateClose={handleDateClose} 
        handleDateOpen={handleDateOpen}
        />
      </div>
    </Paper>

    {state.data.jobs? <Results results={state.data.jobs}/> : <Loading/>}
    {state.data.total_jobs===0 && <h1>Sorry! No Result Matches</h1>}
    {state.data.jobs&&
        <Pagination   
        onPageChange={handlePaginationChange}
        defaultActivePage={state.page} 
        totalPages={state.data.total_jobs<=500? Math.floor(state.data.total_jobs/20) + 1 : 25} />}


    </>
  );
}