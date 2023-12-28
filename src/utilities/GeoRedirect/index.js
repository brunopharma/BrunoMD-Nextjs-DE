import React,{useEffect, useState} from 'react'

const GeoRedirect = () => {
  const [load, setLoad] = useState(false)
   useEffect(() => {
    getUserIpAddr();
  }, [])
    function getUserIpAddr() {
    var defaultSite = "https://brunomd.com/";
    var euSite = "https://brunomd.eu/";
    var deSite = "https://brunomd.de/";

    fetch("https://ipapi.co/country/")
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("HTTP Error " + response.status);
        }
      })
      .then((country) => {
        if (country != "IN" && country != "DE" && country != "GB") {
          if (country == "IT") {
            window.location = euSite;
          } else {
            window.location = defaultSite;
          }
        }
        setLoad(true);
      })
      .catch(function (error) {
        console.error({ error });
      });
    // }
  }
  function getUserIpAddr1() {
    var defaultCountry = ['IT','IN','GB'];
    var defaultSite = 'https://brunomd.com/';
    var otherSite = 'https://brunomd.eu/';
    // let currentUrl = window.location.href;
    // let splitUrl = currentUrl.split('https://brunomd.eu')
    // if(splitUrl.length == 2){


    fetch('https://ipapi.co/country/')
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('HTTP Error ' + response.status);
        }
      })
      .then(country => {
        console.log({ country })
        if (defaultCountry.includes(country)) {
          // No action needed - already on the default site
          console.log('Already on default site');
          window.location = otherSite;
        }
        setLoad(true)
      })
      .catch(function (error) {
        // Network error
        // Script blocked by browser extension
        // 429 error (too many requests)
        console.log(error);
      });
      // }
  }
//   if(!load)return (
//    <div className={styles.wrapper}>
//   <div className={styles.holder}>Loading ...
//     <svg>
//       <rect x="1" y="1"></rect>
//     </svg>
//   </div>
// </div>
//   )
  return(
    <></>
  )
}

export default GeoRedirect
