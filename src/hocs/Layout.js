import React, {useEffect}from 'react';
import Navbar from '../components/NavBar';


const Layout=(props) =>{
    useEffect (()=>{
    },[]);
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
};

export default (Layout);