import React, { useCallback, useEffect } from 'react';
import ProjectSwitch from './ProjectSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorage } from 'react-use';
import { tasks as store } from '@gdi/selectors';

const key = 'SELECTED_PROJECT_KEY';

export const ProjectSwitchContainer = () => {
    const dispatch = useDispatch();
    const projects = useSelector(store.selectors.base.$projects);
    const projectKey = useSelector(store.selectors.base.$projectKey);
    const [localKey, setLocalKey] = useLocalStorage<string>(
        key,
        projectKey as string
    );

    const onSelect = useCallback((key: string) => {
        setLocalKey(key);
        dispatch(
            store.actions.currentIdsTasks.patch({
                projectKey: key,
            })
        );
    }, []);

    useEffect(() => {
        if (localKey) {
            onSelect(localKey);
        }
    }, []);

    return (
        <ProjectSwitch
            projects={projects}
            projectKey={projectKey}
            onSelect={onSelect}
        />
    );
};

export default ProjectSwitchContainer;
