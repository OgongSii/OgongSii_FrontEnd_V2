import styled, { css } from "styled-components";

export const ListContainer = styled.div<{ isModal: boolean }>`
  width: 540px;
  min-height: 518px;
  margin-top: 20px;
  border-radius: 1rem;
  ${({ isModal }) =>
    isModal
      ? css`
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        `
      : css`
          box-shadow: 0 0 10px #9199f5;
        `}
  background-color: #FFFFFF;
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
