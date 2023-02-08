import * as React from 'react';
import TicketsByProject from './TicketsByProject';
import { useDispatch, useSelector } from 'react-redux';
import { tasks as store } from '@gdi/selectors';
import { useCallbacks } from '../_utils/useCallbacks';

export const TicketsByProjectContainer = () => {
    const dispatch = useDispatch();
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const projects = useSelector(store.selectors.raw.$rawProjects);
    const { projectKey } = currentIds;
    const selector = store.selectors.tables.$tickets;

    const emptyMessage = `No tickets in ${projectKey}`;

    const callbacks = useCallbacks({
        navigateToAllProjects: () => {
            dispatch(
                store.actions.currentIdsTasks.patch({
                    projectId: '',
                })
            );
        },
        onTileClick: (projectKey: string) => {
            dispatch(
                store.actions.currentIdsTasks.patch({
                    projectId: projectKey,
                })
            );
        },
    });

    return (
        <TicketsByProject
            projects={projects}
            projectKey={projectKey ?? ''}
            selector={selector}
            emptyMessage={emptyMessage}
            callbacks={callbacks}
        />
    );
};

export default TicketsByProjectContainer;
