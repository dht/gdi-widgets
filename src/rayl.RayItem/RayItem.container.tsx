import React from 'react';
import RayItem from './RayItem';
import { useSelector, useDispatch } from 'react-redux';
import { rayl as store } from '@gdi/selectors';

export const RayItemContainer = () => {
    return <RayItem />;
};

export default RayItemContainer;
