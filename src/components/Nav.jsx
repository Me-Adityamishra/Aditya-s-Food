import React from 'react'
import styles from "./Nav.module.css";
function Nav() {
  return (
    <>
    <div className={styles.Nav}>
    <div className={styles.text}>
    🍔Aditya's Food Recipe.
    </div>
    <br/>
    <div className={styles.scrollText}><marquee behavior="scroll" direction="left">You can search and watch each and every recipe with ingredients.</marquee>
</div>
    </div>
    </>
  )
}

export default Nav
