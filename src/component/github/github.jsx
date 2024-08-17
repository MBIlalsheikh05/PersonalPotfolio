import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data=useLoaderData()
    // const [data,setdata]=useState()
    // useEffect(()=>{
    //  fetch('').then(response=> response.json()).then(data => {
    //     setdata(data)
    //  })

    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white font-sans font-semibold text-2xl p-4">Github Followers:{data.followers}
        </div>
    )
}
export default Github
export const githubInfoLoader= async () =>{
    const response=await fetch('https://api.github.com/users/tahaaleeshaikh')
    return response.json()
}