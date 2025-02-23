import { useEffect, useState } from "react";
const Pizza = () => {

const [entrada, setEntrada] = useState('');

useEffect(()=>{
    console.log('hola')
},[entrada])

    return(
        <input type='text'onChange={(e)=>{setEntrada(e.target.value)}}/>

    )
}

export default Pizza;