import React, { useCallback } from 'react';
import ScheduleClock2 from './ScheduleClock2';
import { useDispatch, useSelector } from 'react-redux';
import { soundboard as store } from '@gdi/selectors';

export const ScheduleClock2Container = () => {
    const dispatch = useDispatch();
    const time = useSelector(store.selectors.raw.$now);
    const weather = {} as any;

    const changeDelta = useCallback((timeDeltaInMinutes: number) => {
        dispatch(
            store.actions.appStateScheduler.patch({
                timeDeltaInMinutes,
            })
        );
    }, []);

    return (
        <ScheduleClock2
            weather={weather}
            time={time as any}
            changeDelta={changeDelta}
        />
    );
};

export default ScheduleClock2Container;
