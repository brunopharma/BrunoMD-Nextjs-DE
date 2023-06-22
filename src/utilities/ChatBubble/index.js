import React from 'react'
import Script from 'next/script'

const RECYCLEChatBubble = () =>{

  React.useEffect(() => {
    setTimeout(() => {
      let bubble = document.getElementById('hubspot-messages-iframe-container')
      if (bubble && false) {
        bubble.style =
          'width: 80px; height: 80px; bottom: 100px!important; z-index: 1!important; max-height: 560px;'
      }
      if (bubble) {
        bubble.style = 'width: 100px; height: 80px; bottom: 0px!important'
      }
    }, 1000)
  }, [])

  return (
    <section>
      <Script
        src="https://js.usemessages.com/conversations-embed.js"
        type="text/javascript"
        id="hubspot-messages-loader"
        data-loader="hs-scriptloader"
        data-hsjs-portal="19647191"
        data-hsjs-env="prod"
        data-hsjs-hublet="na1"
        strategy="beforeInteractive"
      />
    </section>
  )
}
export default RECYCLEChatBubble
