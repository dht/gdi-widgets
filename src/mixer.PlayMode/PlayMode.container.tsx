import React from 'react';
import PlayMode from './PlayMode';
import { useSelector, useDispatch } from 'react-redux';

export const PlayModeContainer = () => {
    return <PlayMode showModal={true} onClose={() => {}} />;
};

export default PlayModeContainer;
