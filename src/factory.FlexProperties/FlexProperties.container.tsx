import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlexProperties } from './FlexProperties';
import { factory as store } from '@gdi/selectors';

type FlexPropertiesContainer = {
    onClose?: () => void;
};

export const FlexPropertiesContainer = (props: FlexPropertiesContainer) => {
    const dispatch = useDispatch();
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const flexEntity = useSelector(store.selectors.base.$flexEntity);

    const { layoutId, flexEntityId } = currentIds;

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                if (props.onClose) {
                    props.onClose();
                }
            },
            onStyleSave: (styleData: Json) => {
                dispatch(
                    store.actions.layouts.patchItem(layoutId, flexEntityId, {
                        style: styleData,
                    })
                );
            },
            onPropsSave: (propsData: Json) => {
                dispatch(
                    store.actions.layouts.patchItem(layoutId, flexEntityId, {
                        props: propsData,
                    })
                );
            },
        }),
        [layoutId, flexEntityId]
    );

    return <FlexProperties flexEntity={flexEntity} callbacks={callbacks} />;
};

export default FlexPropertiesContainer;
