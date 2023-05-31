import React, { useEffect } from "react";
import MainNav from "./Helpers/mainNav"
import styles from './styles.module.css'


export default function Home({link}) {
  useEffect(()=>{
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.top = "0";
          } else {
            document.getElementById("header").style.position = "unset";
          }
        }
    },[])
    return(
        <header className={styles.header} id="header">
            <MainNav navMenuLinks={link}/>
        </header>
    )
}