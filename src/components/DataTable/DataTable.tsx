import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { WordForm } from '../ContactForm';


//  make and set up my data table 

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'savedword', headerName: 'Word', flex: 0.5 },
    { field: 'meaning', headerName: 'Meaning' , flex: 1.5 },
    { field: 'speechtype', headerName: 'Part of Speech', flex: 0.5 },
  
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { wordData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    return (
    
        <div style={{ height: 400, width: '100%' }}>
            <h2>My Words</h2>

        <DataGrid rows={ wordData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
						
          }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

       
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Word {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Word</DialogContentText>
                    <WordForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
        
    )
}