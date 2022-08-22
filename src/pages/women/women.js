import React from 'react';
import { useState, useEffect } from "react";
import './women.css';
import { getProducts } from '../../firebase/products';
import { Card } from '../../components/card/card';
import { Link } from 'react-router-dom';
import addFavourit from '../../components/store/actions/fav';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {AiOutlineHeart} from 'react-icons/ai';




const Women = () => {
    const [women, setWomen] = useState([]);
     useEffect( () => {
        async function prdlist() {
             setWomen(await getProducts("Women")); 
        }
        prdlist();
    }, [])
    console.log(women)

    // add favorite product



    const dispatch = useDispatch();
    const f = useSelector((state) => { return state.fav.favProducts})
    const [favMenu, setfavMenu] = useState(f);

    const addFavorite = (productid, productname, productprice) => {
        let favProduct = { id: productid, name: productname, price: productprice };
        if (favMenu.some(fav => fav.id == favProduct.id)) {
            setfavMenu(favMenu.filter(f => f.name != favProduct.name))
        }
        else {
            setfavMenu(favMenu.concat(favProduct))
        }
    }
    dispatch(addFavourit(favMenu));

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='column'>
                            <h5>New Arrivals</h5>
                            <p>Dresses</p>
                            <p>Shoes & Accessories</p>
                            <p>Tops</p>
                            <h5 className='mt-5'>Shop By Product</h5>
                            <p>All</p>
                            <p>T-Shirts</p>
                            <p>Shoes</p>
                        </div>
                    </div>
                    <div className='col-9'>
                        <img className='img-fluid mb-3' src="https://eg.hm.com/sites/g/files/bndsjb1566/files/2019-12/dp-b1-MENA-w52-hm-SLUG-en-d_38.jpg" />
                        <h1>Women</h1>
                        <div className="row">
                            {women.map((womenPrd) => {
                                return (
                                    <>

<div class="col-md-3 py-2">
        <div class="card-sl">
            <div class="card-image">
                <img
                    src="https://i.pinimg.com/originals/46/71/80/4671800b2966c2d08f8cff837e467431.jpg" />
            </div>
            <a class="card-action" >
                <button className=
                {`btn btn-warning${favMenu.some(i => i.id == womenPrd.id) ? 'btn btn-danger' : 'btn btn-warning'}`}
                 onClick={() => addFavorite(womenPrd.id,womenPrd.name, womenPrd.price)}><AiOutlineHeart style={{width:"25px",height:"30px"}}/></button></a>
            <div class="card-heading">
            {womenPrd.name}
            </div>
            <div class="card-text">
            {womenPrd.price}
               </div>
               <a href="#"  class="card-button">Add To Cart</a>

               {/* <Link to={`/details/${prd.id}`} key={prd.id}><a href="/" class="card-button">Add To Cart</a></Link> */}
        </div>
    </div>




{/* 
                                    <Card key={womenPrd.id} womenPrd={womenPrd}
                                    name = {womenPrd.name}
                                    price={womenPrd.price}
                                    id={womenPrd.id}
                                    cat={womenPrd.cat}
                                    img={"https://eg.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/14317405/2b64a8b346e7f171d9d8b3f4d462e2fa45a27d74/1/2b64a8b346e7f171d9d8b3f4d462e2fa45a27d74.jpg?itok=zXXeEJgi"}
                                    /> */}
                                </>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Women;
