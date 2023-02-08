import React, { useMemo } from 'react';
import Pages from './Pages';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { mixer as store } from '@gdi/selectors';

export const PagesContainer = () => {
    const dispatch = useDispatch();

    const pages = useSelector(store.selectors.tables.$libraryPages);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {
                switch (actionId) {
                    case 'import':
                        dispatch({ type: 'IMPORT_SITE', source: 'json' });
                        break;
                    case 'importStarterKit':
                        dispatch({ type: 'IMPORT_SITE', source: 'starterKit' });
                        break;
                    case 'importJson':
                        dispatch({ type: 'IMPORT_SITE', source: 'json' });
                        break;
                    case 'download':
                        dispatch({ type: 'EXPORT_SITE' });
                        break;
                    case 'status':
                        dispatch({
                            type: 'CHANGE_PAGE_STATUS',
                            pageId: data?.item?.id,
                        });
                        break;
                    case 'pageInstanceVersion':
                        dispatch({
                            type: 'CHANGE_PAGE_VERSION',
                            pageId: data?.item?.id,
                        });
                        break;
                }
            },
        }),
        []
    );

    return (
        <Pages
            data={pages}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default PagesContainer;
