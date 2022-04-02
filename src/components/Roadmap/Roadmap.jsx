import React, { forwardRef } from "react"
import { RoadmapStyle } from "./Roadmap.style"
import Timeline from "../TimeLine/TimeLine"
import { Fade } from "react-awesome-reveal"

const Roadmap = forwardRef((props, ref) => {

  return (
    <RoadmapStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Fade triggerOnce direction={"up"} fraction={0.5} duration={800}>
            <h1 className="title">Roadmap</h1>
          </Fade>
          <div>
            <Timeline className="timeline" />
          </div>
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap
