import React, { useCallback } from 'react';
import Transcript from './Transcript';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { voice as store } from '@gdi/selectors';

export const TranscriptContainer = () => {
    const navigate = useNavigate();

    const showStateDrawer = useCallback(() => {
        navigate('/voice/viz');
    }, []);

    return <Transcript showStateDrawer={showStateDrawer} />;
};

export default TranscriptContainer;
