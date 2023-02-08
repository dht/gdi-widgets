import React from 'react';
import PlayMode from './PlayMode';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const ModalPlayModeContainer = () => {
    const dispatch = useDispatch();
    const mixerState = useSelector(store.selectors.raw.$rawMixerState);
    const showPlayModeMessage = mixerState.showPlayModeMessage;

    if (!showPlayModeMessage) {
        return null;
    }

    function onClose() {
        dispatch(
            store.actions.appStateMixer.patch({ showPlayModeMessage: false })
        );
    }

    return <PlayMode onClose={onClose} showModal={showPlayModeMessage} />;
};

export default ModalPlayModeContainer;
