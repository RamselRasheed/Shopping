import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Cart = ({setCnt,cnt}) => {
    const [cart,setCart] = useState([])
    let [count,setCount] = useState(0)
    const navigator = useNavigate()
    useEffect(()=>{
        const data = []
        const keys = Object.keys(localStorage);
        for(let i=0;i<keys.length;i++){
            data.push(JSON.parse(localStorage.getItem(keys[i])))
        }
        setCart(data)
    },[count])

    const removeProduct=(key)=>{
        localStorage.removeItem(key)
        setCount(count++)
    }

    const buy=()=>{
        localStorage.clear()
        setCnt(cnt+=1)
        navigator('/')
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            {
                cart.map((ct,index)=>(
                    <div className="col-lg-12 d-flex my-3 justify-content-between align-items-center border " key={index}>
                        <div className="star1 ">
                            <div className="st d-flex">
                                <img src={ct.thumbnail} style={{height:"200px"}} alt="" />
                                <div className="det">
                                    <h2>{ct.title}</h2>
                                    <h3>${ct.price}/-</h3>
                                </div>
                            </div>
                        </div>
                        <div className="star2">
                            <button className="btn btn-danger" onClick={()=>{removeProduct(ct.id)}}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">   
        {
            cart.length!=0?<button className="btn btn-success"onClick={buy}>Buy</button>:<Link to={'/'}><button className="btn btn-warning text-light">Add Item To Cart</button></Link>
        }
        </div>
      </div>
    </div>
  )
}

export default Cart
