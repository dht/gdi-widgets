import React, { useMemo } from 'react';
import Playback from './Playback';
import { useDispatch, useSelector } from 'react-redux';
import { tasks as store } from '@gdi/selectors';

export const PlaybackContainer = () => {
    const dispatch = useDispatch();

    const activeTask = useSelector(store.selectors.base.$activeTask);

    const callbacks = useMemo(
        () => ({
            onCancel: () => {
                dispatch({
                    type: 'BLKR_SESSION_CANCEL',
                    activeTask,
                });
            },
            onResume: () => {
                dispatch({
                    type: 'BLKR_SESSION_PAUSE_OR_RESUME',
                    activeTask,
                });
            },
            onPause: () => {
                dispatch({
                    type: 'BLKR_SESSION_PAUSE_OR_RESUME',
                    activeTask,
                });
            },
            onStop: () => {
                dispatch({
                    type: 'BLKR_SESSION_COMPLETE',
                    activeTask,
                    payload: { isDone: false },
                });
            },
            onDone: () => {
                dispatch({
                    type: 'BLKR_SESSION_COMPLETE',
                    activeTask,
                    payload: { isDone: true },
                });
            },
        }),
        [activeTask, dispatch]
    );

    return <Playback callbacks={callbacks} activeTask={activeTask} />;
};

export default PlaybackContainer;
