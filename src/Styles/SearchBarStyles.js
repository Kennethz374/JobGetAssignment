import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  search:{
    borderRadius:theme.spacing(1),
    display:"flex",
    margin:"auto",
    backgroundColor: "darkgrey"
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
    marginTop: theme.spacing(6),
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

export default useStyles