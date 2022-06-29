import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  sno: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  gender: string
) {
  return { sno, name, calories, gender, fat, carbs, protein };
}

const rows = [
  createData(
    1,
    "Ramesh Sharma",
    19,
    "Male",
    "nikhil@gmail.com",
    7847847858,
    "12-03-2003"
  ),
  createData(
    2,
    "Savitri Devi",
    37,
    "Female",
    "pankaj@gmail.com",
    9857453757,
    "23-04-1985"
  ),
  createData(
    3,
    "Raman Sholey",
    62,
    "Male",
    "naman@gmail.com",
    8765897624,
    "02-07-1960"
  ),
  createData(
    4,
    "Kani Roni",
    35,
    "Female",
    "yash@gmail.com",
    6904594547,
    "28-09-1987"
  ),
  createData(
    5,
    "Sumit Champak",
    56,
    "Male",
    "mahi@gmail.com",
    9367435633,
    "19-12-1966"
  ),
];

export const DonarList = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ fontSize: "13px" }}>
                S.No.
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }}>
                Donar Name
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Age
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Gender
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Email Address
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Contact No
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Date Of Birth
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.sno}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.gender}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left">{row.protein}</StyledTableCell>
                <StyledTableCell align="left">
                  <i
                    class="fa fa-pencil-square-o"
                    aria-hidden="true"
                    style={{ fontSize: "22px", color: "blue" }}
                  ></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    style={{ fontSize: "22px", color: "red" }}
                  ></i>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
