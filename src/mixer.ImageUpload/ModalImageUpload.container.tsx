import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@gdi/web-ui';
import { ImageUploadContainer } from './ImageUpload.container';
import { mixer as store } from '@gdi/selectors';

export const ModalImageUploadContainer = () => {
    const dispatch = useDispatch();
    const mixerState = useSelector(store.selectors.raw.$rawMixerState);
    const showImageUploadModal = mixerState.showImageUploadModal;

    function onClose() {
        dispatch(
            store.actions.appStateMixer.patch({ showImageUploadModal: false })
        );
    }

    if (!showImageUploadModal) {
        return null;
    }

    return (
        <Modal open={true} title='Image Upload' onClose={onClose}>
            <ImageUploadContainer onClose={onClose} />
        </Modal>
    );
};

export default ModalImageUploadContainer;
