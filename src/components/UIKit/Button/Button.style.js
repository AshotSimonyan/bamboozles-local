import styled, { css } from "styled-components"

export const ButtonStyle = styled.a`
  padding: 0 16px;
  border-radius: 52px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.secondary};
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  .icon {
    margin-right: 12px;
    path {
      transition: 0.5s;
    }
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      height: 48px;
      background-color: ${({ theme }) => theme.colors.black};

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      height: 40px;
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};

      .icon {
        path {
          fill: ${({ theme }) => theme.colors.black} !important;
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};

        .icon {
          path {
            fill: ${({ theme }) => theme.colors.white} !important;
          }
        }
      }
    `}



  &.fade-in-button {
    opacity: 1;
    visibility: visible;
  }
`
