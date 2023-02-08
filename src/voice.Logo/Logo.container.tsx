import React from 'react';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { voice as store } from '@gdi/selectors';

export const LogoContainer = () => {
    return <Logo />;
};

export default LogoContainer;
