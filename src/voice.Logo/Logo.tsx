import React from 'react';
import { Wrapper } from './Logo.style'; // @ts-ignore
import logo from './Logo.svg';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
    return (
        <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper'>
            <img src={logo as any} alt='Logo' />
        </Wrapper>
    );
}

export default Logo;
