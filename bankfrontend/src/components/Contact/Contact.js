import { useState , useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { postContact } from "../service/apiPublic";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const ContactUsPage = () => {
  const inputElement = useRef();
  const navigate =useNavigate();

  const initilvalue = {
    name: "",
    email: "",
    subject: "",
    message: " ",
  };

     const[contact , setContact] = useState(initilvalue) ;

     const onChangeValue =(e)=>{
          setContact({
            ...contact,
            [e.target.name]: e.target.value 
          })
     }

     const addContact =async()=>{
      if (contact.name.trim() === "" || contact.subject.trim() === "" || contact.email.trim() === "" || contact.message.trim() === "") {
        alert("Please fill in all the fields");
        return;
      }
      const response = await postContact(contact) ;
      console.log(response.status);
      if(response.status==201){
         toast(`${response.data}`);
      }
       navigate("/") ;
     
     }

  return (
    <Container sx={{ padding: '2rem', marginTop:"-3rem" }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
      Contact Us
    </Typography>
      <Grid container spacing={2}>
        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '1rem' }}>
            <Typography variant="h6" sx={{ display:"flex", alignItems:"center"}} gutterBottom>
            <PhoneIcon fontSize="small" />
            &nbsp; Call 
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="h6" sx={{ display:"flex", alignItems:"center"}} gutterBottom>
            <EmailIcon fontSize="small" /> &nbsp; Email Us
            </Typography>
            <Typography variant="body1" gutterBottom>
            Email: spbank@email.com
            </Typography>
            <Typography variant="h6" sx={{ display:"flex", alignItems:"center"}} gutterBottom>
            <LocationOnIcon fontSize="small" /> &nbsp; Address Us
            </Typography>
            <Typography variant="body1">
              123 Main Street, Pune, India
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Typography 
        ref={inputElement}
        ></Typography>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '1rem' }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <form>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e)=>onChangeValue(e)}
                name='name'
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e)=>onChangeValue(e)}
                name='email'
              />
              <TextField
                label="Subject"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e)=>onChangeValue(e)}
                name='subject'
              />
              <TextField
                label="Message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e)=>onChangeValue(e)}
                name='message'
              />
              <Button variant="contained" color="primary"  sx={{ fontSize: 15 }} fullWidth onClick={()=>addContact()}>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;
