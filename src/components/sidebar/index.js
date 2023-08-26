import { useState} from "react"
import {Link} from "react-router-dom"
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./index.css"
const Sidebar=()=>{

    const [tresult,setres]=useState("result")
    const [presult,sepres]=useState("")
   

    const token=()=>{
        setres("result")
        sepres("")
    }
    const pair=()=>{
        sepres("result")
        setres("")
    }
    return(
        <div className="sidetotal">
            <div className="side">
            <h1>nFTify</h1>
            <Link to="/" className="linkk"><p className={tresult} onClick={token}>Token Address</p></Link>
            <Link to="/address" className="linkk"><p className={presult} onClick={pair}>Pair Address</p></Link>
            </div>
            <div className="icons">
            <a href="https://www.facebook.com/your-page-url" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} color="palevioletred" />
            </a>
            <a href="https://www.twitter.com/your-profile-url" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} color="palevioletred" />
            </a>
            <a href="https://www.linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} color="palevioletred" />
            </a>
            </div>
        </div>
    )
}
export default Sidebar 