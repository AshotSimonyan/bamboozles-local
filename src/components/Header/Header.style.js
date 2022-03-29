import styled from "styled-components"



export const HeaderStyle = styled.header`
  height: 72px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition:  0.3s;
  margin-top: -160px;

  &.fixed {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .container,
  .header-content {
    height: 100%;
  }

  .hamburger {
    display: none;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-wrapper,
  .social {
    flex: 1;
  }

  .logo {
    max-width: 130px;
    display: block;

    img {
      width: 100%;
      display: block;
    }
  }

  .header-nav {
    flex: 2;

    .header-nav-inner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-nav-list {
      display: flex;

      > li {
        cursor: pointer;
        line-height: 1;
        margin-right: 16px;
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-family: ${({ theme }) => theme.fonts.secondary};
        padding: 8px 16px;
        position: relative;
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.black};
        border-radius: 52px;
        transition: background-color, color 0.5s;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    .copyright {
      display: none;
    }

    &::-webkit-scrollbar {
      display: none !important;
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }
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
    text-align: center;
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

  .social-mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .hamburger {
      margin-left: 20px;
      display: inline-block;
      cursor: pointer;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
    }

    &.open {
      .header-nav {
        height: calc(100% - 72px);
      }
    }

    .header-nav {
      position: fixed;
      top: 72px;
      right: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.white};

      .header-nav-inner {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        height: calc(100vh - 72px);
        padding-top: 120px;
        background-color: ${({ theme }) => theme.colors.primary};
      }

      .header-nav-list {
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;

        > li {
          padding: 24px 40px;
          margin-right: 0;
          font-size: ${({ theme }) => theme.titleSizesSM.h2};

          &:not(:first-child) {
            margin-top: 24px;
          }
        }
      }

      .copyright {
        display: block;
        text-align: center;
        padding: 24px 20px;
        font-size: ${({ theme }) => theme.fontSizes.md};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .header-nav {
      .header-nav-inner {
        padding-top: 100px;
      }

      .header-nav-list {
        > li {
          font-size: ${({ theme }) => theme.titleSizes.h3};

          &:not(:first-child) {
            margin-top: 16px;
          }
        }
      }
    }
   
  }
`
