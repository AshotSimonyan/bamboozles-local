import { HeroStyle } from "./Hero.style"
import { Button } from "../UIKit"
import { forwardRef } from "react"
import { Fade } from "react-awesome-reveal"

const Hero = forwardRef((props, ref) => {
  return (
    <HeroStyle ref={ref}>
      <div className="container">
        <div className="content">
          <div className="left">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              delay={3600}
              duration={800}
            >
              <div className="title">
                <h1>Welcome to BamBoozles</h1>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu nisi id neque volutpat maximus eget egestas
                quam. Nullam placerat nunc elit, non aliquam velit feugiat sed.
              </p>
              <Button target="_blank" href="#">
                JOIN OUR DISCORD
              </Button>
            </Fade>
          </div>
          <div className="right">
            <img src="/assets/hero/hero.png" alt="BamBoozles" />
          </div>
        </div>
      </div>
    </HeroStyle>
  )
})

export default Hero
