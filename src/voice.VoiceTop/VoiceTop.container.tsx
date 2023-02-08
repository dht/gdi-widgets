import React from 'react';
import VoiceTop from './VoiceTop';
import { useSelector, useDispatch } from 'react-redux';
import { voice as store } from '@gdi/selectors';

export const VoiceTopContainer = () => {
    return <VoiceTop />;
};

export default VoiceTopContainer;
