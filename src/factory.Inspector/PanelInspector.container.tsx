import React from 'react';
import Inspector from './Inspector';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from '@gdi/web-ui';
import { factory as store } from '@gdi/selectors';

export type PanelInspectorContainerProps = {
    flex?: boolean;
};

export const PanelInspectorContainer = (
    _props: PanelInspectorContainerProps
) => {
    const inspector = useSelector(store.selectors.base.$inspector);

    if (!inspector) {
        return (
            <Empty
                message='Select a widget'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    return <Inspector data={inspector} />;
};

export default PanelInspectorContainer;
