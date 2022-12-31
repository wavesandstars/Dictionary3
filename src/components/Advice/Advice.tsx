import react from 'react'
import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
   
    background: {
        backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
        
    },
    para: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize: '40px',
        margin: '150px',
        paddingTop: '100px'
       
    },
    wrap: {
        margin: '10px',
        textAlign: 'center'  

    },
   
})


export const Advice = () => {
    const classes = useStyles();
    const [advice, setAdvice] = useState("");
    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <>
    <div>
        <Navbar />
        <div className={`${classes.background}`}>
        <div className={`${classes.wrap}`} >
        <p className={`${classes.para}`}>{advice}</p>
        <h5>  (Refresh the page to generate a new quote)</h5>
        </div>
        </div>
    </div>;
    </>
)};



