import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-variation-settings: 'wdth' 100, 'wght' 200;
    color: #aaa;

    i {
        margin-bottom: 20px;
        font-size: 80px;
    }

    &.active {
        background-color: #334;
    }
`;

export const ErrorWrapper = styled.div`
    color: red;
    margin-top: 10px;
    font-size: 20px;
`;
