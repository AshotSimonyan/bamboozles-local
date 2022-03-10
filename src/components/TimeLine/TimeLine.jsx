import { useEffect, useRef, useState } from "react"
import { TimelineStyle } from "./TimeLine.style"
import { timeLineContent } from "./timeLineContent"

const Timeline = ({ setObserver, callback }) => {
  const [message, setMessage] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  })

  const timeline = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    6: useRef(null),
  }

  const someCallback = number => {
    setMessage(prevState => ({
      ...prevState,
      [number]: true,
    }))
  }

  useEffect(() => {
    setObserver(timeline["1"].current, () => someCallback(1))
    setObserver(timeline["2"].current, () => someCallback(2))
    setObserver(timeline["3"].current, () => someCallback(3))
    setObserver(timeline["4"].current, () => someCallback(4))
    setObserver(timeline["5"].current, () => someCallback(5))
    setObserver(timeline["6"].current, () => someCallback(6))
  }, [])

  return (
    <TimelineStyle>
      {timeLineContent.map(({ title, text }, index) => {
        const number = index + 1
        const even = number % 2 === 0
        return (
          <>
            <div
              id={`timeline${number}`}
              ref={timeline[number]}
              className={`timeline timeline${number}`}
            />
            <div className="message-wrapper">
              <div
                className={`message ${even ? "left" : "right"} ${
                  message[number] ? "fade-in" : ""
                }`}
              >
                <h2 className="circle-number">{number}</h2>
                <h2 className="message-title">{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          </>
        )
      })}
      <div
        id={`timeline6`}
        ref={timeline["6"]}
        className={`timeline timeline6`}
      />
    </TimelineStyle>
  )
}

export default Timeline
