import React from "react";

const Colorcirle = (props)=>{

    const {color} = props;

    return(
        <span className="circle mx-2" style={{
            "width": "30px",
            "height": "30px",
            "background-color": color, 
            "border-radius":" 50%",
            "display": "inline-block", 
            "vertical-align": "middle"
          }}></span>
    );
}

export default Colorcirle;