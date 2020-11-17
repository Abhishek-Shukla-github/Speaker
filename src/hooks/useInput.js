import React,{useState} from 'react';

export default function useInput(initalVal) {
    const [value,setValue]=useState(initalVal);
    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    return [value,handleChange];
}
