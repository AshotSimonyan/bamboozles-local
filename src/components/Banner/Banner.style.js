import styled, { keyframes } from "styled-components"

const moveclouds = keyframes`
  0% {
    top: 80%;
  }
  100% {
    top: -120px;
  }
`

const sideWays = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 50px;
  }
`
export const BannerStyle = styled.section`
  height: 880px;
  background: url("assets/banner/banner.png") no-repeat top;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .logo-wrapper {
    padding-top: 140px;
    max-width: 560px;
    width: 100%;
    position: relative;
    z-index: 1;

    img {
      width: 100%;
    }
  }

  .bubble {
    position: absolute;
  }

  .x1 {
    left: 85%;
    animation: ${moveclouds} 10s linear infinite,
      ${sideWays} 4s ease-in-out infinite alternate;
  }

  .x2 {
    left: 15%;
    animation: ${moveclouds} 21s linear infinite,
      ${sideWays} 5s ease-in-out infinite alternate;
  }

  .x3 {
    left: 40%;
    animation: ${moveclouds} 30s linear infinite,
      ${sideWays} 3s ease-in-out infinite alternate;
  }

  .x4 {
    left: 50%;
    animation: ${moveclouds} 23s linear infinite,
      ${sideWays} 4s ease-in-out infinite alternate;
  }

  .x5 {
    left: 5%;
    animation: ${moveclouds} 14s linear infinite,
      ${sideWays} 4s ease-in-out infinite alternate;
  }

  .x6 {
    left: 65%;
    animation: ${moveclouds} 19s linear infinite,
      ${sideWays} 3s ease-in-out infinite alternate;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: 770px;

    .logo-wrapper {
      padding-top: 120px;
      max-width: 320px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 550px;

    .logo-wrapper {
      max-width: 270px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 400px;

    .logo-wrapper {
      padding-top: 80px;
    }
  }
`
