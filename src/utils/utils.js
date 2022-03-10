export const animatedTitle = text => {
  return text.split("").map((letter, index) => {
    if (letter === " ") {
      return (
        <span key={index} className="space">
          {letter}
        </span>
      )
    }
    return <span key={index}>{letter}</span>
  })
}
