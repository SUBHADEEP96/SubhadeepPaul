import React from 'react'
import { makeStyles ,withStyles  } from '@material-ui/core/styles';
import { BottomNavigation , BottomNavigationAction } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import CallIcon from '@material-ui/icons/Call';

import {Link} from 'react-router-dom';


const useStyles = makeStyles({

    root:{
        
        background:"white",
        
        "& .MuiBottomNavigationAction-root":{

minWidth:0,
maxWidth:250,

        }
,
"& .MuiSvgIcon-root":{
fill:"black",

    "&:hover":{
fill:"tomato",
fontSize:"1.8rem"
        
    }
            }
    
    }


})

const Footer = () => {

    const classes = useStyles()


    return (
        <div>
            <BottomNavigation width="auto" 
            
            
            style={{background:"#222"}}>


<BottomNavigationAction

component={Link}

to= {{ pathname: "https://github.com/SUBHADEEP96" }}

target="_blank"

className={classes.root}

style={{padding:0}}

icon={<GitHubIcon/>}

/>



<BottomNavigationAction

component={Link}

to= {{ pathname: "https://www.linkedin.com/in/subhadeep1996/" }}

target="_blank"


className={classes.root}

style={{padding:0}}

icon={<LinkedInIcon/>}

/>



<BottomNavigationAction

href="tel:7980314116"


className={classes.root}

style={{padding:0}}

icon={<CallIcon/>}

/>

            </BottomNavigation>
        </div>
    )
}

export default Footer
