import React, { forwardRef, useState } from "react"
import { FAQStyle } from "./FAQ.style"
import Collapsible from "react-collapsible"
import { Icon } from "../UIKit"
import { Title } from "../Animations"
import { Fade } from "react-awesome-reveal"

const data = [
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
  {
    question: "What will be the use of the NFT mint proceeds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nisi id neque volutpat maximus eget egestas quam.",
  },
]
const FAQ = forwardRef((props, ref) => {
  const [openPosition, setOpenPosition] = useState(null)

  const handleTriggerClick = position => {
    if (openPosition === position) {
      setOpenPosition(null)
    } else {
      setOpenPosition(position)
    }
  }
  return (
    <FAQStyle ref={ref}>
      <div className="container">
        <div className="faq-content">
          <div className="left">
            <Fade
              triggerOnce
              direction={"up"}
              fraction={0.8}
              duration={1000}
              delay={0}
            >
              <h1 className="title">Your questions, answered.</h1>
            </Fade>
          </div>
          <div className="right">
            {data.map((q, i) => {
              return (
                <Collapsible
                  key={"Collapsible" + i}
                  handleTriggerClick={handleTriggerClick}
                  transitionTime={500}
                  accordionPosition={i}
                  open={openPosition === i}
                  trigger={
                    <Fade
                      triggerOnce
                      cascade
                      direction={"up"}
                      fraction={0.8}
                      duration={800}
                    >
                      <div className="trigger-inner">
                        <h3>{q.question}</h3>
                        <Icon name="arrow-down" />
                      </div>
                    </Fade>
                  }
                >
                  <p>{q.answer}</p>
                </Collapsible>
              )
            })}
          </div>
        </div>
      </div>
    </FAQStyle>
  )
})

export default FAQ
