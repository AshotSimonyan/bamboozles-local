import styled from "styled-components"

export const TimelineStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 114px;
  position: relative;


  .timeline-tree {
    position: relative;
    
    .overlay {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({theme}) => theme.colors.secondary};
      transition: .2s;
    }
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
    min-width: 450px;
    font-weight: bold;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 20px;
    
    .card-img {
      position: absolute;
      height: 260px;
      top: 0;
    }
    

    &.left {
      margin-left: 68px;
      left: 50%;
    }

    &.right {
      margin-right: 68px;
      right: 50%;
    }
    
    &-1 {
      top: 10%;

      .card-img {
        transform: translateY(-70%);
        left: 20px;
      }
    }
    
    &-2 {
      top: 30%;
      .card-img {
        transform: translateY(-70%);
        right: 20px;
      }
    }
    
    &-3 {
      top: 50%;
      .card-img {
        transform: translateY(-70%);
        right: 20px;
      }
    }
    
    &-4 {
      top: 70%;
      .card-img {
        transform: translateY(-80%);
        left: 20px;
      }
    }
    
    &-5 {
      top: 90%;
      .card-img {
        transform: translateY(-68%);
        right: 20px;
      }
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
        //margin-left: 32px;
      }

      &.right {
        //margin-right: 32px;
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
        left: 0;
      }

      &.right {
        margin-right: 0;
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
