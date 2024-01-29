import React, { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar";
import Colorcirle from "../Colorcircle";

const Addproduct = (props) => {

    const [color, setcolor] = useState('#000000');
    const [allcolors, setallcolors] = useState([]);

    const [currColor, setcurrColor] = useState('#000000');

    const [size, setsize] = useState([]);


    
    const [productdetail, setproductdetail] = useState({
        productname : "",
        productprice : 0,
        productdescription : "",
        producttag : "",
    })

    const handleClick = () => {
        const temp = allcolors;
        temp.push(color);
        setallcolors(temp);
        // console.log(allcolors);
        setcurrColor(color);
    }

    const handleSubmit= async(e) => {
        e.preventDefault();
        // console.log(productdetail);
        // console.log(allcolors);
        // console.log(size);

        const response = await fetch('http://localhost:5000/api/products/addmyproduct',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'sellerid' : sessionStorage.getItem('id') || localStorage.getItem('id'),
            },
            body: JSON.stringify({
                productname: productdetail.productname,
                price: productdetail.productprice,
                description: productdetail.productdescription,
                tags: [productdetail.producttag],
                size: size,
                color: allcolors,

            })
        });

        const product = await response.json();
        console.log(product);
    }

    const onChange = (e) => {
        setproductdetail({ ...productdetail, [e.target.name]: e.target.value });
    }

    useEffect(() => {

    }, [currColor]);

    return (
        <div className="container" style={{ position: 'relative', minHeight: '100vh' }}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/immazon-83e9e.appspot.com/o/login-removebg-preview.png?alt=media&token=c124c472-351b-44e2-b236-44c7954c6c95)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    position: 'center',
                    top: 200,
                    left: 300,
                    width: '50%',
                    height: '50%',
                    opacity: 0.3, // Set the desired opacity value (0 to 1)
                }}
            />
            <Sidebar />
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productname" name="productname" value={productdetail.productname} onChange={onChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Price</label>
                    <input type="number" className="form-control" id="productprice" name="productprice" value={productdetail.productprice} onChange={onChange}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Description</label>
                    <input type="text" className="form-control" id="productdescription" placeholder="Write a little about the product.." name="productdescription" value={productdetail.productdescription} onChange={onChange}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Add Tags</label>
                    <select id="producttag" name="producttag" className="form-select" onChange={onChange}>
                        <option>...</option>
                        <option value={"Electronics"}>Electronics</option>
                        <option value={"Clothing"}>Clothing</option>
                        <option value={"Computers"}>Computers</option>
                        <option value={"Art"}>Art</option>
                        <option value={"Sports"}>Sports</option>
                        <option value={"Games"}>Games</option>
                    </select>
                </div>
                <div className="container my-5">

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={()=>{
                            size.push('XS');
                            setsize(size);
                        }}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">XS</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" onChange={()=>{
                            size.push('S');
                            setsize(size);
                        }}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">S</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" onChange={()=>{
                            size.push('M');
                            setsize(size);
                        }}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">M</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" onChange={()=>{
                            size.push('L');
                            setsize(size);
                        }}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox4">L</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" onChange={()=>{
                            size.push('XL');
                            setsize(size);
                        }}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox5">XL</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6" onChange={()=>{
                            size.push('XXL');
                            setsize(size);
                        }}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox6">XXL</label>
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
                        allcolors && allcolors.map((clr) => {
                            return <Colorcirle key={clr} color={clr} />
                        })
                    }
                </div>

                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}

export default Addproduct;