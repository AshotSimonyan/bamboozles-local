import React, { useEffect, useRef, useState } from "react"
import { TimelineStyle } from "./TimeLine.style"
import { timeLineContent } from "./timeLineContent"
import {Fade} from "react-awesome-reveal";
import {useOnScreen} from "../../hooks/useOnScreen";


const options = {
    rootMargin: '-50px',
    threshold: Array.from({length: 100}, (_, i) => (i + 1) / 100)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
const Timeline = () => {
    const [percent, setPercent] = useState(0)
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })
    const treeRef = useRef(null)
    const messageRef = {
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null),
        5: useRef(null),
    }

    const messageScreen1 = useOnScreen(messageRef[1], () => someCallback(1))
    const messageScreen2 = useOnScreen(messageRef[2], () => someCallback(2))
    const messageScreen3 = useOnScreen(messageRef[3], () => someCallback(3))
    const messageScreen4 = useOnScreen(messageRef[4], () => someCallback(4))
    const messageScreen5 = useOnScreen(messageRef[5], () => someCallback(5))

    const someCallback = number => {
        setMessage(prevState => ({
            ...prevState,
            [number]: true,
        }))
    }
    // console.log(message)

    React.useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                intersectingHandler(entry.isIntersecting, entry);
            });
        }, options);
        if (treeRef.current) {
            observer.observe(treeRef.current);
        }
    }, []);

    function intersectingHandler(intersecting, entry) {
        if (intersecting && +value !== 100) {
            console.log(entry)
            setValue(entry.intersectionRatio * 100);
        }


    }

    console.log(value)
    //
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         const treeHeight = treeRef?.current?.clientHeight
    //         const treePosition = treeRef?.current.getBoundingClientRect().top
    //         const pageY = window.scrollY
    //         const screen = window.screen.height
    //         if (pageY  > treePosition ) {
    //
    //             const treeHeightPercent = Math.round(
    //                 ((pageY - treeHeight - (screen * 1.2) ) / treeHeight) * 100
    //             )
    //             if (treeHeightPercent >= 100) {
    //                 return setPercent(100)
    //             }
    //             if (treeHeightPercent <= 0) {
    //                 return setPercent(0)
    //             }
    //             setPercent(treeHeightPercent)
    //         }
    //     })
    // }, [])

    // console.log(percent)

    return (
        <TimelineStyle>
            <div className="timeline-tree" ref={treeRef}>
                <img src="/assets/roadmap/timeline-tree.png" alt="" />
                <span className='overlay'  style={{ clipPath: `inset(${value}% 0 0 0)` }}/>
            </div>
            {timeLineContent.map(({ title, text }, index) => {
                const number = index + 1
                const even = number % 2 === 0
                return (

                    <div ref={messageRef[number]} key={number} className={`message message-${number} ${even ? "left" : "right"} ${message[number] ? 'fade-in' : ''}`}>
                        <img className='card-img' src={`assets/roadmap/${number}.png`} alt=""/>
                        <h2 className="circle-number">{number}</h2>
                        <h2 className="message-title">{title}</h2>
                        <p>{text}</p>
                    </div>
                )
            })}
        </TimelineStyle>
    )
}

export default Timeline