import React from 'react'
import './App.css';

function Header() {
  return (
    <div>
         <div class="header">
	<div class="IntroMsg">
    <img  alt="Garcia Taverns where food meets passion" 
    class="logo" src="https://i.ibb.co/WK9hkx8/Garcia-Tavern-logos-transparent.png" id="introLogo" width="200" height="200" />
    </div>
	<div class='IntroMsg'>
        <h1> Stunning food, Amazing Quaility  </h1>
        <span>
           Let us host your next special occassion
        </span>
        <h2>
       <a href="call:111-111-111" id="jos" > <i class="bi bi-telephone-forward-fill"> <span> Contact US today </span></i></a>
        </h2>
	</div>
   </div>
   </div>
  )
}

export default Header