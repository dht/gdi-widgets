import React from 'react';
import Squares from './Squares';
import { useSelector } from 'react-redux';
import { SoundboardContextProvider } from '../_context/SoundboardContext';
import { soundboard as store } from '@gdi/selectors';

export const SquaresContainer = () => {
    const weeks = useSelector(store.selectors.base.$weeks);
    const expectedManasByProject = useSelector(
        store.selectors.base.$expectedManasByProject
    );

    return (
        <SoundboardContextProvider>
            <Squares
                weeks={weeks}
                expectedManasByProject={expectedManasByProject}
            />
        </SoundboardContextProvider>
    );
};

export default SquaresContainer;
