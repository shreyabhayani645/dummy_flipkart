import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useSelector , useDispatch } from 'react-redux';
import {useState } from 'react';
import { increment,decrement} from './app/reducer/Cartslice';


function Cart()
{
     const arr=useSelector((state)=>state.counter.value);
     const dispatch = useDispatch()

     const handleIncrement = (id) => {
          dispatch(increment({id}));
     }
     const handleDecrement = (id) => {
          dispatch(decrement({id}));
     }
     const price = (price,qut) => {
          return price * qut;
     }
     const totalbill=arr.reduce((total,item) => total+item.price * item.qut , 0);
     const discount = totalbill * 0.12;
     const totalafter = totalbill - discount;
     const gst = totalafter * 0.18;
     const finaltotal = totalafter + gst;
     return(
          <>
          <Table striped bordered hover>
               <thead>
               <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quntity</th>
                    <th>Total Price</th>
               </tr>
               </thead>
               <tbody>
                   {
                    arr.map((ele)=>{
                         return(
                              <>
                              <tr key={ele.id}>
                                   <td>{ele.id}</td>
                                   <td>{ele.title}</td>
                                   <td width={"120px"}><img src={ele.thumbnail} width={"120px"}></img></td>
                                   <td width={"500px"}>{ele.description}</td>
                                   <td>{ele.price}</td>
                                   <td><button className='plus' onClick={() => handleIncrement(ele.id)}>+</button> {ele.qut} <button className='minus' onClick={() => handleDecrement (ele.id)}>-</button></td>
                                   <td>{price(ele.price,ele.qut)}</td>
                              </tr>
                              </>
                         )
                    })
                   }
                   
               </tbody>
               <div className='total' width={"500px"}>
                    <p><b>Total Price :</b>{totalbill}</p>
                    <p><b>Discount :</b>{discount.toFixed(2)}</p>
                    <p><b>Total After :</b>{totalafter.toFixed(0)}</p>
                    <p><b>GST :</b>{gst.toFixed(2)}</p>
                    <p><b>Final Total:</b>{finaltotal.toFixed(0)}</p>
               </div>
          </Table>   
          </>
     )
}
export default Cart;