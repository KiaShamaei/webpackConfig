import React from 'react'
import "./styles.css"
import IMAGE from './g.png';
import LOGO from './logo.svg'
import ClickCounter from './components/ClickCounter';

const App = () => {
    return (
		<>
		<img src={IMAGE} alt="reactGoogle" width="300px" height="200px" />
		<img src={LOGO} alt="reactGoogle" width="300px" height="200px" />
        <ClickCounter />



        <h3>
           edited done this is from tsx file {process.env.NODE_ENV} - {process.env.name}
        </h3>

		</>
    )
}

export default App
