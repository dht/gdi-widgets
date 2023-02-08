import React, { useMemo } from 'react';
import DocsHome from './DocsHome';
import { useSelector, useDispatch } from 'react-redux';
import { docs as store } from '@gdi/selectors';

export const DocsHomeContainer = () => {
    const dispatch = useDispatch();
    const docs = useSelector(store.selectors.base.$docs);
    const doc = useSelector(store.selectors.base.$doc);
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);

    const tabs = useMemo(() => {
        return [...docs];
    }, [docs]);

    const callbacks = useMemo(
        () => ({
            onDocChange: (content: string) => {
                dispatch({
                    type: '$SAVE_DOC',
                    docId: currentIds.docId,
                    content,
                });
            },
            selectDoc: (docId: string) => {
                dispatch(store.actions.currentIdsDocs.patch({ docId }));
            },
            saveDoc: (content: string) => {
                dispatch({
                    type: '$SAVE_DOC',
                    docId: currentIds.docId,
                    content,
                    noDebounce: true,
                });
            },
            newDoc: () => {
                dispatch({
                    type: '$NEW_DOC',
                });
            },
            renameDoc: (docId: string) => {
                dispatch({
                    type: '$RENAME_DOC',
                    docId,
                });
            },
            deleteDoc: (docId: string) => {
                dispatch({
                    type: '$DELETE_DOC',
                    docId,
                });
            },
        }),
        [docs, currentIds]
    );

    return <DocsHome tabs={tabs as any} doc={doc} callbacks={callbacks} />;
};

export default DocsHomeContainer;
