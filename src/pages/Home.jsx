import React ,{useEffect, useState}from "react";
import './Home.scss'
import Nav from "../components/Nav";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Home = ({search}) =>{
    const [data,setData] = useState([])
    const [categories,setCategories] = useState([])
    const [filter,setFilter] = useState([])
    async function getProducts(){
        const res = await axios.get("https://dummyjson.com/products/")
        const resCat = await axios.get("https://dummyjson.com/products/categories/")
        // console.log(res.data.products);
        // console.log(resCat.data);
        setData([...res.data.products])
        setCategories([...resCat.data])
    }
    useEffect(()=>{
        getProducts()},[])
    if(data.length==0)
    return(<Loading/>
)
    return(
        <>
        <div className="container-fluid p-3 d-flex" style={{overflow:"auto"}}>
            <button className="btn btn-outline-primary px-3 " onClick ={()=>setFilter("")}>All</button>
            {
                categories.map((cat,index)=>(
                    <button className="btn btn-outline-primary px-3 mx-2" key={index} onClick ={()=>setFilter(cat)}>{cat}</button>
                ))
            }
        </div>
        <div className="container">
            <div className="row">
                {
                    data.filter(i=>(i.title.toLowerCase().includes(search.toLowerCase())))//to search
                    .filter((dt)=>dt.category.includes(filter))
                    .map((dt,index)=>(
                        <div className="col-sm-6 col-md-4 col-lg-3 my-5 cl" key={index}>
                           <Link to={`/details/${dt.id}`} style={{textDecoration:"none", color:"black"}}>
                           <div className="card shadow p-3 mb-5 bg-body rounded crd my-3" style={{width: "16rem",border:"none"}}>
                                <div className="image" style={{width:"100%",height:"200px"}}>
                                    <img src={dt.thumbnail} className="card-img-top" alt="..." style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                                </div>
                                 <div className="card-body text-center">
                                    <h5 className="card-title">{dt.title.substring(0,15)}</h5>
                                        <p className="card-text">{dt.rating}</p>
                                        <p className="card-text">$ {dt.price} /-</p>
                                </div>
                            </div>
                           </Link>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Home