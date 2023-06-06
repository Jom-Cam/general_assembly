import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import { margin } from '@mui/system'

const AnimalDetails = () => {

    const divStyle = {
        color: 'black',
        border: 'solid 2px black',
        borderRadius: '20px',
        backgroundColor: 'white',
        padding: '20px',
        fontSize: '20px',
        margin: '10px'

      };

    const [ animal, setAnimal ] = useState(null)
    const [ hasError, setHasError ] = useState({ error: false, message: '' })
    const [ image, setImage ] = useState("")
    const [ reviews, setReview ] = useState(null)
    const { animalId } = useParams()

    useEffect(() => {

        const getSingleAnimal = async () => {
          try {
            const { data } = await axios.get(`/api/animals/${animalId}/`)
            setAnimal(data)
            console.log('DATA ------>', data)
          } catch (err) {
            setHasError({ error: true, message: err.message })
          }
        }
      getSingleAnimal()
      },[animalId])

    return (
        <div id='overall-animal-details'> 
        {animal && 
            <div className='animal-details'>
                <span id='animal_name'> {animal.name} </span>
                <div className='animalImgSide'>
                    <span id='animal-avatar'> {animal.image} </span>
                </div>
                <div className='animalInfoSide'> 
                <h7> What type of Animal it is: <br /> <span id="info"> {animal.type} </span></h7>
                <hr/>
                <h7> What Species the Animal is: <br /><span id="info"> {animal.species} </span></h7>
                <hr/>
                <h7> The Sound of the Animal: <br /><span id="info"> {animal.sound} </span></h7>
                <hr/>
                <h7> Animal Spotted: <br /><span id="info">{animal.biome}</span></h7>
                </div>
              <Link className='btn' id='btn-add-zoo' to="/"> <Button style={divStyle}> Play the Sound </Button> </Link>
              <Link className='btn' id='btn-leave-review' to={`/animals/${animalId}/reviews/`}> <Button style={divStyle}> leave a review </Button> </Link>

              <h3> Reviews </h3>
              {animal.reviews.map(review => {
          console.log(review)
          return <div key={review._id}>
            <div className='review-box'>
            <span className='user'>{review.owner.username}</span><span className='rating'>Rating : {review.rating}</span> <br /><br /> <span className='review-text'><em>{review.text}</em></span>
            </div>
          </div>
        })}
              </div> 
              } 



            </div>
    )
}
export default AnimalDetails