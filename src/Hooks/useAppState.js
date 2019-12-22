import {useState} from "react";
export default initialState => {
  const [state, setState] = useState(initialState);

  return {
    state,
    setState,
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
    }
  }
}