import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

/*
    typeSelledCoin: string;
    typeBoughtCoin: string;
    priceBoughtCoin: number;
    amountSelledCoin: number;
    amountBoughtCoin: number;
    transactionDate: string;
*/
function createData(transactionDate: string, typeBoughtCoin: string, amountBoughtCoin: number, priceBoughtCoin: number, typeSelledCoin: string, amountSelledCoin: number) {
  return { transactionDate, typeBoughtCoin, amountBoughtCoin, priceBoughtCoin,typeSelledCoin,amountSelledCoin };
}

const rows = [
  createData('01-02-2021', "Real", 1, 5.64, "Brita", 5.64),
  createData('01-02-2021', "Real", 2, 5.64, "Brita", 10.64)
];

const Extract : React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
        <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Data Transação</TableCell>
                <TableCell align="center">Moeda Comprada</TableCell>
                <TableCell align="right">Valor Comprado</TableCell>
                <TableCell align="right">Preço Pago na Compra</TableCell>
                <TableCell align="right">Moeda Vendida</TableCell>
                <TableCell align="right">Valor Vendido</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.transactionDate}>
                <TableCell component="th" scope="row">
                    {row.transactionDate}
                </TableCell>
                <TableCell align="center">{row.typeBoughtCoin}</TableCell>
                <TableCell align="right">{row.amountBoughtCoin}</TableCell>
                <TableCell align="right">{row.priceBoughtCoin}</TableCell>
                <TableCell align="right">{row.typeSelledCoin}</TableCell>
                <TableCell align="right">{row.amountSelledCoin}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}



export default Extract;