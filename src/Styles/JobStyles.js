import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper:{
    padding: theme.spacing(1),
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgrey",
    marginBottom:0
  },
  card: {
    borderRadius: theme.spacing(2),
    height:"auto",
    width: "100%",
    margin:"auto",
    display: "flex",
    flexDirection:"column",
      [theme.breakpoints.up("sm")]:{
        flexDirection: "row"
      },
  },
  title: {
    fontSize: 14,
  },
  divOne: {
    margin:theme.spacing(2),
    width:"100%",
    [theme.breakpoints.up('sm')]:{
      width: "75%"
    },
  },
  divTwo: {
    width:"100%",
    [theme.breakpoints.up('sm')]:{
      width: "25%"
    },
  },
  button:{
    backgroundColor:"teal",
    margin:"auto",
    padding:theme.spacing(1),
    width:"85%",
  }
}));

export default useStyles