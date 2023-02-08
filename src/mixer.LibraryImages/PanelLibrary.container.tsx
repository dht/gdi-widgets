import React from 'react';
import styled from 'styled-components';
import { Empty } from '@gdi/web-ui';
import { PanelLibraryImagesContainer } from './PanelLibraryImages.container';
import { PanelLibraryWidgetsContainer } from '../mixer.LibraryWidgets/PanelLibraryWidgets.container';
import { useSelector } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const PanelLibraryContainer = (_props: any) => {
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const panelLibraryFlavour = useSelector(
        store.selectors.base.$panelLibraryFlavour
    );

    if (!currentIds.selectedInstanceId) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    switch (panelLibraryFlavour) {
        case 'images':
            return <PanelLibraryImagesContainer />;
        case 'widgets':
            return <PanelLibraryWidgetsContainer />;
        default:
            return <></>;
    }
};

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
`;

export default PanelLibraryContainer;
