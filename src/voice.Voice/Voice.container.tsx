import React from 'react';
import Voice from './Voice';
import { useSelector, useDispatch } from 'react-redux';
import { voice as store } from '@gdi/selectors';

export const VoiceContainer = () => {
    return <Voice />;
};

export default VoiceContainer;
