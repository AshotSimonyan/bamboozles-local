import styled, { css, keyframes } from "styled-components"

const letterAppear = keyframes`
  to {
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);

    opacity: 1;
  }
`

const titleAnimation = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  to {
    transform: translateY(0);
    opacity: 1;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
`

// const template = i => {
//   return `
//       &:nth-child(${i + 1}) {
//         animation-delay: ${`${11 * i}ms`};
//        }
//     `
// }

// const getAnimations = items => {
//   let str = ""
//   for (let i = 0; i < items; i += 1) {
//     str += template(i)
//   }
//   return str
// }

export const TitleStyle = styled.h1`
  //opacity: 0;
  //text-transform: uppercase;
  overflow: hidden;

  ${({ startAnim }) =>
    startAnim &&
    css`
      span {
        //width: 100%;
        float: left;
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
        transform: translateY(-50px);
        opacity: 0;
        animation-name: ${titleAnimation};
        animation-timing-function: ease;
        animation-duration: 0.8s;
        animation-delay: 0.1s;
        -webkit-animation-fill-mode: forwards;

        &:first-child {
          animation-delay: 0.4s;
        }
        &:not(:last-child) {
          padding-right: 16px;
        }

        &:last-child {
          animation-delay: 0.2s;
        }
      }
    `}
`
