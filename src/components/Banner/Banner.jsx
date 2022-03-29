import React, { forwardRef } from "react"
import { BannerStyle } from "../Banner/Banner.style"

const Banner = forwardRef((props, ref) => {
  return (
    <BannerStyle ref={ref}>
      <div className="bubble x1"><img src="assets/banner/1.png" alt="bubble" /></div>
      <div className="bubble x2"><img src="assets/banner/2.png" alt="bubble" /></div>
      <div className="bubble x3"><img src="assets/banner/3.png" alt="bubble" /></div>
      <div className="bubble x4"><img src="assets/banner/4.png" alt="bubble" /></div>
      <div className="bubble x5"><img src="assets/banner/1.png" alt="bubble" /></div>
      <div className="bubble x6"><img src="assets/banner/3.png" alt="bubble" /></div>
      <div className="logo-wrapper">
        <img src="/assets/logo-big.png" alt="" />
      </div>
    </BannerStyle>
  )
})

export default Banner
