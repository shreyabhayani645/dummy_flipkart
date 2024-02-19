import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Container , Row , Col} from 'react-bootstrap';
import { FaSearch , FaShoppingCart , FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { cartdata } from './app/reducer/Cartslice';


function Header() {

     const dispatch = useDispatch()
// category
let [category,setcategory]=useState([]);
let [item,setitem]=useState([]);
let [reset,setreset]=useState([]);
let [search,setsearch]=useState("");

// search box
// const Clickbtn = () => {
//      var data=reset.filter((item,index) => {
//           return item.category === search;
//      })
//      setitem(data);
//      setsearch("");
// }
const Clickbtn = async () => {
     try{
               const response=await axios.get(`https://dummyjson.com/products/search?q=${search}`);
               setitem(response.data.products);
               }catch(error){
                    setitem("error",error);
               }
               setsearch('');
}
useEffect(()=>{
     axios.get('https://dummyjson.com/products/categories')
     .then(function (response) {
     setcategory(response.data);
     // console.log(response.data);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
// all item
     axios.get('https://dummyjson.com/products')
     .then(function (response) {
          setitem(response.data.products);
          setreset(response.data.products);
          // console.log(response.data.products);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
   },[]);
// category onclick
const combtn = (ele) => {
     let comletebtn=reset.filter((item,index)=>{
          return item.category==ele;
     })
     setitem(comletebtn);
}
// add to cart
const carthandler = (item) => {
     // alert();
     console.log(item);
     dispatch(cartdata(item));
}
   
  return (
    <div className='all_cart'>
          <div className='hed_color sticky-top'>
          <Container>
               <Row>
                    <Col lg={3}>
                         <Link to="Header"><img src={require("./image/logo.png")} className='logo_img'></img></Link>
                    </Col>
                    <Col lg={4}>
                         <div className='search_box'>
                              <input type='text' placeholder='Search for product,brands and more' size={45} className='search' onChange={(e)=>setsearch(e.target.value)}></input>
                              <i className='search_icon'><FaSearch></FaSearch></i>
                              <input type='button' value={"Search"} className='login_btn' onClick={Clickbtn}></input>

                        </div>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                         <div className='cart'>
                              <Link to="/Cart"><i className='cart_icon'><FaShoppingCart></FaShoppingCart ></i></Link>
                              <span className='s_cart'>Cart</span>
                         </div>
                    </Col>
               </Row>
          </Container>
    </div>
     <Row>
          <Col lg={3} className='category_all'>
               <h1>Category</h1>
               {
                    category.map((ele,ind)=>{
                    return(
                         <>
                              <ul key={ind} className='cate_item'>
                                   <li><button onClick={()=>{combtn(ele)}} className='cate_btn'> {ele} </button></li>
                              </ul>
                         </>
                         )
                    })
               }     
          </Col>
          <Col lg={8}>
               <div className='pere'>Abgrow Health & Personal Care Appliances ,Beardo Health & Personal Care Appliances ,FASTFRIEND Health & Personal Care Appliances ,Apple Health & Personal Care Appliances ,PHILIPS Health & Personal Care Appliances ,IMC Health & Personal Care Appliances ,Wahl Health & Personal Care Appliances ,Braun Health & Personal Care Appliances ,Havells Health & Personal Care Appliances ,krishna Health & Personal Care Appliances</div>
                    <div className='all_item'>
                         <div className='single_item'>
                         {
                              item.map((ele,ind)=>{
                                   return(
                                   <>
                                        <div className='d-flex item'>
                                             <div>
                                             <Link to={`/Single_itm/${ele.id}`} target='_blank'><img src={ele.images[0]} className='thumbnail'></img></Link>
                                             </div>
                                             <div className='all_dec'>
                                                  <div className='d-flex descr_d'>
                                                       <p>Description:</p><span>{ele.description}</span>
                                                  </div>
                                                  <div className='d-flex descr'>
                                                       <p>price:</p><span>${ele.price}</span>
                                                       <p>Discount:</p><span>{ele.discountPercentage}% OFF</span>
                                                  </div> 
                                                  <div className='d-flex descr'>
                                                       <p>Rating:</p><span>{ele.rating}%</span>
                                                       <p>Stock:</p><span>{ele.stock}</span>
                                                       <p>Brand:</p><span>{ele.brand}</span>                                                      
                                                  </div>
                                                  <div className='descr d-flex'>
                                                       <p>Category:</p><span>{ele.category}</span>
                                                  </div> 
                                                  <div>
                                                      <button className='cart_btn2' onClick={()=>carthandler(ele)}><FaShoppingCart></FaShoppingCart > Add to Cart</button>
                                                  </div>                                           
                                             </div>
                                        </div>                                  
                                   </>
                                   )
                              })
                         }     
                         </div>

                    </div>
          </Col>
     </Row>
    </div>
  );
}
export default Header;
