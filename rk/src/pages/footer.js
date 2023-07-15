import React from 'react';
import '../assets/css/footer.css';   
import Social from './Socialmedia'

export default function Navbar() {

    return (
        <>
            <footer>
  <div className="container">
    <p>&copy; 2023 Your Website. All rights reserved.</p>
   <Social/>
  </div>
</footer>

        </>
    );
}
