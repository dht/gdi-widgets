import React, { useCallback, useRef } from 'react';
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { soundboard as store, tasks } from '@gdi/selectors';

type UpdateAction = {
    weekPointer: WeekPointer;
    day?: number;
    minutes: number;
};

export type SoundboardContext = {
    projectsColors: ProjectColors;
    hoursPerPeriod: HoursPerPeriod;
    updateMinutesForDay: (updateAction: UpdateAction) => void;
    updateMinutesForWeek: (updateAction: UpdateAction) => void;
    patchState: (change: Partial<ISoundboardState>, delay?: number) => void;
};

export const soundboardContext = createContext<SoundboardContext>({
    hoursPerPeriod: {
        perDay: 0,
        perQuarter: 0,
        perWeek: 0,
    },
    updateMinutesForDay: () => {},
    updateMinutesForWeek: () => {},
    projectsColors: {},
    patchState: () => {},
});

export const SoundboardContextProvider = (props: any) => {
    const dispatch = useDispatch();
    const hoursPerPeriod = useSelector(store.selectors.base.$hoursPerPeriod);
    const projectsColors = useSelector(tasks.selectors.base.$projectsColors);
    const timeout = useRef<any>();

    const updateMinutesForDay = useCallback(
        (updateAction: UpdateAction) => {
            dispatch({
                type: 'UPDATE_MINUTES_FOR_DAY',
                ...updateAction,
            });
        },
        [dispatch]
    );

    const updateMinutesForWeek = useCallback(
        (updateAction: UpdateAction) => {
            dispatch({
                type: 'UPDATE_MINUTES_FOR_WEEK',
                ...updateAction,
            });
        },
        [dispatch]
    );

    const patchState = useCallback(
        (change: Partial<ISoundboardState>, delay: number = 0) => {
            clearTimeout(timeout.current);

            timeout.current = setTimeout(() => {
                dispatch(store.actions.appStateSoundboard.patch(change));
            }, delay);
        },
        [dispatch]
    );

    return (
        <soundboardContext.Provider
            value={{
                hoursPerPeriod,
                updateMinutesForDay,
                updateMinutesForWeek,
                projectsColors,
                patchState,
            }}
        >
            {props.children}
        </soundboardContext.Provider>
    );
};
