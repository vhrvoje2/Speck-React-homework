import React from 'react';
import Loader from 'react-loader-spinner'
import { LoaderBox } from './LoaderStyle.js';

export default class App extends React.Component{
      render() {
       return(
           <LoaderBox>
                <Loader
                    type="ThreeDots"
                    color="#CE003D"
                    height={100}
                    width={100}
                 />
           </LoaderBox>
       );
      }
   }