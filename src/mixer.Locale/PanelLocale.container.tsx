import React from 'react';
import Locale from './Locale';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store, site } from '@gdi/selectors';

export const PanelLocaleContainer = (_props: any) => {
    const dispatch = useDispatch();
    const localeOptions = useSelector(store.selectors.raw.$rawLocales);
    const selectedLocaleId = useSelector(site.selectors.raw.$rawLocale).localeId; // prettier-ignore

    function onSelect(id: string) {
        dispatch(
            store.actions.locale.patch({
                localeId: id,
            })
        );
    }

    return (
        <Locale
            selectedLocaleId={selectedLocaleId}
            options={Object.values(localeOptions)}
            onSelect={onSelect}
        />
    );
};

export default PanelLocaleContainer;
