import React, { useCallback, useMemo } from 'react';
import { Wrapper } from './Play.style';

export type PlayProps = {};

export function Play(_props: PlayProps) {
    return (
        <Wrapper className='Play-wrapper' data-testid='Play-wrapper'></Wrapper>
    );
}

export default Play;
