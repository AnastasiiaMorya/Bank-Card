import React from "react";
export default function Image1({url, className, alt }){
  
    return(
        <div>
                    <img src={url} alt={alt} className={className}/>


        </div>
    )

}