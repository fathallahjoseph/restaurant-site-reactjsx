import React from 'react'
import './App.css';

function Navbar() {
  return (
    <div>
        <div class="navBar" id="nv">
        <nav>
            <i class="bi bi-justify" onclick="alert('heelo')" id="hamMenu"></i>
            <ul>
                <li><a href='?page=home'>HOME </a></li>
                <li><a href='?page=menu'>MENU </a></li>
                <li><a href='?page=ourstory'>OUR STORY  </a></li>
                <li><a href='?page=contactus'>CONTACT US </a></li>
                <li class="socialIcon"><a href="call:111-111-111"><i class="bi bi-telephone-forward"></i></a></li>
                <li class="socialIcon"><a href="instgram.com/example"><i class="bi bi-instagram"></i></a></li>
                <li class="socialIcon"><a href="mailto:example@example.com"><i class="bi bi-envelope-fill"></i></a></li>
            </ul>
        </nav>
    </div>  
    </div>
  )
}

export default Navbar