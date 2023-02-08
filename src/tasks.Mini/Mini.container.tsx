import React from 'react';
import Mini from './Mini';
import { tasks as store } from '@gdi/selectors';
import { useSelectorInterval } from '../_utils/useSelectorInterval';

export const MiniContainer = () => {
    const activeTask = useSelectorInterval(
        store.selectors.base.$activeTaskNonMemoized
    );

    return <Mini activeTask={activeTask} />;
};

export default MiniContainer;
