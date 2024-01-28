import React from "react";

const Colorcirle = (props)=>{

    const {color} = props;

    return(
        <span className="circle mx-2" style={{
            "width": "30px",
            "height": "30px",
            "backgroundColor": color, 
            "borderRadius":" 50%",
            "display": "inline-block", 
            "verticalAlign": "middle"
          }}></span>
    );
}

export default Colorcirle;