import React from 'react'
import { Layout } from 'antd'
import FooterAbout from './footer-about'

function Footer() {
  const { Footer } = Layout

  return (
    <Footer className="footer">
        <FooterAbout />
    </Footer>
  )
}

export default Footer