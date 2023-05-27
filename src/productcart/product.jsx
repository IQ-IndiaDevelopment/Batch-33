import React from "react";
import Button from "../todolist/component/common/button"

const Product=({productList,handleAdd,handleRemove})=>{
    console.log(productList)
    return(
        <div className="grid grid-cols-6 h-[200px] ">
        {productList.map((item)=>{
          return(
             <div className="col-span-2  mx-4 my-4 bg-white rounded-3xl border border-4 border-green">
            <div className="flex flex-col h-[200px]">
                  <div><img src="" alt="Product Item"/></div>
                  <div>
                    <p className="w-full mx-2 my-2">
                        <span className="text-green text-lg font-bold">Name</span>
                        <span className="text-lg font-medium mx-2">{item.pName}</span>
                    </p>
                    <p className="w-full mx-2 my-2">
                        <span className="text-green text-lg font-bold">Cost</span>
                        <span className="text-lg font-medium mx-2">{item.pCost}</span>
                    </p>
                    <p className="w-full mx-2 my-2">
                        <span className="text-green text-lg font-bold">Color</span>
                        <span className="text-lg font-medium mx-2">{item.pColor}</span>
                    </p>
                    <p className="w-full mx-2 my-2">
                        <span className="text-green text-lg font-bold">Description</span>
                        <span className="text-lg font-medium mx-2">{item.pDiscription}</span>
                    </p>
                   
                  </div>
            </div>

              <div className="flex">
                 <Button name="Add to Cart" value={item?.id} styles="bg-green w-24 h-6 mx-16 my-4 rounded-md  text-white hover:bg-opacity-90" onClick={handleAdd}/>
                 <Button name="Remove"  value={item?.id} styles="bg-green w-24 h-6 mx-6 my-4 rounded-md  text-white hover:bg-opacity-90" onClick={handleRemove}/>
              </div>
          </div>
        )})}
        </div>
    )
}

export default Product;