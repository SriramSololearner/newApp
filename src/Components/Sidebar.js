import {React, useState} from 'react'
import { BsCardImage } from 'react-icons/bs';
import { AiOutlineShop }  from 'react-icons/ai';
import { BsTagFill } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';
import { GrUnorderedList } from 'react-icons/gr'; 
import { BsCashStack } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BsTagsFill } from 'react-icons/bs';
import { BiBarChart } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { SlPower } from 'react-icons/sl';


const Sidebar = () => {
    const [isopen, setIsopen] = useState(true);
    return (
        <> 
        {!isopen ?
        (
            <> 
            <button typeof="text" onClick={() =>  setIsopen(!isopen)}>
                
                    
                    
                    <div className='wrap'>
                        <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div>
                    </div>
            </button>

            <div className='toggleBar'>
                    < BsCardImage />
                    < AiOutlineShop/>
                    <BsTagFill  style={{"color":'blueViolet'}} id="menu1"/>
                    <HiShoppingBag style={{"color":'green'}}/>
                    <GrUnorderedList yle={{"color":'darkPink'}}/>
                    <BsCashStack style={{"color":'darkCyan'}}/>
                    <FaUser style={{"color":'pink'}}/>
                    <BsTagsFill style={{"color":'blue'}}/>
                    < BiBarChart style={{"color":'darkSalmon'}}/>
                    <AiFillSetting style={{"color":'orange'}}/>
                    <SlPower style={{"color":'grey'}}/>  
                
                
                    </div>
            </>
            
        ):
        (
                    <div className='container'>
                        <div className='Sidebar'>
                            <div className='icon'> <BsCardImage style={{ 'fontSize': '30px', marginRight: "10px" }} />  <div style={{ fontWeight: "500", 'color': "grey" }}> LAUNDRY</div> <span className='toggleButton'> <div onClick={() => setIsopen(!isopen)}> X </div>  </span> </div>
                            <div className='span_class'>
                                
                                <span className='slide_menu' id='menu1'> < AiOutlineShop /> <p>Dashboard</p>  </span>
                                <span className='slide_menu'> <BsTagFill />   <p> Pos</p> </span>
                                <span className='slide_menu'> <HiShoppingBag /> <p>Orders</p>  </span>
                                <span className='slide_menu'> <GrUnorderedList /> <p> Order status screen</p>   </span>
                                <span className='slide_menu'> <BsCashStack />  <p>Expense</p> </span>
                                <span className='slide_menu'> <FaUser /> <p> Customers</p> </span>
                                <span className='slide_menu'> <BsTagsFill /> <p> Services </p></span>
                                <span className='slide_menu'> < BiBarChart /> <p> Reports</p> </span>
                                <span className='slide_menu'> <AiFillSetting /> <p>Tools</p> </span>
                                <span className='slide_menu'> <SlPower /> <p> Logout</p>  </span>

                            </div>
                        </div>
                    </div>
    
        )

        }
        </>
        
    )
}

export default Sidebar;
