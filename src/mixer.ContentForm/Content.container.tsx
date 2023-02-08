import React, { useCallback, useContext, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentForm } from '@gdi/engine';
import { Form } from '@gdi/web-ui';
import { mixer as store } from '@gdi/selectors';

export type ContentContainerProps = {
    element?: IWidgetInstance;
    widgetSchemas: IWidgetSchemas;
    instanceProps: Json;
    formOptions: Json;
};

export const ContentContainer = (props: ContentContainerProps) => {
    const dispatch = useDispatch();
    const { element, widgetSchemas, instanceProps, formOptions } = props;

    const callbacks = useMemo(
        () => ({
            onSave: (change: Json, _allData: Json) => {
                if (!element) {
                    console.log('no element ->');
                    return Promise.resolve(true);
                }

                if (Object.keys(change).length > 0) {
                    dispatch(
                        store.actions.libraryInstancesProps.patch(element.id, {
                            ...change,
                        })
                    );
                }

                dispatch(
                    store.actions.currentIds.patch({
                        contentInstanceId: '',
                    })
                );

                return Promise.resolve(true);
            },
        }),
        [element]
    );

    if (!widgetSchemas) {
        return null;
    }

    return (
        <ContentForm
            id='content-form'
            widgetSchemas={widgetSchemas}
            instanceProps={instanceProps}
            formOptions={formOptions}
            allDetails={allDetails}
            onSave={callbacks.onSave}
            formCmp={Form as any}
        />
    );
};

const allDetails = {};

export default ContentContainer;
