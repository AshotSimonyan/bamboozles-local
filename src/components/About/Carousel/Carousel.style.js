import styled from "styled-components"

export const AboutCarouselStyle = styled.div`
  padding-bottom: 24px;

  .slick-slider {
    pointer-events: none;
  }

  .slick-slide {
    border: none;
    border-right: 24px solid transparent;

    .carousel-item {
      display: block !important;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-bottom: 16px;

    .slick-slide {
      border-right: 16px solid transparent;
    }
  }
`
