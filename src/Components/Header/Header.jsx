import React from 'react'
import header from './Header.module.css'
function Header() {
    return (
        <div className={header.header}>
            <div className={header.img}>
                <img src="https://t3.ftcdn.net/jpg/03/11/36/08/360_F_311360857_61ogHZTWCqSlSOOzx8JGG8Abz9Dqi85e.jpg" alt="" />
                <h3>Xabibulloh</h3>
            </div>
            <ul className={header.ul__collection}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Adress</a></li>
                
            </ul>
        </div>
    )
}

export default Header
