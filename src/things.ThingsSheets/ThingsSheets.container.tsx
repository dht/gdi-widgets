import React from 'react';
import { ThingsSheets } from './ThingsSheets';
import { allConfigs, nodes } from './ThingsSheets.config';
import { useSelector, useDispatch } from 'react-redux';
import { prompt } from '@gdi/web-ui';
import { things as store } from '@gdi/selectors';

export const ThingsSheetsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(store.selectors.raw.$rawThingsState);
    const sheetData = useSelector(store.selectors.base.$sheetData);

    const { currentNodeId } = appState;

    const sheetConfig = allConfigs[currentNodeId];

    function onSelectNode(nodeId: string) {
        dispatch(
            store.actions.appStateThings.patch({
                currentNodeId: nodeId,
            })
        );
    }

    return (
        <ThingsSheets
            dispatch={dispatch}
            nodes={nodes}
            sheetConfig={sheetConfig}
            sheetData={sheetData}
            confirm={prompt.confirm}
            currentNodeId={currentNodeId}
            onSelectNode={onSelectNode}
        />
    );
};

export default ThingsSheetsContainer;
