import React, { forwardRef, useEffect, useState } from "react"
import { theme } from "../../styles/global/theme"
import { RoadmapStyle } from "./Roadmap.style"
import Timeline from "../TimeLine/TimeLine"
import TimelineObserver from "react-timeline-animation"
import { Title } from "../Animations"
import { Fade } from "react-awesome-reveal"

const Roadmap = forwardRef((props, ref) => {
  const [percent, setPercent] = useState(0)
  const onCallback = e => {
    console.log(e)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const roadmapHeight = ref?.current.clientHeight
      const pageY = window.pageYOffset
      // console.log(roadmapHeight)
      if(pageY >= roadmapHeight) {
        const timeLineHeight = Math.round((pageY - roadmapHeight) / roadmapHeight * 100)
        if(timeLineHeight >= 100) {
          return setPercent(100)
        }
        setPercent(timeLineHeight)
      }
    })
  }, [])

  console.log(percent)

  return (
    <RoadmapStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Fade triggerOnce direction={"up"} fraction={0.5} duration={800}>
            <h1 className="title">Roadmap</h1>
          </Fade>
          <TimelineObserver
            initialColor={theme.colors.white}
            fillColor={theme.colors.black}
            handleObserve={setObserver => {
              return (
                <Timeline
                  callback={onCallback}
                  className="timeline"
                  setObserver={setObserver}
                />
              )
            }}
          />
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap
