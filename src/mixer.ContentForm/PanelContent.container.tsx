import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ContentContainer } from './Content.container';
import { Empty } from '@gdi/web-ui';
import { useDispatch, useSelector } from 'react-redux';
import { instanceToWidgetSchemas, instanceToInstanceProps } from '@gdi/engine';
import { mixer as store } from '@gdi/selectors';

export const PanelContentContainer = (props: any) => {
    const currentIds = useSelector(store.selectors.raw.$rawCurrentIds);
    const element = useSelector(store.selectors.base.$instanceSelected);

    const widgetSchemas = useMemo(() => {
        if (!element) {
            return;
        }

        return instanceToWidgetSchemas(element);
    }, [element]);

    const instanceProps = useMemo(() => {
        if (!element) {
            return;
        }

        return instanceToInstanceProps(element);
    }, [element]);

    const formOptions = useSelector(
        store.selectors.forms.$contentFormOptionsSelected
    );

    if (!currentIds.selectedInstanceId || !widgetSchemas || !instanceProps) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    return (
        <Wrapper>
            <ContentContainer
                element={element}
                widgetSchemas={widgetSchemas}
                instanceProps={instanceProps}
                formOptions={formOptions}
            />
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    display: flex;
    flex: 1;

    .Layouts-wrapper {
        flex-direction: column;
        width: 95%;

        > div {
            width: 100%;
        }
    }
`;

export default PanelContentContainer;
