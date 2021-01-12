import React, { Component } from 'react';
import './lottoPiece.css'

class LottoPiece extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        const num = this.props.number;
        return(
            <div className="lotto-piece">
                <p>{num}</p>
                
            </div>
        )
    }
}

export default LottoPiece;