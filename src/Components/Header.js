import React from 'react';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import { DiReact } from 'react-icons/di';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'
import { FaUserAlt } from "react-icons/fa";

import { BsTagFill } from "react-icons/bs"
export default function Header() {
    return (
        <div className='Header'>
            <div className='nav'>
                <div className="nav_link">
                    <MdAddCircle  />
                    <BsTagFill style={{ "marginLeft": '10px' }} />
                    <FaUserAlt style={{ "marginLeft": '10px',"marginRight":'15px' }} />
                    <form id="form">
                        <select width="300" style={{"width":"100px", "size":"8","padding":"3px","borderRadius":"6px","color":"blue",border:"none"}} >
                            <option>Hindi</option>
                            <option>Tamil</option>
                            <option selected>English</option>
                            <option>Telegu</option>
                            <option>Marathi</option>
                            <option>Urdu</option>
                            <option>Malayalam</option>
                            <option>Kannada</option>
                            <option value="">Select a language</option>
                        </select>
                    </form>
                </div>

                <section className='order_block'>
                    <div className='order'>
                        <p>PENDING ORDER</p>
                        <div className='order1' style={{backgroundColor:'grey'}}> <RiShoppingBasket2Fill  /></div>
                        <p>202</p>
                    </div>
                    <div className='order'>
                        <p>PROCESSING ORDER</p>
                        <div className="order2" style={{ backgroundColor: "rgba(220, 204, 24, 0.938)" }}> <DiReact  /></div>
                        <p>99</p>
                    </div>
                    <div className='order' >
                        <p>READY TO DELIVER </p>
                        <div className="order3" style={{ backgroundColor: 'lightGreen' }}> <BsFillHandThumbsUpFill  /></div>
                        <p>263</p>
                    </div>
                    <div className='order' >
                        <p>DELIVERED ORDERS</p>
                        <div className='order4' style={{ backgroundColor: 'skyBlue' }}><TiTick /></div>
                        <p>347</p>
                    </div>
                </section>
            </div>


        </div>
    )
}

