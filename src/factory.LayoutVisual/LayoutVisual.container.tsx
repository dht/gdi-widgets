import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LayoutVisual from './LayoutVisual';
import { useAuthMount } from '@gdi/hooks';
import { useNavigate } from 'react-router-dom';
import { factory as store } from '@gdi/selectors';

export const LayoutVisualContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const appState = useSelector(store.selectors.raw.$rawFactoryState);
    const layout = useSelector(store.selectors.base.$layout);
    const flex = useSelector(store.selectors.base.$flexEntityFlex);

    const { isLoadingLayoutItems } = appState;
    const { resolutionId } = currentIds;

    useAuthMount(async () => {
        dispatch(
            store.actions.appStateFactory.patch({ isLoadingLayoutItems: true })
        );
        await dispatch(store.actions.layouts.getItems(layout.id, {}));
        dispatch(store.actions.appStateFactory.patch({ isLoadingLayoutItems: false })); // prettier-ignore
    }, layout);

    const callbacks = useMemo(
        () => ({
            selectEntity: (id: string) => {
                dispatch(
                    store.actions.currentIdsFactory.patch({
                        flexEntityId: id,
                    })
                );
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'splitHorizontally':
                        dispatch({ type: 'FLEX_SPLIT', isHorizontally: true });
                        break;
                    case 'splitVertically':
                        dispatch({ type: 'FLEX_SPLIT', isHorizontally: false });
                        break;
                    case 'delete':
                        dispatch({ type: 'FLEX_DELETE' });
                        break;
                    case 'rename':
                        dispatch({ type: 'FLEX_RENAME' });
                        break;
                    case 'edit':
                        dispatch({ type: 'FLEX_EDIT' });
                        break;
                    case 'rotate':
                        dispatch({ type: 'FLEX_ROTATE' });
                        break;
                    case 'back':
                        dispatch(
                            store.actions.currentIdsFactory.patch({
                                layoutId: '',
                            })
                        );
                        const path = document.location.pathname.split('/');
                        path.pop();
                        navigate(path.join('/'));
                        break;
                    case 'mode':
                        dispatch(
                            store.actions.appStateFactory.patch({
                                showItemsInTable: true,
                            })
                        );
                        break;
                }
            },
            onArrow: (shortKey: IShortKey) => {
                dispatch({
                    type: 'FLEX_DESIGNER_ARROW',
                    shortKey,
                });
            },
            onSeed: (withId: string) => {
                dispatch({
                    type: 'FLEX_SEED',
                    withId,
                });
            },
            onFlexChange: (flex: number) => {
                dispatch({
                    type: 'FLEX_PROPS_FLEX',
                    flex,
                });
            },
            onResolutionChange: (resolutionIndex: number) => {
                dispatch({
                    type: 'FLEX_RESOLUTION',
                    resolutionIndex,
                });
            },
        }),

        []
    );

    if (!layout) {
        return null;
    }

    return (
        <LayoutVisual
            layout={layout}
            items={layout.items}
            selectedItemId={currentIds.flexEntityId}
            callbacks={callbacks}
            isLoading={isLoadingLayoutItems}
            flex={flex}
            resolutionId={resolutionId as IResolution}
        />
    );
};

export default LayoutVisualContainer;
