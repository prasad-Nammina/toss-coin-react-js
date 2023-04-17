// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailsCount: 0,
    displayImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let img = ''
    if (tossResult === 0) {
      img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }

    this.setState({displayImg: img})
  }

  render() {
    const {headCount, tailsCount, displayImg} = this.state
    const totalCount = headCount + tailsCount
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="checks">Heads (or) Tails</p>
          <img src={displayImg} alt="toss result" className="image" />
          <button type="button" className="btn" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para">Total: {totalCount}</p>
            <p className="para">Heads: {headCount}</p>
            <p className="para">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
