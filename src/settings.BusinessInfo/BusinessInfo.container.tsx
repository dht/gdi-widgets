import BusinessInfo from './BusinessInfo';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { business } from '@gdi/selectors';

export const BusinessInfoContainer = () => {
    const dispatch = useDispatch();
    const businessInfo = useSelector(business.selectors.raw.$rawBusiness);

    const allOptions = useSelector(business.selectors.options.$allOptions);
    const allDetails = useMemo(() => ({}), []);

    const callbacks = useMemo(
        () => ({
            onSave: async (change: Json, _allData: Json) => {
                await dispatch(business.actions.business.patch(change));
                return Promise.resolve(true);
            },
        }),
        []
    );

    return (
        <BusinessInfo
            businessInfo={businessInfo as Json}
            allOptions={allOptions}
            allDetails={allDetails}
            callbacks={callbacks}
        />
    );
};

export default BusinessInfoContainer;
