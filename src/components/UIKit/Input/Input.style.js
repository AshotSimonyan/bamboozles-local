import styled, { css } from "styled-components"

export const InputStyle = styled.label`
  display: block;
  position: relative;

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  .input[type="number"] {
    -moz-appearance: textfield;
  }
  .input:-webkit-autofill,
  .input:-webkit-autofill:hover,
  .input:-webkit-autofill:focus,
  .input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px ${({ theme }) => theme.colors.black} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  .input {
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 12px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: border-color 0.3s;
    width: 100%;
    outline: none;
    border-bottom: 1px solid
      ${({ theme, errorMessage }) =>
        errorMessage ? theme.colors.error : theme.colors.white};
    caret-color: ${({ theme, errorMessage }) =>
      errorMessage ? theme.colors.error : theme.colors.text};
    display: block;
    border-radius: 0;
    -webkit-appearance: none;

    //&::placeholder {
    //  opacity: 0;
    //}
    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
    &.disabled,
    &:disabled {
      opacity: 0.7;
      pointer-events: none;
      border-bottom-color: ${({ theme }) => theme.colors.primary}59;
    }
  }
  .textarea {
    resize: none;
  }
  .error-message {
    position: absolute;
    top: 100%;
    transform: translateY(2px);
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding-left: 12px;
  }
`
