import React from 'react';
import { PageHeaderDiv, PageHeaderText } from './PageHeaderStyle.js';

const PageHeader = (props) =>  {
    return(
        <PageHeaderDiv>
            <PageHeaderText>
                {
                    props.children
                }
            </PageHeaderText>
        </PageHeaderDiv>
        
    );
}

export default PageHeader;