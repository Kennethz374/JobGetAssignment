import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form:{
    display:"block",
      [theme.breakpoints.up("md")]:{
        display:"flex"
      },
    justifyContent:"center",
    backgroundColor:"rgb(232, 240, 254)"
  },
  left:{
    display:"flex",
    justifyContent:"center",
    padding:theme.spacing(1),
    width:"100%",
  },
  middle: {
    display:"flex",
    justifyContent:"center",
    padding:theme.spacing(1),
    width:"100%",
  },
  right:{
    display:"flex",
    justifyContent:"center",
    width: "100%", 
      [theme.breakpoints.up('md')]:{
        width: "10%"
      },
  },
  formControl:{
    margin: theme.spacing(2),
    minWidth: 200,
  }
}));

export default useStyles