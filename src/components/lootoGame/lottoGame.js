import React, { Component } from 'react';
import LottoPiece from '../LottoPiece/lottoPiece';
import "./lottoGame.css"

class LottoGame extends Component {
    static defaultProps ={
        title: 'Lotto',
        maxBalls:6,
        maxNum: 20
    }
    constructor(props){
        super(props)
        this.state = {nums: Array.from({length: this.props.maxBalls})}
        this.randomNumber = this.randomNumber.bind(this);
    }

    randomNumber(){
        let maxNum = this.props.maxNum;
        this.setState(currentState => ({
            nums: currentState.nums.map(n =>Math.floor(Math.random()*maxNum)+1 )
        }));
         
    }
    render(){
        let title = this.props.title;
        return(
            <div className="lotto-game">
                <h2 className="lotto-title">{title}</h2>
                <div className="piece-wrap"> {this.state.nums.map(pieces => <LottoPiece number={pieces}/>)}</div>
                <button className="lotto-btn" onClick={this.randomNumber}>Generate!</button>
            </div>
        )
    }
}

export default LottoGame;