import Slider from "react-slick"
import { SliderWrapper } from "./Carousel.style"
import { forwardRef } from "react"

export const Carousel = forwardRef(
  ({ children, settings, className, ...props }, ref) => {
    return (
      <SliderWrapper className={className}>
        <Slider {...settings} {...props} ref={ref}>
          {children}
        </Slider>
      </SliderWrapper>
    )
  }
)
