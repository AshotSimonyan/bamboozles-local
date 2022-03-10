import styled from "styled-components"

export const AboutStyle = styled.section`
  padding-bottom: 160px;
  background-color: ${({ theme }) => theme.colors.white};

  .content {
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  .title {
    padding-bottom: 48px;
    text-align: center;
  }

  .text {
    padding-bottom: 40px;
    width: 80%;

    &.pull-right {
      margin-left: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 80px 0;
    .text {
      padding-bottom: 32px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 60px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .text {
      padding-bottom: 24px;
      width: 100%;

      &.pull-right {
        margin-left: inherit;
      }
    }
  }
`
