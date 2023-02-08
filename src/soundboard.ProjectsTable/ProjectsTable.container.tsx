import ProjectsTable from './ProjectsTable';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { soundboard as store, tasks } from '@gdi/selectors';

export const ProjectsTableContainer = () => {
    const dispatch = useDispatch();
    const projects = useSelector(store.selectors.base.$projectsTable);

    const onProjectClick = useCallback((project: IProject) => {
        const { key } = project;

        dispatch(
            store.actions.currentIdsSoundboard.patch({
                projectKey: key,
            })
        );
    }, []);

    const onColorChange = useCallback((project: IProject, newColor: string) => {
        dispatch(
            tasks.actions.projects.patch(project.id, {
                color: newColor,
            })
        );
    }, []);

    return (
        <ProjectsTable
            projects={projects}
            onProjectClick={onProjectClick}
            onColorChange={onColorChange}
        />
    );
};

export default ProjectsTableContainer;
