import React, { useMemo } from 'react';
import Projects from './Projects';
import { useSelector, useDispatch } from 'react-redux';
import { tasks as store } from '@gdi/selectors';

export const ProjectsContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(store.selectors.tables.$projects);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                // console.log('itemId ->', itemId);
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Projects
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default ProjectsContainer;
