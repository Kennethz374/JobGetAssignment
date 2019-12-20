import {useState} from "react";
export default initialState => {
  const [state, setState] = useState(initialState);
  const [jobTitle, setJobTitle] = useState("");
  const [cityName, setCityName] = useState("");
  return {
    state,
    setState,
    jobTitle,
    cityName,
    handlePaginationChange: (e, data) => {
      setState({...state,page:data.activePage})
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleMileChange: event => {
      setState({...state,miles:event.target.value})
    },
    handleMileClose: () => {
      setState({...state,OpenMile:false});
    },
    handleMileOpen: () => {
      setState({...state,OpenMile:true});
    },
  
    handleDateChange: (event) => {
      setState({...state,date:event.target.value});
    },
    handleDateClose: () => {
      setState({...state,OpenDate:false});
    },
    handleDateOpen: () => {
      setState({...state,OpenDate:true})
    },
    handleJobChange: (event) => {
      setJobTitle(event.target.value)
    },
    handleCityChange: (event) => {
      setCityName(event.target.value)
    }
  }
}