import styled from "styled-components"

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  .social {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;

    li {
      margin: 0 8px;
    }
  }

  .social-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    .icon {
      path {
        transition: 0.5s;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`
