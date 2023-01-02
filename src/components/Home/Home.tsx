import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';


interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        background: 'radial-gradient(circle, rgba(238,174,202,1) 19%, rgba(148,187,233,1) 100%)',
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
      
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'Black',
        fontSize: '27px',
        textShadow: '1px 1px 2px #AD69E1, 0 0 1em blue, 0 0 0.2em blue',
       
    },
    button_text: {
        color: 'white',
        fontSize: '12px',
        padding: '4px',
        fontWeight: 'bold',
        textDecoration: 'none',
        border: 'solid white 1px',
        borderRadius: '30px',
        backgroundColor: '#AD69E1',
        boxShadow: '4px 5px #656565',
        "&:hover": {
            borderRadius: 30,
            backgroundColor: "white",
            color:'black',
            fontWeight: 'bold'
          }
       
      
    
    },
    
    
})

export const Home = ( props: Props ) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            

            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1> 
                <Button>
                    <Link to='/book' className={classes.button_text}>See Dictionary</Link>
                </Button>

                
            </div>

            </div>
          
            
            
           
        </>
    )
}