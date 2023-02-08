import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@gdi/web-ui';
import { FlexPropertiesContainer } from './FlexProperties.container';
import { factory as store } from '@gdi/selectors';

export const ModalFlexPropertiesContainer = () => {
    const dispatch = useDispatch();
    const flexEntity = useSelector(store.selectors.base.$flexEntity);
    const appState = useSelector(store.selectors.raw.$rawFactoryState);

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    store.actions.appStateFactory.patch({
                        showPropertiesModal: false,
                    })
                );
            },
        }),
        []
    );

    if (!appState.showPropertiesModal || !flexEntity) {
        return null;
    }

    const { id, locationId } = flexEntity;

    const title = [locationId, id].filter((i) => i).join(' | ');
    const modalTitle = 'Properties for ' + title;

    return (
        <Modal open={true} title={modalTitle} onClose={callbacks.onClose}>
            <FlexPropertiesContainer onClose={callbacks.onClose} />
        </Modal>
    );
};

export default ModalFlexPropertiesContainer;
