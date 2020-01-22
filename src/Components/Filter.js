import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "../Styles/FilterStyles";

export default function Filter({
  open,
  miles,
  date,
  handleMileChange,
  handleMileClose,
  handleMileOpen,
  handleDateChange,
  handleDateClose,
  handleDateOpen
}) {
  const classes = useStyles();
  return (
    <div className={classes.filter}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Date</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleDateClose}
            onOpen={handleDateOpen}
            value={date}
            onChange={handleDateChange}
          >
            <MenuItem value={100}>Any</MenuItem>
            <MenuItem value={1}>Last 24 hours</MenuItem>
            <MenuItem value={3}>3 days</MenuItem>
            <MenuItem value={7}>7 days</MenuItem>
            <MenuItem value={30}>30 days</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Radius</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleMileClose}
            onOpen={handleMileOpen}
            value={miles}
            onChange={handleMileChange}
          >
            <MenuItem value={100}>Default</MenuItem>
            <MenuItem value={5}>5 miles</MenuItem>
            <MenuItem value={10}>10 miles</MenuItem>
            <MenuItem value={15}>15 miles</MenuItem>
            <MenuItem value={20}>20 miles</MenuItem>
            <MenuItem value={25}>25 miles</MenuItem>
            <MenuItem value={30}>30 miles</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
