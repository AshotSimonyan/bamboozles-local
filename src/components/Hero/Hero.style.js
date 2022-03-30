import styled, { keyframes } from "styled-components"

export const HeroStyle = styled.section`
  padding-bottom: 100px;
  padding-top: 16px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border: 4px solid ${({ theme }) => theme.colors.black};
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.white};

    .left {
      width: 50%;
      padding-right: 24px;
    }

    .right {
      width: 50%;

      img {
        width: 100%;
      }
    }
  }

  .title {
    padding-bottom: 24px;
  }
  .text {
    padding-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-bottom: 0;

    .content {
      padding: 32px;
      border-radius: 30px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    //padding: 60px 0;
    .content {
      flex-direction: column;
      border-radius: 24px;
      .left {
        width: 100%;
        padding-right: 0;
        padding-bottom: 60px;
      }
      .right {
        max-width: 510px;
        width: 100%;
      }
    }
  }
`
