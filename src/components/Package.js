import React from 'react';
import { Link } from 'react-router-dom';


const Package = (props) => {
    const { icon, title, text  } = props.newData
    return (
        <div className="col-md-4 col-sm-12 col-xs-12 my-4">
            <div className="card text-start">
                <div className="card-title my-3 px-1">
                    <h2><span className='text-warning'>{icon}</span> <span>{title}</span></h2>
                    <div className='text-start my-3'>
                    <p className='px-3 text-secondary'>{text}</p>
                    <Link className='text-warning'>Read More...</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Package