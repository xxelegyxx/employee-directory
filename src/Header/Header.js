import React from 'react';
import './Header.css';

const header = () => {
    return (
        <div className='container'>
            <div className='row HeaderRow'>
                {/* <div className='col-sm Header'>Image</div> */}
                <div className='col-sm Header'>Name</div>
                <div className='col-sm Header'>Phone</div>
                <div className='col-sm Header'>Email</div>
                <div className='col-sm Header'>DOB</div>
            </div>
        </div>
    );
};

export default header;