import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SoundboardContextProvider } from '../_context/SoundboardContext';
import ScheduleTable from './ScheduleTable';
import { soundboard as store } from '@gdi/selectors';

export const ScheduleTableContainer = () => {
    const dispatch = useDispatch();
    const scheduleBlocks = useSelector(store.selectors.base.$scheduleBlocks);
    const scheduleSessions = useSelector(
        store.selectors.base.$scheduleSessions
    );
    const appState = useSelector(store.selectors.raw.$rawSchedulerState);
    const currentDayAndTime = useSelector(
        store.selectors.base.$currentDayAndTime
    );

    const onClick = useCallback((day: number, time: string) => {
        dispatch(
            store.actions.appStateScheduler.patch({
                day,
                time,
            })
        );
    }, []);

    const onMove = useCallback((key: string) => {
        dispatch({ type: 'SCHEDULE_TABLE_MOVE', key });
    }, []);

    const onClear = useCallback(() => {
        dispatch({ type: 'SCHEDULE_DETACH_TICKET_FROM_BLOCK' });
    }, []);

    return (
        <SoundboardContextProvider>
            <ScheduleTable
                isDayTime={appState.isDayTime}
                currentDayAndTime={currentDayAndTime}
                scheduleSessions={scheduleSessions}
                scheduleBlocks={scheduleBlocks}
                onClick={onClick}
                onMove={onMove}
                onClear={onClear}
            />
        </SoundboardContextProvider>
    );
};

export default ScheduleTableContainer;
