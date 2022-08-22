import React, { useState } from "react";
import { useSelector ,  useDispatch } from "react-redux";
import './fav.css';
import addFavourit from '../../components/store/actions/fav';
import {AiFillDelete} from 'react-icons/ai';

const Fav = () => {

    const dispatch = useDispatch()
    const productList = useSelector((state)=>state.fav.favProducts);
    // console.log(productList);
    const [moreFav,setmoreFav]=useState(productList);
    
    const remove = (data) =>{
        setmoreFav(moreFav.filter(ele=>ele.id !=data))
    }
    
    dispatch(addFavourit(moreFav));
    // const imgURL="/";
    
    const EmptyMessage = () => {
        if (productList.length > 0) {
          return;
        }
        return (
            <div class="col-sm-12 empty-cart-cls text-center" >
            <h3><strong>Your Favorits is Empty</strong></h3>
                <h4>Add something to make me happy </h4>
                <a href="/home" class="btn btn-primary cart-btn-transform m-3" data-abc="true">Continue Shopping</a>
            </div>
          );
      }

      const FavMenu = () => (
        productList.map((prd)=>{
            return (
                

              <div class="col-md-3 py-2" key={prd.id}>
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src="https://i.pinimg.com/originals/46/71/80/4671800b2966c2d08f8cff837e467431.jpg" />
                    </div>
                    <a class="card-action" >
                        <button className=
                      {`btn btn-warning${(prd.id) ? 'btn btn-danger' : 'btn btn-warning'}`} onClick={()=>remove(prd.id)}><AiFillDelete style={{width:"20px",height:"30px"}}/></button></a>
                    <div class="card-heading">
                    {prd.name}
                    </div>
                    <div class="card-text">
                    {prd.price}
                       </div>
                    <a href="#" class="card-button">Add To Cart</a>
                </div>
            </div>
                        )
                    })
      )

    return (
        <div className="row g-5 py-4 mt-5 container-fluid mx-auto ">

				 
		
						<div class="card">
						<div class="card-header">
						<h1>MY FAVORITES</h1>
						</div>
                        <div class="row py-3">

                        { EmptyMessage() }
                        { FavMenu()}

								</div>
						</div>
				</div>
				

    );
}

export default Fav;
