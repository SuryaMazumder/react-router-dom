import React, { useEffect, useState } from "react";

const Github = () => {
  const [data,setData]=useState('')   
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then((data)=>{
        console.log(data.message)
        setData(data)
    })
  },[])
 
//  const parts=data.message.split('/')
//  let dogName=parts[parts.length-2]
  return (
    <div className="text-center m-4 bg-gray-400 p-4 text-white">
    <img className="ml-auto mr-auto block w-50%" src={data.message}/>
      Random Dog Images
    </div>
  )
};

export default Github;
