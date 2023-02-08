import React from 'react';
import RayHome from './RayHome';
import { useSelector, useDispatch } from 'react-redux';
import { rayl as store } from '@gdi/selectors';

export const RayHomeContainer = () => {
    return <RayHome />;
};

export default RayHomeContainer;
