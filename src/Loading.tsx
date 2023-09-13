import React from 'react'
import "./App.css";


const Loading = () => {
  return (
    <div className="row">
  <div className="column">
    <div className="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <div className="container shoe">
    <div className="productImage shoeImg"></div>
    <div className="size shoeSize">
      <h4>SIZE</h4>
      <ul>
        <li>9</li>
        <li>8</li>
        <li>7</li>
      </ul>
    </div>
    <div className="price shoePrice">
      <h4>PRICE</h4>
      <span>$150</span>
    </div>
    <div className="color shoeColor">
      <h4>COLORS</h4>
      <ul>
        <li><span className="blue"></span></li>
        <li><span className="yellow"></span></li>
        <li><span className="red"></span></li>
      </ul>
    </div>
    <div className="productName shoeName">
      Nike Air Max
    </div>
  </div>

    </div>
  </div>
</div>

  )
}

export default Loading
