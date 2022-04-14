import styled from "styled-components"

export const TeamStyle = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;

  .title {
    padding-bottom: 48px;
    text-align: center;
  }

  .img-wrapper {
    padding-bottom: 16px;

    img {
      display: block;
      width: 100%;
    }
  }

  .name {
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding-top: 4px;

    .icon {
      margin-left: 8px;
    }
  }

  .position {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  .slick-slide {
    padding: 0 12px;
  }
  .team-card {
    width: 262px;
    padding: 16px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  
  .slick-slider {
    position: relative;}
}

  .slick-next,
  .slick-prev {
    top: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.colors.black};
    background: ${({theme}) => theme.colors.white};
    transition: width 0.3s;
    transform: translateY(50%);
    
    &:before {
      content: '';
    }
    
    &:hover, &:focus {
      background: ${({theme}) => theme.colors.white};
    }
  }

.slick-next {
  left: 52%;
  right: inherit;
}

.slick-prev {
  left: inherit;
  right: 52%;
}

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .title {
      padding-bottom: 24px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 80px 0 120px;

    .team-card {
      &:nth-child(even) {
        margin-top: 0;
      }
    }
  }
`
