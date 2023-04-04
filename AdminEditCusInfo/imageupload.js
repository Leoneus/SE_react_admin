import React, { useState } from "react";

function ImageUpload(){

    const[image,setImage]=useState("");

    function coverToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
        };
        reader.onerror = error =>{
            console.log("Error: ", error);
        };
    }


    return (
        <div className="auth-wrapper">
           
            <div className="auth-inner" style={{ width: "auto" ,color: "white" , }}>
                {image==""|| image==null?"":<img width={250} height={250} src={image} className="center"/>}  
                <br></br>
                Upload
                <input
                accept="image/*"
                type="file"
                onChange={coverToBase64}
                /> 
                 
                
            </div>
        </div>

    )
}

export default ImageUpload;