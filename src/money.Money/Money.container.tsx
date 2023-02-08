import React, { useMemo } from 'react';
import Money from './Money';
import { useSelector, useDispatch } from 'react-redux';
import { invokeEvent } from 'shared-base';
import { OnionContainer } from '../money.Onion/Onion.container';
import { money as store } from '@gdi/selectors';

export const MoneyContainer = () => {
    const dispatch = useDispatch();
    const moneyLines = useSelector(store.selectors.tables.$moneyLines);
    const allOptions = useSelector(store.selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Money
            data={moneyLines}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
            customView={OnionContainer}
        />
    );
};

export default MoneyContainer;
