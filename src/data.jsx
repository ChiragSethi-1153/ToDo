import React from 'react'
import { useState, useEffect } from 'react';

function data() {
    
    const [data, setData] = useState([]);
    useEffect(() => {
     const storedData = JSON.parse(localStorage.getItem('data'));
     if(storedData){
      setData(storedData);
     }
    }, []);
    
    useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

  return (
    <div>
      
    </div>
  )
}

export default data


