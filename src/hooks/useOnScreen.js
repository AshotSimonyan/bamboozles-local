import { useEffect, useState } from "react"

export const useOnScreen = ref => {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    {
      rootMargin: "0px",
      threshold: 1,
    }
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
