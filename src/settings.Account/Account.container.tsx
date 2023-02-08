import React from 'react';
import Account from './Account';
import { BusinessInfoContainer } from '../settings.BusinessInfo/BusinessInfo.container';
import { useSelector } from 'react-redux';
import { auth as store } from '@gdi/selectors';

export const AccountContainer = () => {
    const me = useSelector(store.selectors.raw.$rawMe);
    const users = useSelector(store.selectors.base.$users);

    return (
        <Account me={me} users={users}>
            <BusinessInfoContainer />
        </Account>
    );
};

export default AccountContainer;
