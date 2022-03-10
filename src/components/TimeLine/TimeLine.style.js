import styled from "styled-components"

export const TimelineStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  .timeline {
    height: 290px;
    width: 24px;
    border-left: 3px solid ${({ theme }) => theme.colors.black};
    border-right: 3px solid ${({ theme }) => theme.colors.black};

    &.timeline1 {
      height: 100px;
      border-top: 3px solid ${({ theme }) => theme.colors.black};
      border-radius: 50px 50px 0 0;
    }

    &.timeline6 {
      border-radius: 0 0 50px 50px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.black};
      height: 160px;
    }
  }

  .message-wrapper {
    position: relative;
  }

  .circle-number {
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    border-radius: 50%;
  }

  .message {
    position: absolute;
    top: 20%;
    min-width: 450px;
    font-weight: bold;
    opacity: 0;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 20px;

    &.left {
      margin-left: 64px;
      left: 50%;
    }

    &.right {
      margin-right: 64px;
      right: 50%;
    }

    h2 {
      margin-bottom: 16px;
    }

    p {
      padding-bottom: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-top: 40px;
    .message {
      min-width: 400px;

      &.left {
        margin-left: 32px;
      }

      &.right {
        margin-right: 32px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    align-items: flex-start;
    padding-left: 8px;

    .message {
      min-width: 480px;
      top: 0;

      &.left {
        margin-left: 32px;
        left: 0;
      }

      &.right {
        margin-right: 0;
        margin-left: 32px;
        left: 0;
        right: initial;
        text-align: left;
      }
    }

    .timeline {
      height: 330px;

      &.timeline1 {
        height: 10px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .timeline {
      width: 16px;
      height: 400px;
    }
    .message {
      min-width: 290px;
      padding: 24px;
    }

    .circle-number {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    .timeline {
      height: 420px;
    }
    .message {
      min-width: 260px;
      padding: 16px;
    }
  }
`
