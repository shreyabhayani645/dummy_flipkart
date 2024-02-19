import './App.css';
import {Container , Row , Col, Button} from 'react-bootstrap';
import { FaSearch , FaShoppingCart , FaStar } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Single_itm() {

  const {id} = useParams();

let [prod,setprod]=useState([]);
     useEffect(()=>{
     axios.get(`https://dummyjson.com/products/${id}`)
     .then(function (response) {
          setprod(response.data);
          // console.log(response.data);
          setselectedImage(response.data.images[0] || null);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
   },[]);
   
let [selectedImage,setselectedImage]=useState(null);
  const handleImageClick=(image)=>{
    setselectedImage(image);
}

  return (
    <div className="App">
      <div className='hed_color'>
        <Container>
          <Row>
            <Col lg={3}>
              <img src={require("./image/logo.png")} className='logo_img'></img>
            </Col>
            <Col lg={4}>
              <div className='search_box'>
                <input type='text' placeholder='Search for product,brands and more' size={45} className='search'></input>
                <i className='search_icon'><FaSearch></FaSearch></i>
              </div>
            </Col>
            <Col>
              <input type='button' value={"Login"} className='login_btn'></input>
            </Col>
            <Col>
              <div className='cart'>
                <i className='cart_icon'><FaShoppingCart></FaShoppingCart ></i>
                <span className='c_font'>Cart</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='single_item d-flex'>
        <Row className='d-flex'>
          <Col lg={1} className='thmb_img'>
            {
            prod.images && Array.isArray(prod.images) && prod.images.map((ele, ind) => (
                <ul key={ind} onClick={() => handleImageClick(ele)}>
                  <li><img src={ele} alt={`Image ${ind + 1}`} className='many_img'/></li>
                </ul>
              ))}
          </Col>
          <Col lg={4}>
          { selectedImage && (
            <div className='selected'>
              {/* <div><img src={require("./image/camero.jpg")}className='single_img'></img></div>           */}
              <img src={selectedImage} alt="Selected Image" className='single_img'/>
            </div>
          )}
          <div className='d-flex'>
            <button className='cart_btn'><span className='single_icon'><FaShoppingCart></FaShoppingCart></span> ADD TO CART</button>
            <button className='cart_btn1'><span className='single_icon'><FaBoltLightning></FaBoltLightning></span> BUY NOW</button>              
          </div>     
          </Col>
          <Col>
            <p className='single_p'> Canon PIXMA MegaTank G3770 Multi-function WiFi Color Ink Tank Printer with Black (135 ml) & Color (70 ml) ink bottles  (White, 4 Ink Bottles Included)</p>
            <div>
              <button className='s_ret'>4.2 <FaStar></FaStar></button>
              <span className='rat_r'>508 Ratings & 57 Reviews</span>
            </div>
            <div>
              <p className='s_price'>Special price</p>
            </div>
            <div className='d-flex'>
              <h5 className='rup'>₹14,999</h5>
              <span className='s_rup'><strike>₹20,270</strike></span>
              <span className='off'>26% off</span>
            </div>
            <div>
              <p className='s_avil'>Available offers</p>
              <div className='d-flex'><p className='s_bank'>Bank Offer</p><span className='s_per'>10% off on Axis Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C</span></div>
              <div className='d-flex'><p className='s_bank'>Bank Offer</p><span className='s_per'>10% off on HDFC Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C</span></div>
              <div className='d-flex'><p className='s_bank'>Bank Offer</p><span className='s_per'>10% off on Axis Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C</span></div>
              <div className='d-flex'><p className='s_bank'>Special Price</p><span className='s_per'>Get extra 11% off (price inclusive of cashback/coupon)T&C</span></div>
            </div>
            <div>
              <p className='s_view'>View 11 more offers</p>
              <div>
                <p className='s_exc'>Buy without Exchange</p>
                <div className='all_exc'>
                 <div className='d-flex'>
                  <input type='radio' checked></input>
                  <p className='s_buy'>Buy with Exchange</p>
                 </div>
                  <p>Get extra ₹400 off on exchange of select models</p>
                  <p className='pin'>Enter pincode to check if exchange is available</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
       
      </div>
    </div>
  );
}

export default Single_itm;