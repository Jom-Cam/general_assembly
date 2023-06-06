import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Box, TextField, Typography } from '@mui/material'
import Container from 'react-bootstrap/Container'

const Review = () => {
    const { animalId } = useParams()
    console.log('animal Id ---->' ,animalId)
    const localToken = localStorage.getItem('animal-token')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
      text: '',
      animal: '',
    })
  
    const [errors, setErrors] = useState({
      text: { message: '' }
    })
  
    const handleChange = event => {
        // console.log(event.target)
    //   if ( event.target.name === 'rating') {
    //     setFormData({ ...formData, [event.target.name]: parseInt(event.target.value) })
    //   } else { 
      setFormData({ ...formData, [event.target.name]: event.target.value, animal: animalId })
    //   }
    //   console.log(formData)
      setErrors({ ...errors, [event.target.name]: '' })
    }
  
    const handleSubmit = async (event) => {
      console.log(formData)
      console.log(localToken)
      event.preventDefault()
    //   console.log(animalId)
      try {
        await axios.post(
          `/api/reviews/`,
          formData,
          { headers: {
            Authorization : `Bearer ${localToken}`
          } }
        )
        navigate(`/animals/${animalId}`) 
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <> 

        <Container>
        <Grid container direction="column" md={12} alignItems="center" rowSpacing={2}>
        <Grid item md={12}>
        <Paper sx={{ backgroundColor: '#FFDB58', mt: 20, p: 2, borderRadius: 2}}>
        <Grid container direction="column" rowSpacing={2} alignItems="center">
        <Grid item>
            <div id='reviewForm'>
            <form className='review-form' onSubmit={handleSubmit}>
            
            <label id='review-tittle' >Review your Animal</label>

            <input id='review-text' className='text-input' name='text' type="text" value={formData.text} onChange={handleChange} /> 

            <br></br>

            <input className='submit-input' type="submit" value="Submit" />

            </form>
            </div>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
        </Grid>
        </Container>
    </>
    )
  }
  
  export default Review