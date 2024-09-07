import React from 'react'
import styles from "./InnerContainer.module.css";
function InnerContainer({children}) {
  return (
    <>
    <div className={styles.innerContainer}>
       {children}
    </div>
    </>
  )
}

export default InnerContainer
