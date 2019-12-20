import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root:{
    width:"100%"
  },
  div:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  },
  paper:{
    backgroundColor:"lightgrey"
  }
}));

export default useStyles;