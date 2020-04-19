import React from 'react';
import './PageHeader.scss';

const PageHeader = (props) =>  {
    return(
        <div className="PageHeader">
            <h2 className="PageHeader-Text">
                {
                    props.children
                }
            </h2>
        </div>
        
    );
}

export default PageHeader;