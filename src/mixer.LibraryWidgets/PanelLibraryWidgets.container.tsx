import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LibraryWidgets from './LibraryWidgets';
import { mixer as store } from '@gdi/selectors';

export const PanelLibraryWidgetsContainer = (_props: any) => {
    const dispatch = useDispatch();
    const items = useSelector(store.selectors.base.$libraryWidgetsAll);

    const galleryOptions = useMemo(
        () => ({
            columns: 3,
            selectionMode: 'choose' as any,
            hideOverlay: true,
        }),
        []
    );

    const callbacks = useMemo(
        () => ({
            onItemAction: (id: string, action: string, data?: Json) => {
                dispatch({
                    type: 'IMAGE_ACTION',
                    actionType: action,
                    id,
                    data,
                });
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'selection':
                        dispatch(
                            store.actions.appStateMixer.patch({
                                showImageUploadModal: true,
                            })
                        );
                        break;
                }
            },
            onSelectionChange: (ids: string[]) => {
                dispatch({
                    type: 'ELEMENT_WIDGET_SELECT',
                    widgetId: ids[0],
                });
            },
        }),
        []
    );

    return (
        <LibraryWidgets
            items={items as any}
            callbacks={callbacks}
            galleryOptions={galleryOptions}
            hideParts={['header', 'buttons', 'preview', 'tools']}
        />
    );
};

export default PanelLibraryWidgetsContainer;
