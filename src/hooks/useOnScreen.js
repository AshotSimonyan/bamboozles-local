import { useEffect, useState } from "react"

export const useOnScreen = (ref, callback = () => null) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => {
        if(entry.isIntersecting) {
            callback()
        }
        setIntersecting(entry.isIntersecting)
    },
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
