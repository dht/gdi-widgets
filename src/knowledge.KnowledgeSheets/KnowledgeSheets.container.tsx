import React from 'react';
import { KnowledgeSheets } from './KnowledgeSheets';
import { allConfigs, nodes } from './KnowledgeSheets.config';
import { useSelector, useDispatch } from 'react-redux';
import { prompt } from '@gdi/web-ui';
import { knowledge as store } from '@gdi/selectors';

export const KnowledgeSheetsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(store.selectors.raw.$rawKnowledgeState);
    const sheetData = useSelector(store.selectors.base.$sheetData);

    const { currentNodeId } = appState;

    const sheetConfig = allConfigs[currentNodeId];

    function onSelectNode(nodeId: string) {
        dispatch(
            store.actions.appStateKnowledge.patch({
                currentNodeId: nodeId,
            })
        );
    }

    return (
        <KnowledgeSheets
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

export default KnowledgeSheetsContainer;
