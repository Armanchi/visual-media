import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>store</li>
          <li>movies</li>
          <li>my lists</li>
          <li>checkout</li>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar;