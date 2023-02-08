import React, { useMemo } from 'react';
import Ppl from './Ppl';
import { useSelector, useDispatch } from 'react-redux';
import { guid4, invokeEvent } from 'shared-base';
import { firebase } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';
import { ppl as store } from '@gdi/selectors';

export const PplContainer = () => {
    const dispatch = useDispatch();
    const ppl = useSelector(store.selectors.tables.$ppl);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: async (itemId: string) => {},
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    const allMethods = useMemo(
        () => ({
            onUpload: async (file: File, extraData: Json = {}) => {
                const id = extraData.itemId || guid4();
                const ext = file.name.split('.').pop();
                const path = `uploads/person_${id}.${ext}`;
                return firebase.uploadImage(path, file);
            },
        }),
        []
    );

    return (
        <Ppl
            data={ppl}
            callbacks={callbacks}
            allOptions={allOptions}
            allMethods={allMethods}
            tags={allOptions.$pplTags}
            dispatch={dispatch}
        />
    );
};

export default PplContainer;
