import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    padding-top: 10px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
        max-width: 200px;
    }
`;

export const NewWrapper = styled.div`
    display: flex;
    padding: 10px;
`;
