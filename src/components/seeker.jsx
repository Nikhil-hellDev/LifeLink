import React,{useEffect,useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {postData} from "../FetchServices";

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


export const SeekerList = () => {
  const [SeekerList, setSeekerList] = useState([]);

  useEffect(() => {
  const HospitalId = localStorage.getItem('HospitalId');
  getData(HospitalId)
  },[])

 const getData =async (HospitalId)=> {
  let body={
    'HospitalId':HospitalId
 }
 console.log("body",body);
 let result=await postData('Hospital/GetAllSeekersList',body)
 console.log("result for seeker",result);
  if(result)
  {
    setSeekerList(result);
   console.log('data recived successfully')
  //  this.props.navigation.navigate('login')     
  }
  else{
    console.log('data not recieved ')
  }  
  }
  const HadleDelete=async (e,id) =>{

    e.preventDefault()
    let body={
      'SeekerId':id
   }
   console.log("body",body);
   let result=await postData('Seeker/DeleteSeeker',body)
   console.log("result",result);
   if(result)
  {
   console.log(result)
   getData()
  //  this.props.navigation.navigate('login')     
  }
  else{
    console.log('data not recieved ')
  }  
  }

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
            Email Address
          </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
          Contact No
        </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
            Date Of Birth
          </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
            Gender
          </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
          Adhaar No.
          </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
           Address
          </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
           Last Update Date
          </StyledTableCell>
          <StyledTableCell style={{ fontSize: "13px" }} align="left">
            Actions
          </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SeekerList.map((row,index) => (
              <StyledTableRow key={row.DonarId}>
                <StyledTableCell>{index+1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.SeekerName}
                </StyledTableCell>
                <StyledTableCell align="left">{row.SeekerEmail}</StyledTableCell>
                <StyledTableCell align="left">{row.SeekerNo}</StyledTableCell>
                <StyledTableCell align="left">{row.SeekerDateOfBirth}</StyledTableCell>
                <StyledTableCell align="left">{row.SeekerGender}</StyledTableCell>
                <StyledTableCell align="left">{row.SeekerAdhaar}</StyledTableCell>
                <StyledTableCell align="left">{row.SeekerAddress}</StyledTableCell>
                <StyledTableCell align="left">{row.UpdateDate.split("T")[0]}</StyledTableCell>
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
                    onClick={(e)=>HadleDelete(e,row.DonarId)}
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
