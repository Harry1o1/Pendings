import React, { useState } from 'react'
import axios from "axios"
// models.URLField(max_length = 200) 

function Addpost() {
    const [post, setPost] = useState('dfv')
    const [picture, setPicture] = useState('');


    const handleVideo = async (e:any) => {
        let form_data = new FormData();
        form_data.append('file', picture);
        form_data.append('upload_preset', 'emonstore');
        
        const res = await fetch('https://api.cloudinary.com/v1_1/emon1o1/image/upload', {
                method: 'POST',
                body: form_data
        })
        const dara2 = await res.json()
        const uriwep1 = dara2.url
        
        console.log(dara2)
        console.log(uriwep1)
        
        
    }

    const video = picture
    

    
    
    const handlesubmit = async (e:any) => {
        e.preventDefault();
        
        
        
        let form_data = new FormData();
        form_data.append('file', picture);
        form_data.append('upload_preset', 'emonstore');
        
        const res = await fetch('https://api.cloudinary.com/v1_1/emon1o1/image/upload', {
                method: 'POST',
                body: form_data
        })
        const dara2 = await res.json()
        const uriwep1 = dara2.url
        const uriwep2 = await res.url
        
        console.log(dara2)
        console.log(uriwep1)
        console.log(uriwep2)
        
        
        
        const res3 = await fetch('https://pro-component-express1o1.herokuapp.com/image', {
            method: 'POST',
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                Accept: "application/json; charset=UTF-8",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "post": `${ post }`,
                "iurl": `${ uriwep1 }`,
            })            
        })
        const dara = await res3.json()        
        console.log(dara);
        
        
        
        
    };




    return (
       <>
          <div>
            <h1>Upload a video</h1>
            <form onSubmit={ handlesubmit } >
              <div >
                <input type='text' onChange={(e:any) => setPost(e.target.value)} />
                <input type="file" accept="image/png, image/jpeg" onChange={(e:any)=>{setPicture(e.target.files[0])}} />
                <input type="submit" />
              </div>
            </form>
          </div>
          <img width='400' src = { video ? URL.createObjectURL(video) : "" }/>
       </>
    )
}

export default Addpost


