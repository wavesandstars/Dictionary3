import React from 'react'
import { Navbar } from '../Navbar'
import { makeStyles } from '@material-ui/core';
import like from '../../assets/images/yana-nikulina-1HtzdbptBr4-unsplash (1).jpg'




const useStyles = makeStyles({
    
    background: {
        backgroundImage: 'radial-gradient(circle, rgba(238,174,202,1) 19%, rgba(148,187,233,1) 100%)',
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#605E9A',
        lineHeight: "24px",
        marginTop: '30px',
        marginBottom: '10px',
        fontSize: '16px'
    },
    heart: {
        width: '20%',
        marginTop: '40px',
     
     
        
    }
    
    
    
})

export const Contact = () => {
    const classes =useStyles() 
    return (
       
<div>
<Navbar />
<div className={`${classes.background}`}>
<div className={classes.main_text}>
I'd love your feedback, but I'd love if you share my website even more! 
            If you don't like it, just move on. Thanks! Aloha!
         
<div>
    <img  className = {classes.heart} src={like} alt= 'heart'/>
</div>


</div>
</div>


</div>
    )
}