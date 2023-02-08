import React, { useMemo } from 'react';
import LiveTask from './LiveTask';
import ScanToStart from '../tasks.ScanToStart/ScanToStart.container';
import { useDispatch } from 'react-redux';
import { tasks as store } from '@gdi/selectors';
import { useSelectorInterval } from '../_utils/useSelectorInterval';

export const LiveTaskContainer = () => {
    const dispatch = useDispatch();
    const activeTask = useSelectorInterval(
        store.selectors.base.$activeTaskNonMemoized
    );

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

    if (!activeTask.isLoaded) {
        return <ScanToStart />;
    }

    return <LiveTask callbacks={callbacks} activeTask={activeTask} />;
};

export default LiveTaskContainer;
