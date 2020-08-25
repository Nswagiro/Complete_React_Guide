import React, { useState, useEffect} from 'react';

const Click = () => { 
   const [click, setClick] = useState(0) 
    useEffect(() => {
        document.title=`you have clicked ${click} times`
    })
    const styles = {
        backgroundColor: 'green',
        padding: '10px'
    }
        return (
            <div>
                <div id="for"></div>
                <button onClick={()=>setClick(click+1)}
                 style={{styles}}
                >ClickMe</button>
            </div>
        )
}
        
export default Click;