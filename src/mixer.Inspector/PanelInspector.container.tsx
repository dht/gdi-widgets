import React from 'react';
import Inspector from './Inspector';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from '@gdi/web-ui';
import { mixer as store } from '@gdi/selectors';

export const PanelInspectorContainer = (_props: any) => {
    const inspector = useSelector(store.selectors.base.$inspector);

    if (!inspector) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    return <Inspector data={inspector} />;
};

export default PanelInspectorContainer;
