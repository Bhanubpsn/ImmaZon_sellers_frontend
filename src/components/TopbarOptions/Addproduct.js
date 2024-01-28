import React, { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar";
import Colorcirle from "../Colorcircle";

const Addproduct = (props) => {

    const [color, setcolor] = useState('#000000');
    const [allcolors, setallcolors] = useState([]);

    const handleClick = () => {
        // setcolor(color);
        allcolors.push(color);
        setallcolors(allcolors);
        console.log(allcolors);
    }

    useEffect(() => {
    
    }, [allcolors])

    return (
        <div className="container">
            <Sidebar />
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productname" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Write a little about the product.." />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Add Tags</label>
                    <select id="tags" className="form-select">
                        <option value={"..."}>Electronics</option>
                        <option>Clothing</option>
                        <option>Computers</option>
                        <option>Art</option>
                        <option>Sports</option>
                        <option>Games</option>
                    </select>
                </div>
                <div className="container my-5">

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">XS</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">S</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">M</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">L</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">XL</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">XXL</label>
                    </div>


                </div>
                <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                    <label htmlFor="productcolor">Choose Color : </label>
                    <input type="color" value={color} onChange={e => setcolor(e.target.value)} />
                    <div className="container mx-2">
                        <button type="button" className="btn btn-outline-success" onClick={handleClick}>Add</button>
                    </div>
                </div>


                <div className="container my-2">
                    <label htmlFor="productcolor">Product Color : </label>
                    {
                        allcolors && allcolors.map((clr)=>{
                            return <Colorcirle key={clr} color={clr}/>
                        })
                    }
                </div>

                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </form>
        </div>
    );
}

export default Addproduct;