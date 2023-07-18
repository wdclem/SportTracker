import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

const CookieJar= () => {
  const [cookies, setCookie] = useCookies(['selectedLeagues'])
  const [showBanner, setShowBanner] = useState(!cookies.selectedLeagues)

  const handleAccept = () => {
    setCookie('selectedLeagues', ['MLB', 'NBA', 'NHL', 'NFL'], { path: '/' })
    setShowBanner(false)
  }

  return (
    showBanner && (
      <div className="cookie-banner">
        <p>This website uses cookies to save your league preferences.</p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    )
  )
}

export default CookieJar 