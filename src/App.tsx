import React from 'react'
import './styles.css'
import IMAGE from './logo.png'

const App = () => {
    return (
        <div>
            this is from tsx file 
            <img src={IMAGE} alt="vueLogo" width="100" height="100" />
        </div>
    )
}

export default App
