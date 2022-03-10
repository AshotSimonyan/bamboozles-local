import React, { forwardRef } from "react"
import { TeamStyle } from "./Team.style"
import { Fade } from "react-awesome-reveal"
import { Icon } from "../UIKit"

const teamList = [
  {
    position: "Artist",
    name: "Onix Animations",
    img: {
      png: "/assets/team/1.png",
      webp: "/assets/team/1.webp",
    },
  },
  {
    position: "Business & Project Lead:",
    name: "MetaGoat",
    img: {
      png: "/assets/team/2.png",
      webp: "/assets/team/2.webp",
    },
  },
  {
    position: "Marketing & Promotions:",
    name: "MetaGoat Tech",
    img: {
      png: "/assets/team/4.png",
      webp: "/assets/team/4.webp",
    },
  },
  {
    position: "Software Development:",
    name: "NFT stack",
    url: "https://www.nftstack.info/",
    img: {
      png: "/assets/team/3.png",
      webp: "/assets/team/3.webp",
    },
  },
]

const Team = forwardRef((props, ref) => {
  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <div className="content">
          <h1 className="title">Team</h1>
          <Fade
            triggerOnce
            direction={"up"}
            fraction={0.8}
            duration={1000}
            delay={0}
          >
            <ul className="team-list">
              {teamList.map(({ name, position, img, url }) => {
                return (
                  <li className="team-card" key={name}>
                    <div className="img-wrapper">
                      <img src="/assets/team/1.png" alt="BamBoozles" />
                    </div>
                    <p className="name">
                      {url ? (
                        <a href={url} target="_blank" rel="noreferrer">
                          {name}
                          <Icon name="link" size={24} />
                        </a>
                      ) : (
                        name
                      )}
                    </p>
                    <p className="position">{position}</p>
                  </li>
                )
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </TeamStyle>
  )
})

export default Team
