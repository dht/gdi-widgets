import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleClock from './ScheduleClock';
import { soundboard as store } from '@gdi/selectors';

export const ScheduleClockContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(store.selectors.raw.$rawSchedulerState);
    const now = useSelector(store.selectors.raw.$now);

    const changeDelta = useCallback((timeDeltaInMinutes: number) => {
        dispatch(
            store.actions.appStateScheduler.patch({
                timeDeltaInMinutes,
            })
        );
    }, []);

    return (
        <ScheduleClock
            changeDelta={changeDelta}
            delta={appState.timeDeltaInMinutes}
        />
    );
};

export default ScheduleClockContainer;
