import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button className={styles.signup} type='submit' onClick={(e) => props.onClick(e)}>SIGN UP</button>
  )
}
