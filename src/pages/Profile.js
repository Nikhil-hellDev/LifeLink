import React, { useState,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { postData,getData } from "../FetchServices";
import Alert from '@mui/material/Alert';


const theme = createTheme();

export const DonarProfile = (props) => {


  const [inputValues, setInputValues] = useState({
    donarFirstName:'naveen',donarLastName:'bansal', donarEmail:'naveen@gmail.com', donarNo:'564464654',donarDateOfBirth:'23/04/2000',donarGender:'Male',donarAdhaar:'448484848545',donarAddress:'Transport nager',hospitalId:3,donarPassword:'1254789'
  });
  const [styleValue,setStyleValue]=useState({display:"none",server:"error",text:"Login Falied! check your Email Id or Password"})

  
  useEffect(() => {

    fetchData()
  }, []);

  const fetchData =async ()=> {
   
    let result=await getData('Hospital/GetAllHospitalList')
    console.log("result for Hospital List",result);
     if(result.length)
     {
      console.log('data recived successfully')
     //  this.props.navigation.navigate('login')     
     }
     else{
       console.log('data not recieved ')
     }  
     }
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
   
    console.log(inputValues);
    let body={
        'DonarName':inputValues.donarName+''+inputValues.donarName,
        'DonarEmail':inputValues.donarEmail,
        'DonarNo':inputValues.donarNo,
        'DonarDateOfBirth':inputValues.donarDateOfBirth,
        'DonarGender':inputValues.donarGender,
        'DonarAdhaar':inputValues.donarAdhaar,
        'DonarAddress':inputValues.donarAddress,
        'HospitalId':inputValues.hospitalId,
        'DonarPassword':inputValues.donarPassword
     }
     console.log("body",body);
     let result=await postData('Donar/DonarRegistration',body)
     console.log("result",result);
      if(result.length)
      {
       console.log('data recived successfully')
       setStyleValue({ ...styleValue, display: 'block',server:'success',text:"Donar Registration Complete Succesfully. Now Go on Login Page"});

      setTimeout(() => {
        window.location="/DonarSignIn"
     }, 5000);

      // this.props.navigation.navigate('login')     
      }
      else{
        console.log('data not recieved ')
        setInputValues({ ...inputValues, donarEmail: '',donarPassword:'' });
      setStyleValue({ ...styleValue, display: 'block'});

      }
  };


  
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "80vh" }}>
          <CssBaseline />
          
          <Grid
            item
            xs={10}
            sm={6}
            md={12}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                m: 8,
                my: 12,
                mx: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Donar Profile
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="donarFirstName"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarFirstName}
                  id="donarFirstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarLastName}
                  id="donarLastName"
                  label="Last Name"
                  name="donarLastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarEmail}
                  id="donarEmail"
                  label="Email Address"
                  name="donarEmail"
                  autoComplete="email"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                onChange={handleOnChange}
                value={inputValues.donarNo}
                id="donarNo"
                label=" Contact No"
                name="donarNo"
                autoComplete="number"
                autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="date"
                  onChange={handleOnChange}
                  value={inputValues.donarDateOfBirth}
                  id="donarDateOfBirth"
                  label="Date of birth"
                  name="donarDateOfBirth"
                  autoComplete="donarDateOfBirth"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarGender}
                  id="donarGender"
                  label="Gender"
                  name="donarGender"
                  autoComplete="donarDateOfBirth"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleOnChange}
                type="number"
                value={inputValues.donarAdhaar}
                id="donarAdhaar"
                label=" Adhaar Number"
                name="donarAdhaar"
                autoComplete="donarAdhaar"
                autoFocus
              />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleOnChange}
              value={inputValues.donarAddress}
              id="donarAddress"
              label=" Address"
              name="donarAddress"
              autoComplete="donarDateOfBirth"
              autoFocus
            />
            </Grid>
                </Grid>
              
              
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
              value={inputValues.donarPassword}
                  name="donarPassword"
                  label="Password"
                  type="password"
                  id="donarPassword"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  style={{ItemAlign:"center"}}
                  variant="contained"
                  sx={{ mt: 8, mb: 8 }}
                >
                Update
                </Button>
                
              </Box>
              <Alert variant="outlined" severity={styleValue.server} style={{display:styleValue.display}}>
              {styleValue.text}
            </Alert>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
};
