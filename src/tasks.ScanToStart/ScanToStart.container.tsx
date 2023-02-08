import React, { useMemo } from 'react';
import ScanToStart from './ScanToStart';
import { useDispatch } from 'react-redux';

export const ScanToStartContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            onSync: () => {
                dispatch({
                    type: 'BLKR_JIRA_SYNC',
                });
            },
        }),
        [dispatch]
    );

    return <ScanToStart callbacks={callbacks} />;
};

export default ScanToStartContainer;
