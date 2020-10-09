import styled from 'styled-components';

export const Container = styled.div `
    position: relative;

    span {
        width: 160px;
        background: #2c2459;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opactiy: 0;
        transition: opacity 0.04s;
        visibility: hidden;

        position: absolute;;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);

        color: #312e38;

        &::before {
            content: '';
            border-color:  #2c2459 transparent;
            border-width: 6px 6px 0 6px;
            top: 100%
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;