import { LoaderStyle } from "./Loader.style"
import { useEffect, useState } from "react"

const number = "100"
const duration = "10.5"

const Loader = ({ className }) => {
  const [count, setCount] = useState("100")
  useEffect(() => {
    let start = 100
    // const end = parseInt(number.substring(0, 4))
    const end = 0
    if (start === end) return

    let totalMilSecDur = parseInt(duration)
    let incrementTime = (totalMilSecDur / start) * 1000
    let timer

    setTimeout(
      () =>
        (timer = setInterval(() => {
          start -= 4
          setCount(String(start) + number.substring(3))
          if (start === end) clearInterval(timer)
        }, incrementTime)),
      1000
    )
  }, [number, duration])

  return (
    <LoaderStyle className={className}>
      <div className="content">
        <div
          className="progress"
          style={{ clipPath: `inset(0 ${count}% 0 0)` }}
        >
          <img src="/assets/preloader.png" alt="" />
        </div>
      </div>
    </LoaderStyle>
  )
}

export default Loader
