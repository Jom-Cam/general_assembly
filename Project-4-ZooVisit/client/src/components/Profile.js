import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

// useNavigate allows us to redirect users to different routes the React way (no reload)
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Container, Box, TextField, Typography, Button } from '@mui/material'

// Import Bootstrap Components

const Profile = () => {

    const [ profile, setProfile ] = useState(null)
    const [ hasError, setHasError ] = useState({ error: false, message: '' })
    const { userId } = useParams()

    useEffect(() => {

        const getSingleProfile = async () => {
          try {
            const { data } = await axios.get(`/api/auth/3/`)
            setProfile(data)
            console.log('DATA ------>', data)
          } catch (err) {
            setHasError({ error: true, message: err.message })
          }
        }
      getSingleProfile()
      }, [])

    // navigate

    const navigate = useNavigate()

    const handleVisit = () => {
        navigate('/animals')
      }

    return (
        <div className="form-page">
            {profile &&
            <Container>
                <Grid container direction="column" md={12} alignItems="center" rowSpacing={2}>
                    <Grid item md={12}>
                        <Paper sx={{ backgroundColor: '#FFDB58', mt: 20, p: 2, borderRadius: 2 }}>
                            <Grid container direction="column" rowSpacing={2} alignItems="center">
                                <Grid item>
                                    <img src='https://i1.sndcdn.com/avatars-0lTz4kbnLEal3gK8-z4H02A-t500x500.jpg' width={250} height={200} alt="placeholder" />
                                </Grid>
                                <Grid item>
                                    <Typography> Username: {profile.username} </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> Name: {profile.name} </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography> Email: {profile.email}  </Typography>
                                </Grid>
                                <Grid item>
                                    {/* <Button
                                        variant="contained"
                                        onClick={handleLogin}
                                        sx={{ borderRadius: '2px' }}
                                    >
                                        To my Zoo
                                    </Button> */}

                                    <Button variant="contained"
                                        onClick={handleVisit}
                                        sx={{ borderRadius: '2px' }} >
                                        To The Animals!
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
}
        </div>
    )
}

export default Profile