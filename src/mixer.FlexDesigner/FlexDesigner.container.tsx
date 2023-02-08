import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export const FlexDesignerContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            onViewChange: (viewId: string) => {},
            onSearch: (search?: string) => {},
            onSelectTool: (toolId: string) => {},
            onTagClick: (tag: string) => {},
            onTagClear: () => {},
        }),
        []
    );

    return <></>;
};

export default FlexDesignerContainer;
