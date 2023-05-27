import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import pic from "./img/Cart.jpg";
import Product from "./product";

const Productcart=()=>{
    const remainingProduct = JSON.parse(window.localStorage.getItem('MyList') || 0);
   // console.log(remainingProduct);
    const [cartVal,setCartVal]=useState(remainingProduct);
    const products=[
        {
            pID:1,
            pName:"Shirt",
            pCost:"INR 750",
            pColor:"Black",
            pImage:"",
            pDiscrption:"Modle 2023",
        },{
            pID:1,
            pName:"Laptop",
            pCost:"INR 75000",
            pColor:"Gray",
            pImage:"",
            pDiscrption:"Modle 2023",
        },{
            pID:1,
            pName:"LED TV",
            pCost:"INR 55000",
            pColor:"White",
            pImage:"",
            pDiscrption:"Modle 2023"
        }
    ];
    useEffect(() => {
        localStorage.setItem("MyList", JSON.stringify(cartVal));
        },[cartVal]);
    const handleAdd=()=>{
      setCartVal(cartVal+1);
    }

    const handleRemove=()=>{
        if(cartVal>0)
        {
            setCartVal(cartVal-1);
        }
     
    }
    return(
        <div>
            <nav className="flex w-full bg-white text-right space-x-4 p-0 h-[120px]">
               <div className="h-[120px] w-[100px] ml-[90%]">
                <div className="m-0 p-0">
               <img src={pic} height="100px" width="100px" /></div><div className="w-[100px] h-[20px] bg-black text-white text-center m-0 p-0">{cartVal}</div>
               </div>
            </nav>
            <div className="w-full">
               <Product productList={products} handleAdd={handleAdd} handleRemove={handleRemove}/>
            </div>
        </div>
    )

}

export default Productcart;