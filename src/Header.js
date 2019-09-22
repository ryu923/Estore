import React from 'react';
import './style.css';

function Header() {
  return (
    /* Header */
    <header>
      {/* Header - TitleBar */} 
      <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12 col-12">
                <div class="btn-group">
                    <button 
                        class="btn border dropdown-toggle my-md-4 my-2 text-white" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"> USD
                    </button>
                    
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">ERU - Euro</a>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 col-12 text-center">
                <h2 class="my-md-3 site-title text-white"><a href="index.html">ESTORE</a></h2>
            </div>
            
            <div class="col-md-4 col-12 text-right">
                <p class="my-md-4 header-links">
                    <a href="signin.html" class="px-2">Sign In</a>
                    <a href="signin.html" class="px-1">Create an Account</a>
                </p>
            </div>
        </div>
          </div>
      {/* Header - Navigation Bar */}
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FEATURES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">COLECTION</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">SHOP</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT US</a>
              </li>
            </ul>
          </div>
          
          <div class="navbar-nav">
              <li class="nav-item border rounded-circle mx-2 search-icon">
                  <i class="fas fa-search p-2"></i>
              </li>
              <li class="nav-item border rounded-circle mx-2 basket-icon">
                  <i class="fas fa-shopping-basket p-2"></i>
              </li>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;