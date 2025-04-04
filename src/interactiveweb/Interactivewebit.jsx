import React from 'react'
import "./Styleit.css"
import  invest from '../assets/invest.png'
// import  heroimage from '../assets/heroimage.png'
const Interactivewebit = () =>{
    return (

        <>
        
          {/* <SignUpForm /> */}
          
            
          
          <header className="header">
          
            
            <div class="logo">
            <img src="https://png.pngtree.com/element_our/png/20180823/business-investment-logo-design-template-vector-png_62506.jpg" alt="logo"/>
           
            </div>
            
            <div className="navbar">
            <a href="" class="nav-link">Home</a>
            </div>
            <div className="navbar">
            <a href="" class="nav-link">About</a>
            </div>
            <div className="navbar">
            <a href="" class="nav-link">Contact</a>
            </div>
            <div className="navbar">
            <a href="" class="nav-link">Invest</a>
            </div>
           
              {/* <nav>Home</nav>
    
              <nav>About</nav>
    
              <nav>Contact</nav>
              
              <nav>Invest</nav> */}
              
            <div class="clickbutton">
                 
                 <button onclick="myFunction()">Login</button>
                 <button onclick="myFunction()">Register</button>
                 <script>
                 function myFunction() {
                 location.replace("")
                }
             
               </script>


            
            </div>
            {/* <button>Login</button>
            <button>Register</button>
        
            </nav> */}
        
        
          </header>
    
          <main>
    
            <div className="text">
    
              <h1>
                Make <br /> remote work
              </h1>
    
              <p>
                Get the right thing from choosing the right, developing skills and making changes,
                In general, you should focus on three types of skill areas: functional,
                self-management and special knowledge skills (Invest in your self first).
              </p>
    
              <button>Read More</button>
    
            </div>
            
            
    
            <div className="images">
            <img src={invest} alt="invest" />
            {/* <img src={heroimage} alt="an image of a guy standing while holding a laptop" />
             */}
            </div>
    
          </main>
        
          <div class="footer">
          <footer>Copyright © 2025 Invest Project Company </footer>
          
          </div>
          

          
          
        </>
        
            
        
    
      );
    
}



export default Interactivewebit