import styled from "styled-components"

export const ComingSoonStyle = styled.main`
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  header {
    padding: 20px 0;

    .logo {
      max-width: 132px;

      img {
        width: 100%;
        height: 28px;
      }
    }
  }

  .content {
    text-align: center;
    padding: 48px 0;
  }

  h1 {
    font-size: 120px;
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 12px;
  }

  footer {
    padding: 24px 0;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    h1 {
      font-size: 90px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    h1 {
      font-size: 64px;
    }
  }
`
