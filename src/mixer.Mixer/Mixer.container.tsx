import React, { useMemo } from 'react';
import Mixer from './Mixer';
import { invokeEvent } from 'shared-base';
import { MixerStructureContainer } from '../mixer.MixerStructure/MixerStructure.container';
import { MixerVisualContainer } from '../mixer.MixerVisual/MixerVisual.container';
import { ModalContentContainer } from '../mixer.ContentForm/ModalContent.container';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import { mixer as store } from '@gdi/selectors';

export const MixerContainer = () => {
    const dispatch = useDispatch();

    const pages = useSelector(store.selectors.tables.$libraryPages);
    const page = useSelector(store.selectors.base.$page);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    useMount(() => {
        dispatch({ type: 'SELECT_PAGE_INSTANCE_ON_NAVIGATION' });
    });

    const { title = '' } = page ?? {};

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, _data?: Json) => {
                switch (actionId) {
                    case 'back':
                        invokeEvent('navigate', { path: '/admin/pages' });
                        break;
                    case 'editPage':
                        dispatch({ type: 'EDIT_PAGE' });
                        break;
                    case 'duplicateInstance':
                        dispatch({ type: 'PROMOTE_PAGE_INSTANCE' });
                        break;
                    case 'promoteInstance':
                        dispatch({ type: 'PROMOTE_PAGE_INSTANCE' });
                        break;
                    case 'editInstance':
                        dispatch({ type: 'DELETE_PAGE_INSTANCE' });
                        break;
                    case 'resetInstance':
                        dispatch({ type: 'RESET_PAGE_INSTANCE' });
                        break;
                    case 'versions':
                        dispatch(
                            store.actions.appStateMixer.patch({
                                showMixerTree: true,
                            })
                        );
                        break;
                    case 'preview':
                        invokeEvent('navigate', { path: '/admin/preview' });
                        break;
                    case 'download':
                        dispatch({ type: 'EXPORT_PAGE' });
                        break;
                    case 'import':
                        dispatch({ type: 'EXPORT_PAGE' });
                        break;
                }
            },
        }),
        []
    );

    return (
        <>
            <ModalContentContainer />
            <Mixer
                header={title}
                data={pages}
                callbacks={callbacks}
                allOptions={allOptions}
                dispatch={dispatch}
                customView={MixerVisualContainer}
                customView2={MixerStructureContainer}
            />
        </>
    );
};

export default MixerContainer;
