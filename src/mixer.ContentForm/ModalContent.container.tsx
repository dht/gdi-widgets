import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@gdi/web-ui';
import { ContentContainer } from './Content.container';
import { instanceToWidgetSchemas, instanceToInstanceProps } from '@gdi/engine';
import { mixer as store } from '@gdi/selectors';

export const ModalContentContainer = () => {
    const dispatch = useDispatch();
    const element = useSelector(store.selectors.base.$instanceContent);
    const formOptions = useSelector(store.selectors.forms.$contentFormOptions);

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

    function onClose() {
        dispatch(store.actions.currentIds.patch({ contentInstanceId: '' }));
    }

    if (!element || !widgetSchemas || !instanceProps) {
        return null;
    }

    return (
        <Modal open={true} title='Content' onClose={onClose}>
            <ContentContainer
                element={element}
                widgetSchemas={widgetSchemas}
                instanceProps={instanceProps}
                formOptions={formOptions}
            />
        </Modal>
    );
};

export default ModalContentContainer;
