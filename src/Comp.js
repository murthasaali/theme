import { useState } from "react";
import './Comp.css';

const Comp=()=>{
    const [theme,setTheme]=useState(false)
    const value=theme?"white":"dark"
    const change=()=>{
        setTheme(abc=>!abc)

    }


    return(
       <div className={value}> 

        <h1>hello buddies</h1>
        <button onClick={change}>change theme</button>
       
       </div>

    )
}
export default Comp;