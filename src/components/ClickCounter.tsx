import React , {useState} from 'react'

const ClickCounter = () => {
    const [counter, setcounter] = useState(0);
    return (
        <div>
            <p>counter value is --- {counter}</p>
            <button onClick={()=>setcounter(pre=>pre+1)}>ADD</button>
            
        </div>
    )
}

export default ClickCounter
