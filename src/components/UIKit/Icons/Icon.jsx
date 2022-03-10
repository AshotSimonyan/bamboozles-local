import * as React from "react"
import IcomoonReact from "icomoon-react"
import iconSet from "./selection.json"

export const Icon = ({ color, size = 32, name, className = "" }) => {
  return (
    <IcomoonReact
      className={`icon ${className}`}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
    />
  )
}
