import React, { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./App.css";



const ListingPoki = ({ coinsData }: any) => {
  const [fisrtpage, setFirstPage] = useState(1)
  const [lastpage, setLastPage] = useState(1)
  let myfinalPage= "kjdks"
  console.log(coinsData);
  
  return (
    <>
      
      <body>
        <div className="row">
          {coinsData?.map((poke: any, index: number) => {
            return (
              <div className="column" key={index}>
                <div className="card">
                  <div className="container shoe">
                    <div
                      className="productImage  shoeName"
                      style={{ background: `url(${poke.images.large})` }}
                    ></div>
                    <div className="size shoeSize">
                      <h4>SIZE</h4>
                      <ul>
                        <li>9sasa</li>
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
                        <li>
                          <span className="blue"></span>
                        </li>
                        <li>
                          <span className="yellow"></span>
                        </li>
                        <li>
                          <span className="red"></span>
                        </li>
                      </ul>
                    </div>
                    <div className="productName shoeName">{poke.artist}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {/* {coinsData?.map((poke: any, index: number) => {
            return (
              <div className="container shoe" key={index}>
                <div
                  className="productImage  shoeName"
                  style={{ background: `url(${poke.images.large})` }}
                ></div>
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
                    <li>
                      <span className="blue"></span>
                    </li>
                    <li>
                      <span className="yellow"></span>
                    </li>
                    <li>
                      <span className="red"></span>
                    </li>
                  </ul>
                </div>
                <div className="productName shoeName">{poke.artist}</div>
              </div>
            );
          })} */}
          {/* <Loading/> */}
        </div>
      </body>
    </>
  );
};

export default ListingPoki;
