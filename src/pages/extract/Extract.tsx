import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {MoneyContext} from '../../contexts/moneyContext'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableContainer: {
    width: "80%",
  },
  center:{
      display: "flex",
      justifyContent: "center"
  }
});

function createData(transactionDate: string, typeBoughtCoin: string, amountBoughtCoin: number,  typeSelledCoin: string, amountSelledCoin: number) {
  return { transactionDate, typeBoughtCoin, amountBoughtCoin, typeSelledCoin,amountSelledCoin };
}

// const rows = [
//   createData('01-02-2021', "Real", 1, "Brita", 5.64),
//   createData('01-02-2021', "Real", 2, "Brita", 10.64)
// ];

const Extract : React.FC = () => {
  const classes = useStyles();

  const {extractStored} = useContext(MoneyContext);

  const rows = extractStored;

  return (
    <div className={classes.center}>
        <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Data Transação</TableCell>
                <TableCell align="center">Moeda Comprada</TableCell>
                <TableCell align="right">Valor Comprado</TableCell>
                <TableCell align="right">Moeda Vendida</TableCell>
                <TableCell align="right">Valor Vendido</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {!!rows ? rows.map((row) => (
                <TableRow key={row.transactionDate}>
                <TableCell component="th" scope="row">
                    {row.transactionDate}
                </TableCell>
                <TableCell align="center">{row.typeBoughtCoin}</TableCell>
                <TableCell align="right">{row.typeBoughtCoin ===  "Bitcoin"? row.amountBoughtCoin.toFixed(8) : row.amountBoughtCoin.toFixed(2)}</TableCell>
                <TableCell align="right">{row.typeSelledCoin}</TableCell>
                <TableCell align="right">{row.typeSelledCoin ===  "Bitcoin"? row.amountSelledCoin.toFixed(8) : row.amountSelledCoin.toFixed(2)}</TableCell>
                </TableRow>
            )): null}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}



export default Extract;