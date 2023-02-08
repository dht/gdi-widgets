import React, { useMemo, useContext } from 'react';
import Overview from './Overview';
import { useSelector, useDispatch } from 'react-redux';
import { InboxContainer } from '../dashboard.Inbox/Inbox.container';
import { invokeEvent } from 'shared-base';
import { PlatformContext } from '@gdi/platformer';
import { HoustonContainer } from '../dashboard.Houston/Houston.container';
import { dashboard as store } from '@gdi/selectors';

export const OverviewContainer = () => {
    const dispatch = useDispatch();
    const { accountName, availableAccounts } =
        useContext(PlatformContext).state;

    const callbacks = useMemo(
        () => ({
            onAccountChange: () => {
                dispatch({
                    type: 'CHANGE_ACCOUNT',
                    accountName,
                    availableAccounts,
                });
            },
        }),
        [accountName, availableAccounts]
    );

    return (
        <Overview accountName={accountName} callbacks={callbacks}>
            <InboxContainer />
            <HoustonContainer />
        </Overview>
    );
};

export default OverviewContainer;
