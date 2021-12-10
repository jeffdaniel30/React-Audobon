import React from 'react'
import { useState, useEffect } from 'react';

const BirdDetails = ({match}) => {

    const [bird, setBird] = useState([])

    useEffect(() => {
      fetch(`https://audubon-api.herokuapp.com/api/birds/${match.params.id}`)
      .then(res => res.json())
      .then(res => setBird(res))
      .catch(console.err)
  })
  
    return (
        <div className="details-container">
          <img
            src={bird.image}
            alt={bird.name}
          />
          <div className="details">
          <h2>{bird.name}</h2>
            <h3>{bird.genus}</h3>
            <h4>Conservation Status</h4>
            <p>
              {bird.conservationStatus}
            </p>
            <a
              href={bird.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      );
}

export default BirdDetails