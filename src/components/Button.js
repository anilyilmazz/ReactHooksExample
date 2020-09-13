import React , { useState } from 'react'

function Button() {

    const [buttonText,setButtonText] = useState(0)
    return (
        <div>
            <button onClick = {() => setButtonText(buttonText + 1)} >{buttonText}</button>
        </div>
    )
}

export default Button;

