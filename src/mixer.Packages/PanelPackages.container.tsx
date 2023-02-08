import React from 'react';
import Packages from './Packages';
import { useSelector, useDispatch } from 'react-redux';
import { mixer as store } from '@gdi/selectors';

export const PanelPackagesContainer = (_props: any) => {
    const packages = useSelector(store.selectors.base.$packages);

    return <Packages items={packages} />;
};

export default PanelPackagesContainer;
