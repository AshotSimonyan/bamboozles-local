import React, { useEffect, useState } from "react"
import { TitleStyle } from "./Animations.style"
import { animatedTitle } from "../../utils/utils"

const Title = ({ startAnim, title, children, ...props }) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (startAnim) {
      setStart(true)
    }
  }, [startAnim])
  return (
    <TitleStyle startAnim={start} {...props}>
      {children}
    </TitleStyle>
  )
}

export default Title
