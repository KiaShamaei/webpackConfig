import React from 'react'
import "./styles.css"
import IMAGE from './g.png';
import LOGO from './logo.svg'

const App = () => {
    return (
		<>
		<img src={IMAGE} alt="reactGoogle" width="300px" height="200px" />
		<img src={LOGO} alt="reactGoogle" width="300px" height="200px" />



        <h3>
            this is from tsx file {process.env.NODE_ENV} - {process.env.name}
        </h3>

		</>
    )
}

export default App
