import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    overflow: hidden;
`;

export const Toggler = styled.button`
    position: absolute;
    top: 10px;
    right: 14px;
    padding: 3.5px 6px;
    background-color: #223;
    color: #ccc;
    border: 1px solid #aaa;
    border-radius: 3px;
    cursor: pointer;

    i {
        font-size: 20px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &:active {
        transform: translateY(1px) translateX(1px);
    }

    &.left {
        right: auto;
        left: -44px;
    }
`;
