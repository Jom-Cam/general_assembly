import React, { useState } from 'react'
import axios from 'axios'

// useNavigate allows us to redirect users to different routes the React way (no reload)
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Container, Box, TextField, Typography, Button } from '@mui/material'

// Import Bootstrap Components

const AuthLanding = () => {

    // navigate

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })

    console.log('here');

    const handleChange = (e) => {
        const newObj = { ...formData, [e.target.name]: e.target.value }
        setFormData(newObj)
        setFormErrors({ ...formErrors, [e.target.name]: '' })
    }


    const handleRegister = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="form-page">
            <Container>
                <Grid container direction="column" md={12} alignItems="center" rowSpacing={2}>
                    <Grid item md={12}>
                        <Paper sx={{ backgroundColor: '#FFDB58', mt: 20, p: 2, borderRadius: 2}}>
                            <Grid container direction="column" rowSpacing={2} alignItems="center">
                                <Grid item>
                                    <Typography variant="h4"> Register / Login to a Guardian Account </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        onClick={handleRegister}
                                    > Register
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AuthLanding