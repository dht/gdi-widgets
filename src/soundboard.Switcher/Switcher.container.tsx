import React, { useCallback, useMemo } from 'react';
import Switcher from './Switcher';
import { useDispatch, useSelector } from 'react-redux';
import { soundboard as store } from '@gdi/selectors';

const options = [
    {
        id: 'day',
        text: 'Day',
    },
    {
        id: 'evening',
        text: 'Evening',
    },
];

export const SwitcherContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(store.selectors.raw.$rawSchedulerState);

    const value = appState.isDayTime ? 'day' : 'evening';

    const onChange = useCallback((option: IOption) => {
        dispatch(
            store.actions.appStateScheduler.patch({
                isDayTime: option.id === 'day',
            })
        );
    }, []);

    return (
        <Switcher value={value} options={options as any} onChange={onChange} />
    );
};

export default SwitcherContainer;
