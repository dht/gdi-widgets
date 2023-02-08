import React from 'react';
import Typography from './Typography';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store, site } from '@gdi/selectors';

export const PanelTypographyContainer = (_props: any) => {
    const dispatch = useDispatch();
    const typographyOptions = useSelector(
        store.selectors.raw.$rawLibraryTypography
    );
    const selectedTypographyId = useSelector(site.selectors.raw.$rawFonts).typographyId; // prettier-ignore

    function onSelect(id: string) {
        dispatch(
            store.actions.fonts.patch({
                typographyId: id,
            })
        );
    }

    return (
        <Typography
            selectedTypographyId={selectedTypographyId}
            options={Object.values(typographyOptions)}
            onSelect={onSelect}
        />
    );
};

export default PanelTypographyContainer;
