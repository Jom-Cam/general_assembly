import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Grid, Paper, Container, Box, TextField, Typography, Button } from '@mui/material'



const Home = () => {

    const divStyle = {
        color: 'blue',
        border: 'solid 5px black',
        borderRadius: '20px',
        backgroundColor: 'white',
        padding: '5px',
      };
      
  const [animals, setAnimals] = useState([])

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const { data } = await axios.get('/api/animals/') // * <-- replace with your endpoint
        console.log(data)
        setAnimals(data)
      } catch (err) {
        setIsError(true)
      }
    }
    getAnimals()
  }, [])


  return (
    <div className='animalHome'>
        <Link style={divStyle} to={`/animals/city/`}> <span id='biome-jump'> To the City </span> </Link>
        <Grid container direction="row" className='allAnimalContainer' columnSpacing={3}>
        {animals.map((animal, i) => {
            console.log(animal)
            return (
              <Grid item md={3} sx={{ m: 2 }} className='animalContainers'>
                <Link id='animal-link' to={`/animals/${animal.id}/`}>
                    <div className={`animal-div`} id='css-fix' key={i} value={i}>

                        <h1> {animal.image} </h1>
                        <p> {animal.name} the {animal.species} </p>

                    </div>
                </Link>
              </Grid>
            )
          } 
        )}
        </Grid >
        <Link style={divStyle} to={`/animals/ocean/`}> <span id='biome-jump'>  To the Ocean </span> </Link>
      </div>
  )
}

export default Home