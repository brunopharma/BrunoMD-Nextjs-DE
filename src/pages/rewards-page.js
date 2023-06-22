import React, { useEffect, useState } from "react"
import PageHead from '@/utilities/Head'

const RewardsPage = () =>{
    let [loaded, setLoaded] = useState(false)
    let styles = {
        container: {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1380px',
            width: '100%'
        },
        title: {
            fontFamily: 'ivypresto-display,Times New Roman,Times,serif',
            fontSize: '30px',
            fontWeight: '400',
            marginBottom: '55px',
            marginTop: '55px',
            textAlign: 'center'
        }
    }

    setTimeout(() => {

        if (document.getElementById('LoyaltyPage')|| document.getElementById('LoyaltyPage').offsetHeight < 1000) {
            window.location.reload()
        }

    }, 3000)
    useEffect(() => {
        (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = `https://cdn-widgetsrepository.yotpo.com/v1/loader/tlvfG7Mm7HllI2f5Faiw4g`; e.strategy = `beforeInteractive`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
        let intervalId = setInterval(() => {

            if (document.getElementById('LoyaltyPage').offsetHeight > 1000) {
                clearInterval(intervalId)
                setLoaded(true)
            }
        }, 100)
    }, [])
    return (
        <section id='LoyaltyPage'>
            <PageHead content={{ title: "Rewards Page | Bruno MD" }} />
            <div style={styles.container}>
                <h1 style={styles.title}>Loyalty Rewards</h1>
                {!loaded && <img src={'/pages/Rolling-1s-200px.gif'} style={{ display: 'flex', alignItems: 'center' }} />}
                <div class="yotpo-widget-instance" data-yotpo-instance-id="42685"> </div>
            </div>
        </section>
    )
}
export default RewardsPage