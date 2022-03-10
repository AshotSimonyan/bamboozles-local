import { LoaderStyle } from "./Loader.style"
import { useEffect, useState } from "react"

const number = "100"
const duration = "8.5"

const Loader = ({ className }) => {
  const [count, setCount] = useState("0")
  useEffect(() => {
    let start = 0
    const end = parseInt(number.substring(0, 4))
    if (start === end) return

    let totalMilSecDur = parseInt(duration)
    let incrementTime = (totalMilSecDur / end) * 1000
    let timer

    setTimeout(
      () =>
        (timer = setInterval(() => {
          start += 4
          setCount(String(start) + number.substring(3))
          if (start === end) clearInterval(timer)
        }, incrementTime)),
      1000
    )
  }, [number, duration])

  return (
    <LoaderStyle className={className}>
      <div className="content">
        <h2>{count}%</h2>
        <div className="progress">
          <div className={`progress-inner ${count > 5 ? 'box-shadow' : ''}`} style={{ width: `${count}%` }} />
        </div>
      </div>
    </LoaderStyle>
  )
}

export default Loader
