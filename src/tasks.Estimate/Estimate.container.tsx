import React, { useCallback } from 'react';
import Estimate from './Estimate';
import { useSelector, useDispatch } from 'react-redux';
import { Estimation, estimations } from './Estimate.data';
import { tasks as store } from '@gdi/selectors';

export const EstimateContainer = () => {
    const dispatch = useDispatch();

    const onClick = useCallback((estimation: Estimation) => {
        dispatch({
            type: 'BLKR_SET_ESTIMATION',
            value: estimation.value,
            estimationTitle: estimation.id,
        });
    }, []);

    return <Estimate estimations={estimations} onClick={onClick} />;
};

export default EstimateContainer;
