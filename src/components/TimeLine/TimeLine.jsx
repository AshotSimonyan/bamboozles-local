import React, { useEffect, useRef, useState } from "react"
import { TimelineStyle } from "./TimeLine.style"
import { timeLineContent } from "./timeLineContent"
import {Fade} from "react-awesome-reveal";

const Timeline = () => {

    const [percent, setPercent] = useState(0)
    const treeRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const treeHeight = treeRef?.current.clientHeight
            const treePosition = treeRef?.current.getBoundingClientRect().top
            const pageY = window.scrollY
            const screen = window.screen.height
            if (pageY - screen > treePosition + (screen)) {

                const treeHeightPercent = Math.round(
                    ((pageY - treeHeight - screen ) / treeHeight) * 100
                )
                if (treeHeightPercent >= 100) {
                    return setPercent(100)
                }
                if (treeHeightPercent <= 0) {
                    return setPercent(0)
                }
                setPercent(treeHeightPercent)
            }
        })
    }, [])

    console.log(percent)

  return (
    <TimelineStyle>
        <div className="timeline-tree" ref={treeRef}>
            <img src="/assets/roadmap/timeline-tree.png" alt="" />
            <span className='overlay'  style={{ clipPath: `inset(${percent}% 0 0 0)` }}/>
        </div>
      {timeLineContent.map(({ title, text }, index) => {
        const number = index + 1
        const even = number % 2 === 0
        return (

            <div key={number} className={`message message-${number} ${even ? "left" : "right"}`}>
                <img className='card-img' src={`assets/roadmap/${number}.png`} alt=""/>
                <h2 className="circle-number">{number}</h2>
                <h2 className="message-title">{title}</h2>
                <p>{text}</p>
            </div>
        )
      })}
    </TimelineStyle>
  )
}

export default Timeline
