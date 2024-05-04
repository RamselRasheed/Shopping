import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = ({setCnt,cnt}) => {
    const navigator = useNavigate()
    const [data,setData]=useState({})
    const [pic,setPic]=useState("")
    const {id}=useParams()
    // console.log(id);
    async function getDetails(){
        const res = await axios(`https://dummyjson.com/products/${id}`)
        setData(res.data)
        setPic(res.data.thumbnail)
    }
    const addToCart=()=>{
        // console.log(data);
        const key = data.id;
        console.log(key);
        localStorage.setItem(key,JSON.stringify(data))
        setCnt(cnt=cnt+1)
        navigator('/cart')
    }
    useEffect(()=>{
        getDetails()
    },[])
//    console.log(data.images);
  return (
    <div>
        <div className="container ">
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-12">
                    {/* corousal */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
 <div style={{height:"400px",objectFit:"cover"}}>
 <img src={pic} style={{width:"100%",height:"100%"}} alt="no img" />
    </div> 
</div>

    <div className="row my-3 d-flex justify-content-evenly">
    {
        data.images?.map((img,index)=>(
            <div className="col-lg-2 " key={index}>
                <img src={img} alt="" style={{width:"50px",height:"50px"}} onMouseMove={()=>{setPic(img)}}/>
            </div>
            
        ))
    }
    </div>
    <div className="d-grid gap-5 col-6 mx-auto">
  <button className="btn btn-warning text-light" type="button" onClick={addToCart}>ADD TO CART</button>
</div>

               
                
                </div>
                {/* right side */}

                <div className="col-lg-6 col-md-8 col-sm-12">
                    <h1>{data.title}</h1>
                    <button className="btn btn-success" style={{fontWeight:"bold"}}>{data.rating}&#9733;</button>
                    <h6 className="text-secondary">Stock : {data.stock}</h6>
                   <div className="d-flex justify-content">
                   <p className="text-decoration-line-through text-secondary fw-light fs-3">${data.price}/-</p>
                   <p className="fs-3" style={{marginLeft:"10px"}}>${((data.price-data.discountPercentage)/100)*100}/-</p> 
                   </div>
                   <p className="my-0 text-success fw-light fs-5">{data.discountPercentage}% off</p> 
                    
                   <h5 className="text-secondary my-3">{data.description}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details
