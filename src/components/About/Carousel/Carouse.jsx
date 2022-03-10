import React, { useMemo } from "react"
import { Carousel } from "../../UIKit"
import { AboutCarouselStyle } from "./Carousel.style"
import { theme } from "../../../styles/global/theme"

const AboutCarousel = ({ rtl }) => {
  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      speed: 6000,
      cssEase: "linear",
      rtl: !!rtl,
      responsive: [
        {
          breakpoint: theme.breakpoints.xl,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: theme.breakpoints.sm,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }
  }, [])

  return (
    <AboutCarouselStyle>
      <Carousel settings={settings}>
        {[...Array(5)].map((item, index) => {
          return (
            <div className="carousel-item" key={`carousel-${index}`}>
              <img src={`/assets/about/${index + 1}.png`} alt="racing" />
            </div>
          )
        })}
      </Carousel>
    </AboutCarouselStyle>
  )
}

export default AboutCarousel
