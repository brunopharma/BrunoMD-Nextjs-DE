import React, { useEffect } from 'react'
import '@/styles/globals.css'
import Layout from "@/componets/Layout"
import { RouteGuard } from '@/componets/RouteGuard'

export default function App({ Component, pageProps }) {
  const version = 'DE'
  // useEffect(() => {
    
  //   if (typeof window !== 'undefined') {
  //     const loader = document.getElementById('globalLoader');
  //     if (loader) {
  //       loader.style.display = 'none'
  //     }
  //     // let docTitle = document.title
  //     // window.addEventListener("blur",()=>{
  //     //   document.title = "Come Back 😊😊";
  //     // })
  //     // window.addEventListener("focus",()=>{
  //     //   document.title = docTitle;
  //     // })
  //   }
  // }, []);
  if (Component?.hideLayout) {
    return (
      <RouteGuard version={version}>
        <Component {...pageProps} version={version} />
      </RouteGuard>
    )
  } else {
    return (
      <RouteGuard version={version}>
        <Layout version={version}>
          <Component {...pageProps} version={version} />
        </Layout>
      </RouteGuard>
    )
  }
}
