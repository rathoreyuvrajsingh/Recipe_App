import React from 'react';
import "./Navbar.css"


const Navbar = () => {
  return (
   <div>
      <div className='nav'>
            <div className='logo'>
               <img src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" alt="lo" />
            </div>

            <div className='items'>
                <ul>
                     <li><a href='#o'>Home</a></li>
                     <li><a href='#e'>About</a></li>
                     <li><a href='#w'>Recipes</a></li>
                </ul>
            </div>
        <div className='dropdown'>

            <select>
             <option value="South Indian">South Indian</option>
             <option value="Rajasthani">Rajasthani</option>
             <option value="Gujarati">Gujarati</option>
            </select>


        </div>
              

        </div>
    </div>
  )
}

export default Navbar;
