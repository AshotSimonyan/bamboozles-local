import { useEffect, useState, useRef } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Roadmap from "./components/Roadmap/Roadmap"
import Team from "./components/Team/Team"
import Banner from "./components/Banner/Banner"

function App() {
  const [loading, setLoading] = useState(true)
  const [, setLocked] = useLockedBody(true)
  const [scrollTo, setScrollTo] = useState(null)
  const [fixedHeader, setFixedHeader] = useState(false)
  const bannerRef = useRef(null)
  const headerRef = useRef(null)
  const heroRef = useRef(null)
  const roadmapRef = useRef(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const teamRef = useRef(null)

  const refMapping = {
    "#roadmap": roadmapRef,
    "#about": aboutRef,
    "#contact": contactRef,
    "#faq": faqRef,
    "#team": teamRef,
  }

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])



  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3800)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const bannerHeight = bannerRef?.current.clientHeight
      const headerHeight = headerRef?.current.clientHeight
      if(window.pageYOffset >= bannerHeight - headerHeight) {
        return setFixedHeader(true)
      }
      setFixedHeader(false)
    })
  }, [])

  useEffect(() => {
    if (scrollTo) {
      refMapping[scrollTo]?.current?.scrollIntoView({
        behavior: "smooth",
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  const handleLinkClick = to => {
    setScrollTo(to)
  }


  return (
    <main>
      <Loader className={loading ? "" : "hide-loader"} />
      <Banner ref={bannerRef} />
      <Header ref={headerRef} fixedHeader={fixedHeader} onLinkClick={handleLinkClick} />
      <div className="main-wrapper">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Roadmap ref={roadmapRef} />
        <FAQ ref={faqRef} />
        <Team ref={teamRef} />
        <Footer />
      </div>
    </main>
  )
}

export default App
