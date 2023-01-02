import React from 'react'
import { Navbar } from '../Navbar'
import { makeStyles } from '@material-ui/core';
import scrabble from '../../assets/images/diego-ph-fIq0tET6llw-unsplash (1).jpg'


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
    tiles: {
        width: '30%',
        marginTop: '15px',
     
     
        
    }
    
    
})

export const About = () => {
    const classes =useStyles() 
    return (
       
<div>
<Navbar />
<div className={`${classes.background}`}>
<div className={classes.main_text}>
Here's a way to practice creativity and maybe even improve you mental health.
            <br></br>Find words that having meaning to you and create your own dictionary!
            <br></br> If you are feeling stuck, use an automatically generated inspirational quote to help jump start your brain cells.

            <br></br>
<img  className = {classes.tiles} src={scrabble} alt= 'scrabble'/>


</div>
</div>


</div>
    )
}