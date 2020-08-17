import React from 'react'

import	Navbar from './Navbar'

import emailjs from "emailjs-com"

import {makeStyles , withStyles } from '@material-ui/core/styles';
import {
	TextField,
	Button,
	Grid,
	Typography,
	Box
	
} from '@material-ui/core';


import 
	SendIcon 
from "@material-ui/icons/Send";
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles(theme=>({

	form:{
 top:"50%",
 left:"50%",
 transform:"translate(-50%,-50%)",
 position:"absolute"


	},
	button:{
		marginTop:"1rem",
		color:"tomato",
		borderColor:"tomato"


	}


}))

const InputField = withStyles({

root:{

"& label.Mui-focused":{

color:"tomato"

},
"& label":{

	color:"tan"
	
	},
	"& .MuiOutlinedInput-root":{

		"& fieldset":{

			borderColor:"tan"


		},
		
		"&:hover fieldset":{

			borderColor:"tan"


		},
		
		"&.Mui-focused fieldset":{

			borderColor:"tan"


		},
		},
			

}

})(TextField)

const Hireme = ()=>{

	const classes = useStyles()

	function sendEmail(e) {

		e.preventDefault();
		emailjs.sendForm('gmail', 'portfolio', e.target, 'user_8IO2g6BbQttCOHewv1gBo')
		.then((result) => {
		console.log(result.text);
		}, (error) => {
		console.log(error.text);
		});
		e.target.reset()

		}
	
	return(
	
	<div>
	<Navbar/>
	<Box component="div" style={{background:"#233",height:"100vh"}}>

   <Grid container justify="center">

<Box component="form" className={classes.form} onSubmit={sendEmail}>
	

<Typography variant="h5" style={{color:"tomato",textAlign:"center",textTransform:"uppercase"}}>

 Hire Or Contact Me...   


</Typography>
<br/>

<InputField

fullWidth={true}
label ="Name"

variant="outlined"
inputProps={{style:{color:"tomato"}}}

margin="dense"

size="medium"

name="name"

/>
<br/>

<InputField

fullWidth={true}
label ="Phone"

variant="outlined"

inputProps={{style:{color:"tomato"}}}

margin="dense"

size="medium"

name="phone"
/>
<br/>
<InputField

fullWidth={true}
label ="Email"

variant="outlined"

inputProps={{style:{color:"tomato"}}}

margin="dense"

size="medium"

name="email"
/>
<br/>
<InputField

fullWidth={true}
label ="Company Name"

variant="outlined"
inputProps={{style:{color:"tomato"}}}

margin="dense"

size="medium"

name="company"
/>
<br/>
<Button type="submit" variant="outlined" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>

Hire Me

</Button>

</Box>


   </Grid>


	</Box>
	
	</div>
	
	)
	
	
	
}


export default Hireme