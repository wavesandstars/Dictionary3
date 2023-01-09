import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar'
import { makeStyles, Box } from '@material-ui/core';




const useStyles = makeStyles({
      
  background: {
      backgroundImage: `linear-gradient(rgba(0, 49, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 100%)`,
      width: '100%',
      height: '80%',
      backgroundPosition: 'center',
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'Black',
      fontSize: '27px',
      textShadow: '1px 1px 2px #AD69E1, 0 0 1em lightblue, 0 0 0.2em white',
     
    },
    h3: {
      color: 'white',
      padding: '15px'

     
    },
    def: {
      color: 'blue',
      padding: '15px'
    },
    pos: {
      color: 'black',
      padding: '15px'
    },

    searchbar: {
      fontSize: '20px',
      padding: '10px',
      margin: '10px',
      border: 'black solid 2px',
      borderRadius: '7px'
    },
    searchbutton: {
      fontSize: '15px',
      padding: '5px',
      borderRadius: '7px',
      background: 'blue',
      color: 'white',
      cursor: 'pointer'
     

    }


  }) 
export const Searching =() =>{
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
     console.log(event)
    
    {/* @ts-ignore  */}
    setSearchTerm(event.target.value);  //event comes from the browser. updating react state 
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //allows you to write your own custom stuff and not do default action
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    
    const response = await fetch(url)
    console.log({response})
    const json = await response.json()
    console.log(json)
    setResults(json)


    
     
    }
  return (
   
    <>
    <div>
       <Navbar />
       <div className={`${classes.background}`}>
       <div className={` ${classes.main_text} `}>
    <form onSubmit={handleSubmit}>
      {/* @ts-ignore  */}
      <input placeholder = 'enter a word' className={classes.searchbar} type="text" value={searchTerm} onChange={handleChange} />
      <button  className={classes.searchbutton} type="submit">Search</button>  
     
    </form>

{
  results.length > 0 &&  //wont run if not true
  <div >
  {/* @ts-ignore  */}
   <h3 className={classes.h3}> Word: {results[0].word}  </h3> 
 
    {/* @ts-ignore  */}
   <p className={classes.def}> Definition: {results[0].meanings[0].definitions[0].definition}</p>
    {/* @ts-ignore  */}
    <p className={classes.pos}> Part of Speech : {results[0].meanings[1].partOfSpeech}</p>
   
    </div>
}
</div>
</div>
</div>
</>
  );
}