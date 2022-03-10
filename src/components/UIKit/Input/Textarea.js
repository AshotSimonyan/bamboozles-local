import * as React from "react"
import { InputStyle } from "./Input.style"

export const Textarea = ({
  errorMessage,
  label,
  className = "",
  rows = 4,
  ...props
}) => {
  return (
    <InputStyle className={className} errorMessage={errorMessage}>
      <textarea className="input textarea" rows={rows} {...props} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </InputStyle>
  )
}
