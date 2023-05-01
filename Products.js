import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './products.css'
function Products() {
    const [Products, setProducts] = useState([]);
    const [cart, setCart]= useState([])


    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((resutl)=>{
            console.log(resutl.data)
            setProducts(resutl.data)
        })
    },[])

    function handleToCart(e, id){
        e.preventDefault()
        setCart([...cart, Products[id]])
    }

    function existInCart (productId){
        let exists = false
        cart.forEach((c)=>{
            if(c.id === productId) exists = true;
        })
        return exists
    }
    console.log(cart)



    return (
        <>
        <div className='products-container'>
            <h2>Products</h2>
            <div className='products'>
                {Products.map((Product, index)=>{
                    return(
                        <div className='product' key={index}>
                            <img src={Product.image} alt={Product.title}/>
                            <h3>
                                <a href=''>{Product.title}</a>
                            </h3>
                            {
                                (existInCart(Product.id))
                                ? (
                                <a href='' className='addedToCart'> Added to cart</a> 
                                )
                                :(
                                    <a href='' className='addToCart '
                                    onClick={(e)=> handleToCart(e,index)}>Add to cart</a>
                                )                            
                            }



                            {/* <a className='addToCart' href='' onClick={(e)=> handleToCart(e, index)}>Add To Cart</a> */}

                        </div>
                    )
                })}
            </div>
        </div>

    </>

)
}

export default Products