import React, {forwardRef, useMemo} from "react"
import { TeamStyle } from "./Team.style"
import { Fade } from "react-awesome-reveal"
import {Carousel, Icon} from "../UIKit"
import {theme} from "../../styles/global/theme";

const teamList = [
  {
    position: "Artist",
    name: "Onix Animations",
  },
  {
    position: "Business & Project Lead",
    name: "MetaGoat",
  },
  {
    position: "Marketing & Promotions",
    name: "MetaGoat Tech",
  },
  {
    position: "Software Development",
    name: "NFT stack",
    url: "https://www.nftstack.info/",
  },
]

const Arrow = ({ className, onClick, direction, size = 24, color }) => {
    return (
        <button onClick={onClick} className={className}>
        <Icon name={`arrow-${direction}`} color={color} size={size} />
        </button>
    )
}

const Team = forwardRef((props, ref) => {

    const settings = useMemo(() => {
        return {
            dots: false,
            infinite: true,
            arrows: true,
            nextArrow: <Arrow direction={"next"} color={theme.colors.black} />,
            prevArrow: <Arrow direction={"prev"} color={theme.colors.black} />,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: false,
            speed: 500,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: theme.breakpoints.md,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: theme.breakpoints.sm,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }
    }, [])

  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Fade
            triggerOnce
            direction={"up"}
            fraction={0.8}
            duration={1000}
            delay={0}
          >
            <h1 className="title">Team</h1>
          </Fade>
          <Fade triggerOnce direction={"up"} fraction={0.8} duration={1000}>
              <Carousel settings={settings}>
                  {teamList.map(({ name, position, url }) => {
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
              </Carousel>

          </Fade>
        </div>
      </div>
    </TeamStyle>
  )
})

export default Team
