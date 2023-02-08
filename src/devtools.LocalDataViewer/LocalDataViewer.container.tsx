import React, { useMemo, useState } from 'react';
import LocalDataViewer from './LocalDataViewer';
import { getJson } from 'shared-base';
import { useKey } from '@gdi/hooks';
import { useMount } from 'react-use';

export const LocalDataViewerContainer = () => {
    const [json, setJson] = useState({});

    const reload = () => {
        const data = getJson('LOCAL_DATA_KEY') ?? {};
        setJson(data);
    };

    useMount(() => {
        reload();
    });

    useKey((shortKey) => {
        if (shortKey.key === 'R' && shortKey.withShift) {
            reload();
        }
    });

    return <LocalDataViewer json={json} />;
};

export default LocalDataViewerContainer;
