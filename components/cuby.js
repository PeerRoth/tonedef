import React from 'react';
import styles from './cuby.module.css';


export default function Cuby({startHandler,stopHandler}){

return (<div 
    onMouseOver={startHandler} 
    onMouseLeave={stopHandler} 
    style={{width:'200px',height:'200px',margin:'auto',backgroundColor:'antiquewhite'}}
    >
    <section  className={styles["exampleelement"]} tabIndex="0">
  <div className={`${styles["face"]} ${styles["front"]}`}>  {/*1*/}</div>
  <div className={`${styles["face"]} ${styles["back"]}`}>   {/*2*/}</div>
  <div className={`${styles["face"]} ${styles["right"]}`}>  {/*3*/}</div>
  <div className={`${styles["face"]} ${styles["left"]}`}>   {/*4*/}</div>
  <div className={`${styles["face"]} ${styles["top"]}`}>    {/*5*/}</div>
  <div className={`${styles["face"]} ${styles["bottom"]}`}> {/*6*/}</div>
</section>
</div>
)};