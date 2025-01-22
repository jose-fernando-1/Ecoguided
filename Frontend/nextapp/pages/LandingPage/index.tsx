import React from 'react'
import img_logo from '../../img/img_logo.png'
import Image from 'next/image'
const LandingPage = () => {
  return (
    <div>
      <div id='topbar'>
        <Image
        src={img_logo}
        alt=''
        width={150}
        height={50}
        />
      </div>
    </div>
  )
}

export default LandingPage
