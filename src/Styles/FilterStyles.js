import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  filter:{
    display:"flex",
    justifyContent:"center"
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  }));

  export default useStyles;