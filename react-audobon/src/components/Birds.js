import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const Birds = () => {
    const [birds, setBirds] = useState([])
    useEffect(()=>{
        fetch('https://audubon-api.herokuapp.com/api/birds')
        .then((res) => res.json())
        .then(res => {
            console.log(res)
            setBirds(res)
        })
        .catch(console.error)
    }, []);
    return (
        <div>
            <section className="container">{birds.map(bird => {
                return (<Link to={`/details/${bird.id}`} key={bird.id}>
                <div className="card">
                    <div className="card-image">
                        <img
                        src={bird.image}
                        alt={bird.name}
                        />
                    </div>
                    <div className="card-title">
                        <h3>{bird.name}</h3>
                    </div>
                </div>
                </Link>
                        )
                 })}         
            </section>
            <h1>In Birds</h1>
        </div>
    )
}

export default Birds