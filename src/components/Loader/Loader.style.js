import styled, { keyframes } from "styled-components"

export const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  transition: .5s;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};

  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }
  
  .content {
    text-align: center;
  }
  .progress {
    width: 512px;
    transition: .3s;
    
    img {
      width: 100%;
    }
    // height: 24px;
    // margin-top: 8px;
    // border-radius: 50px;
    // border: 3px solid ${({ theme }) => theme.colors.black};
    // background-color: ${({ theme }) => theme.colors.white};
    
    // .progress-inner {
    //   background-color: ${({ theme }) => theme.colors.black};
    //   border-radius: 50px;
    //   height: 100%;
    //   transition: .3s;
    //  
    //   &.box-shadow {
    //     box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.black};
    //   }
    // }
  }
}


@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
  .progress {
    width: 420px;
  }


@media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
  .progress {
    width: 280px;
  }
`
