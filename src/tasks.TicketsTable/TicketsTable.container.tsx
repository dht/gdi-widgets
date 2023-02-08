import React, { useMemo } from 'react';
import TicketsTable from './TicketsTable';
import { useSelector, useDispatch } from 'react-redux';
import { tasks as store } from '@gdi/selectors';

export const TicketsTableContainer = () => {
    return (
        <TicketsTable height={500} selector={store.selectors.tables.$tickets} />
    );
};

export default TicketsTableContainer;
