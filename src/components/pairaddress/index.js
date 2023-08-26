import { useState } from "react";
import Sidebar from "../sidebar";
import {  FaInfoCircle } from 'react-icons/fa';
import hexagon from "../icons/hexagon.png"
import "./index.css"

const Address = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await fetch(`https://api.dexscreener.com/latest/dex/search/?q=${searchInput}`);
        const data=await response.json()
        setSearchResults(data.pairs)
        console.log(data.pairs)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
  
    return (
      <div className="main">
        <Sidebar/>
        <div className="pair">
        <div className="inputt">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter pair address"
        />
        <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <ul>
            <p className="pp">Pair address result</p>
            {searchResults.map(each=>(
              <li className="card_container">
                <div className="card">
                <h1>Basic Info</h1>
                <p><span>Pair created at</span> {each.pairCreatedAt}</p>
                <p><span>Symbol</span><span>{each.baseToken.symbol}</span></p>
                <p><span>Dex ID</span><span>{each.dexId}</span></p>
                <p><span>Pair Address</span><span>{each.pairAddress}</span> </p>
                <a href="/info" target="_blank" rel="noopener noreferrer">
                <FaInfoCircle size={32} color="pink" />
                </a>
                </div>
                <div className="card">
                <h1>Base Token</h1>
                <p><span>Name</span><span>{each.baseToken.name}</span></p>
                <p><span>Symbol</span><span>{each.baseToken.symbol}</span></p>
                <p><span>Address</span><span>{each.baseToken.address}</span></p>
                <img src={hexagon}/>
                </div>
                <div className="card">
               <h1>Quote Token</h1>
               <p><span>Name</span><span>{each.quoteToken.name}</span></p>
               <p><span>Symbol</span><span>{each.quoteToken.symbol}</span></p>
               <p><span>Address</span><span>{each.quoteToken.address}</span></p>
               <img src={hexagon}/>
               </div>
               <div className="card">
               <h1>Price</h1>
                <p><span>priceNative</span><span>{each.priceNative}</span></p>
                <p><span>price USD</span> <span>{each.priceUsd}</span></p>
                <p className="dollar">&#36;</p>
                </div>
             </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    );
  };
  
  export default Address;
  