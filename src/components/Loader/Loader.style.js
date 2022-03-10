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
    width: 420px;
    height: 24px;
    margin-top: 8px;
    border-radius: 50px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    
    .progress-inner {
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 50px;
      height: 100%;
      transition: .3s;
    }
  }
}


@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
  
`
