import React from 'react';
import { Link } from 'react-router-dom';

const StreamList = (props) => {
    console.log(props)
    return ( 
        <>
        <div> StreamList</div>
        <Link to ="/streams/show" className="item" >
        Streamy
         </Link>
         </>
    );
}
 
export default StreamList;