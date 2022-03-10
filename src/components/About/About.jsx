import { AboutStyle } from "./About.style"

import { forwardRef } from "react"
import { Fade } from "react-awesome-reveal"
import AboutCarousel from "./Carousel/Carouse"

const HaveIdea = forwardRef((props, ref) => {
  return (
    <AboutStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Fade
            triggerOnce
            cascade
            direction={"up"}
            fraction={1}
            duration={800}
          >
            <h1 className="title">About</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu nisi id neque volutpat maximus eget egestas quam.
              Nullam placerat nunc elit, non aliquam velit feugiat sed.
            </p>
            <p className="text pull-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu nisi id neque volutpat maximus eget egestas quam.
              Nullam placerat nunc elit, non aliquam velit feugiat sed.
            </p>
          </Fade>
        </div>
      </div>
      <AboutCarousel />
      <AboutCarousel rtl={true} />
    </AboutStyle>
  )
})

export default HaveIdea
