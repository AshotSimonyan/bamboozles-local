import styled from "styled-components"

export const FAQStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 160px 0;

  .faq-content {
    display: flex;

    .left {
      width: 454px;
    }

    .right {
      flex: 1;
      padding-left: 24px;
    }
  }

  .Collapsible {
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }

  .Collapsible__trigger {
    display: block;
    border-radius: 16px 16px 0 0;

    &.is-open {
      .icon {
        transform: rotate(180deg);
      }
    }
  }

  .Collapsible__contentInner {
    padding-bottom: 24px;
    font-size: ${({ theme }) => theme.titleSizes.h4};
  }

  .trigger-inner {
    position: relative;
    font-weight: 700;
    padding: 24px 40px 24px 0;
    cursor: pointer;

    .icon {
      position: absolute;
      top: 20px;
      right: 0;
      transition: 0.5s;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 120px 0;

    .faq-content {
      .left {
        width: 360px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .faq-content {
      flex-direction: column;
      .left {
        width: 100%;

        .title {
          padding-bottom: 12px;
        }
      }
      .right {
        padding-left: 0;
      }
    }
  }
`
