import React from "react";

const Sizecirle = (props)=>{

    const {size} = props;

    return(
        <span className="circle mx-2" style={{
            "width": "30px",
            "height": "30px",
            "background": "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)", 
            "borderRadius":" 50%",
            "display": "inline-block", 
            "display": "flex",
            "alignItems": "center",  
            "justifyContent": "center",  
            "verticalAlign": "middle",
            "color": "white",  
            "fontWeight": "bold",
          }}>{size}</span>
    );
}

export default Sizecirle;