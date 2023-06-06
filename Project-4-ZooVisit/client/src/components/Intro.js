import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Container, Box, TextField, Typography, Button } from '@mui/material'

const Intro = () => {
    const navigate = useNavigate()

    const handleEnter = () => {
        navigate('/landing');
    }

  return (
    <>
    <div className='IntroContainer'>
    <div className="form-page">
            <Container>
                <Grid container direction="column" md={12} alignItems="center" rowSpacing={2}>
                    <Grid item md={12}>
                        <Paper sx={{ backgroundColor: '#FFDB58', mt: 20, p: 2, borderRadius: 2}}>
                            <Grid container direction="column" rowSpacing={2} alignItems="center">
                                <Grid item>
                                    <Typography align="center" variant="h3"> Welcome to the Zoo Trip! </Typography>
                                    <Typography align="center" variant="h4"> Please mind the animals! <br />Feel free to observe them in thier natural habitats as well! <br /> 🏙️ 🌲 🌊 </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        onClick={handleEnter}
                                    >
                                        Lets Enter! 
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
      </div>
    </>
  )
}

export default Intro