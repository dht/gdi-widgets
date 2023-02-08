import React, { useCallback } from 'react';
import SpeakButton from './SpeakButton';
import { useSelector, useDispatch } from 'react-redux';
import { voice as store } from '@gdi/selectors';

export const SpeakButtonContainer = () => {
    const isSpeaking = useSelector(
        store.selectors.raw.$rawVoiceState
    ).isSpeaking;

    const dispatch = useDispatch();

    const onMouseDown = useCallback(() => {
        dispatch(store.actions.appStateVoice.patch({ isSpeaking: true }));
    }, []);

    const onMouseUp = useCallback(() => {
        dispatch(store.actions.appStateVoice.patch({ isSpeaking: false }));
    }, []);

    return (
        <SpeakButton
            isSpeaking={isSpeaking}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        />
    );
};

export default SpeakButtonContainer;
