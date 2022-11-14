import React from 'react'
import { GiMailShirt } from 'react-icons/gi';
import { GiConverseShoe } from 'react-icons/gi'
const OrderDetails = () => {
    return (
        <div className='OrderDetails-container'> 
            <div className='Order-Details'>
                    <div id="Today">Today's Delivery</div>
                    <div className='Input_box'>
                    <input type="text" placeholder='search here' id='input' className='Input-box1' />
                        <form id="Form">
                        <select width="400" id='formSelect' className='Input-box2'>
                                <option>Order1</option>
                                <option>Order2</option>
                                <option selected>All Orders</option>

                            </select>
                        </form>
                    </div> 
                    
                </div>

            <section className='Delivery'>
                <div className='Details' style={{ "borderLeft": "5px solid rgb(181, 193, 5)", "borderTop": "0.5px solid rgb(181, 193, 5)", "borderRight": "0.5px solid rgb(181, 193, 5)", "borderBottom":"0.5px solid rgb(181, 193, 5)"}}>
                    <div className='div-Details'>
                        <p >954624865</p>
                        <p >ORD-0948</p>
                    </div>

                    <div className='div-images'>
                        <GiMailShirt className='image' />
                        
                    </div>
                    
                    
                </div>
                <div className='Details' style={{ "borderLeft": "5px solid rgb(238, 63, 142)", "borderTop": "0.5px solid rgb(238, 63, 142)", "borderRight": "0.5px solid rgb(238, 63, 142)", "borderBottom":"0.5px solid rgb(238, 63, 142)"}}>
                    <div className='div-Details'> 
                        <p >ARIF</p>
                        <p >ORD-0949</p></div>
                    <div className='div-images'>
                        <GiMailShirt className='image' />
                        <GiMailShirt className='image' />

                    </div>
                    
                    
                </div>
                <div className='Details' style={{ "borderLeft": "5px solid rgba(144, 89, 247, 0.881)", "borderTop": "0.5px solid rgba(144, 89, 247, 0.881)", "borderRight": "0.5px solid rgba(144, 89, 247, 0.881)", "borderBottom": "0.5px solid rgba(144, 89, 247, 0.881)" }}>
                    <div className='div-Details'>
                        <p>Shiyas</p>
                        <p>ORD-0950</p>
                    </div>

                    <div className='div-images'>
                        <GiMailShirt className='image' />
                        
                        
                    </div>
                </div>

                <div className='Details' style={{ "borderLeft": "5px solid rgba(144, 89, 247, 0.881)", "borderTop": "0.5px solid rgba(144, 89, 247, 0.881)", "borderRight": "0.5px solid rgba(144, 89, 247, 0.881)", "borderBottom": "0.5px solid rgba(144, 89, 247, 0.881)" }}>
                    <div className='div-Details'>
                        <p>Walk in Customer</p>
                        <p>ORD-0951</p>
                    </div>

                    <div className='div-images'> 
                        <GiMailShirt className='image' />
                        <GiMailShirt className='image' />
                    </div>
                </div>
                <div className='Details' style={{ "borderLeft": "5px solid rgba(86, 244, 118, 0.881)", "borderTop": "0.5px solid rgba(86, 244, 118, 0.881)", "borderRight": "0.5px solid rgba(86, 244, 118, 0.881)", "borderBottom": "0.5px solid rgba(86, 244, 118, 0.881)" }}>
                    <div className='div-Details'>
                        <p>Customer2</p>
                        <p>ORD-0952</p>
                    </div>
                    <div className='div-images'>
                        <GiMailShirt className='image' />
                        <GiConverseShoe className='image' />
                        
                        
                    </div>
                    
                </div>
                <div className='Details' style={{ "borderLeft": "5px solid rgba(94, 162, 170, 0.881)", "borderTop": "0.5px solid rgba(94, 162, 170, 0.881)", "borderRight": "0.5px solid rgba(94, 162, 170, 0.881)", "borderBottom": "0.5px solid rgba(94, 162, 170, 0.881)" }}>
                    <div className='div-Details'>
                        <p>Walk in Customer</p>
                        <p>ORD-0953</p>
                    </div>
                    <div className='div-images'>
                        <GiMailShirt className='image' />
                        <GiMailShirt className='image' />
                        <GiConverseShoe className='image' />
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderDetails;
