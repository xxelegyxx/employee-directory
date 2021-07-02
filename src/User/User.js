import React from 'react';
import './User.css';

const user = (props) => {
    return (
        <div className='container'>
            <div className='row User'>
                {/* <div className='col-sm Info'>
                    <img src={props.image}></img>
                </div> */}
                <div className='col-sm Info'>
                    <p>{props.name}</p>
                </div>
                <div className='col-sm Info'>
                    <p>{props.phone}</p>
                </div>
                <div className='col-sm Info'>
                    <a href={props.email}>{props.email}</a>
                </div>
                <div className='col-sm Info'>
                    <p>{props.dob}</p>
                </div>
            </div>
        </div>
    );
};

export default user;