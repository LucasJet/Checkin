import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  
  /* padding: 16px; */
  /* width: 100%; */

  display: flex;
  align-items: center; 

  & + div {
    margin-top: 8px;
  } 

  ${props =>
    props.isErrored &&
    css`
      // border-color: var(--color-primary-light);
    `}

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    color: var(--color-primary-light);
    margin: 0;
  }

  span {
    background: var(--color-primary-light);
    color: #fff;

    &::before {
      border-color: var(--color-primary-light) transparent;
    }
  }
`;
