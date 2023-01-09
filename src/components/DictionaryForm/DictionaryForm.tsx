import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseSavedword, chooseMeaning, chooseSpeechtype } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface WordFormProps {
  id?:string;
  data?:{}
};

interface WordState {
  savedword: string;
  meaning: string;
  speechtype: string;
  
};

export const WordForm = (props:WordFormProps) => {

  const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
  const store = useStore();
  const name = useSelector<WordState>(state => state.savedword);
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => { //handle our data when we submit
      console.log(props.id)
      // The ! is for strictly typed Typescript stuff
      if(props.id!){ //if props.id exists
          server_calls.update(props.id!, data);
          console.log(`Updated:${data} ${props.id}`);
          console.log(data);
          setTimeout( () => {window.location.reload()}, 1000);
          event.target.reset();
      } else {
          // Dispatch basically updates our state / Redux store
          dispatch(chooseSavedword(data.savedword));
          dispatch(chooseMeaning(data.meaning));
          dispatch(chooseSpeechtype(data.speechtype));
          server_calls.create(store.getState());
          setTimeout( () => {window.location.reload()}, 1000)
      }
  }
  return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="savedword">Word</label>
                <Input {...register('savedword')} name="savedword" placeholder='Word'/>
            </div>
            <div>
                <label htmlFor="meaning">Meaning</label>
                <Input {...register('meaning')} name="meaning" placeholder='Meaning'/>
            </div>
            <div>
                <label htmlFor="speechtype">Part of Speech</label>
                <Input {...register('speechtype')} name="speechtype" placeholder='Part of Speech'/>
            </div>
            
            <Button type='submit'>Submit</Button>
        </form>
    </div>
)
}
