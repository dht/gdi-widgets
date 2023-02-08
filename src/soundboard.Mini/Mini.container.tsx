import React from 'react';
import Mini from './Mini';
import { useSelector, useDispatch } from 'react-redux';
import { soundboard as store } from '@gdi/selectors';

export const MiniContainer = () => {
    const appState = useSelector(store.selectors.raw.$rawSoundboardState);
    const projectsSoundboard = useSelector(
        store.selectors.base.$projectsSoundboard
    );
    const { dailyHours } = appState;

    return <Mini projects={projectsSoundboard} dailyHours={dailyHours} />;
};

export default MiniContainer;
