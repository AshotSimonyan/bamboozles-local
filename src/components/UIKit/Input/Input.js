import * as React from "react"
import { InputStyle } from "./Input.style"

export const Input = ({ errorMessage, label, className = "", ...props }) => {
  return (
    <InputStyle className={className} errorMessage={errorMessage}>
      <input className="input" {...props} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </InputStyle>
  )
}
