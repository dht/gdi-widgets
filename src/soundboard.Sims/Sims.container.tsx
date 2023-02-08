import React from 'react';
import Sims from './Sims';
import { useSelector, useDispatch } from 'react-redux';
import { soundboard as store } from '@gdi/selectors';

export const SimsContainer = () => {
    return <Sims />;
};

export default SimsContainer;
