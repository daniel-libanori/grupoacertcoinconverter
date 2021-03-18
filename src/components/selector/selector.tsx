import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
      textAlign: "center",
    },
    menuItem: {
      fontSize: "18px"
    },
    select: {
        fontSize: "25px"
      },
  }),
);

interface INTFSelector {
    action: React.Dispatch<React.SetStateAction<any>> | (() => void);
    menuItemsValue: string[];
    inputLabel: String;
}


const Selector : React.FC <INTFSelector>= ({action,menuItemsValue, inputLabel}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    action(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          className={classes.select}
        >

        {menuItemsValue.map((item,index)=>{
            return <MenuItem key={index} value={item} className={classes.menuItem}>{item}</MenuItem>
        })}
          
        </Select>
      </FormControl>
    </div>
  );
}
export default Selector;