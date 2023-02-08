import React from 'react';
import Speaker from './Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { voice as store } from '@gdi/selectors';

export const SpeakerContainer = () => {
    const isSpeaking = useSelector(
        store.selectors.raw.$rawVoiceState
    ).isSpeaking;

    return <Speaker isSpeaking={isSpeaking} />;
};

export default SpeakerContainer;
