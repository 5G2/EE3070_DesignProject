import React, {useState}from 'react';
import { Link, Navigate } from "react-router-dom";


function SignUpSuccess (props) {
   
    return (<div>

        <p>Congratulation! Your account has been register succefully!</p>
        <p className='mt-3'>
             <Link to='/'>Back to login page</Link>
        </p>
    </div>
    )
};

export default SignUpSuccess;