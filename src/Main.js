import { Container, Grid, Button, TextField, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

function Main() {

    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
    }


    const [loading_create, setLoading_create] = useState(false); // create alert
    const [loading_view, setLoading_view] = useState(false); // check all alerts of email
    const [loading_check, setLoading_check] = useState(false); // check token price


    // create alert
    function handleCreate(e) {
        console.log('hit registered');
    }

    // check alerts of email
    function handleView(e) {
        console.log('hit view all alerts of email');
    }

    // check price of token
    function handleCheck(e) {
        console.log('checking the price of token');
    }

    return(
        <>
            <div className='app-container'>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid item xs={4} style={gridItemStyle}>
                            <h3>Create an Alert</h3>
                            {/* <input type='text' className='textfield' /> */}

                            <TextField 
                              label="Email" 
                              variant="outlined" 
                              margin="normal" />
                            <TextField 
                              label="Token Contract" 
                              variant="outlined" 
                              margin="normal" />
                            <TextField 
                              label="Price Target" 
                              variant="outlined" 
                              margin="normal" />
                            
                            <Button
                              disabled={loading_create}
                              onClick={e=>handleCreate(e)} 
                              color="primary" 
                              variant="contained" 
                              size="large" 
                              style={{
                                marginTop: '1rem',
                                minWidth:'150px'
                              }}
                              disableElevation >
                                {!loading_create ? 'Create Alert' : (
                                    <>
                                        <CircularProgress disableShrink size={20} style={{
                                            marginRight: 15,
                                            marginLeft: -5,
                                            color: '#777777',
                                        }} />
                                        Creating...
                                    </>
                                )}
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={gridItemStyle}>
                            <h3>View Alerts</h3>

                            <TextField 
                              label="Email" 
                              variant="outlined" 
                              margin="normal" />
                              
                            <Button
                              disabled={loading_view}
                              onClick={e=>handleView(e)} 
                              color="primary" 
                              variant="contained" 
                              size="large" 
                              style={{
                                marginTop: '1rem',
                                minWidth:'150px'
                              }}
                              disableElevation >
                                {!loading_view ? 'View Alerts' : (
                                    <>
                                        <CircularProgress disableShrink size={20} style={{
                                            marginRight: 15,
                                            marginLeft: -5,
                                            color: '#777777',
                                        }} />
                                        Creating...
                                    </>
                                )}
                            </Button>
                        </Grid>
                        <Grid item xs={4} style={gridItemStyle}>
                            <h3>Check Price</h3>

                            <TextField 
                              label="Token Contract" 
                              variant="outlined" 
                              margin="normal" />
                              
                            <Button
                              disabled={loading_check}
                              onClick={e=>handleCheck(e)} 
                              color="primary" 
                              variant="contained" 
                              size="large" 
                              style={{
                                marginTop: '1rem',
                                minWidth:'150px'
                              }}
                              disableElevation >
                                {!loading_check ? 'Check Price' : (
                                    <>
                                        <CircularProgress disableShrink size={20} style={{
                                            marginRight: 15,
                                            marginLeft: -5,
                                            color: '#777777',
                                        }} />
                                        Creating...
                                    </>
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{
                position:'fixed',
                bottom: 10,
                left: 10,
                color: '#777',
                fontFamily: 'Inter',
                fontSize: '0.8rem',
            }}>
                Poo Alert (alpha)
            </div>
        </>
    );
}

export default Main;