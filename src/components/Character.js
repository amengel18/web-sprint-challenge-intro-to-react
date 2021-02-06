// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Character ({characters, action}) {
    


    return (
        <div className="container">
            <h2>{characters.name}</h2>
            <button onClick={() => action(characters.id)}>About Me</button>
        </div>
    )
} 

const StyledCharacterDiv = styled.div`

`