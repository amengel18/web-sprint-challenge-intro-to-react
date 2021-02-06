// Write your Character component here
import React from 'react'

export default function Character (props) {
    const { people } = props;

    return (
        <div className="container">
            <h1>{people.name}</h1>
            <div className="info">
                <p>Gender: {people.gender}</p>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Birth Year: {people.birth_year}</p>
                <p>Eye Color: {people.eye_color}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Films: {people.films}</p>
            </div>
        </div>
    )
} 