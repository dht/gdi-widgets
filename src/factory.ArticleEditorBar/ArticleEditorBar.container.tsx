import React, { useMemo } from 'react';
import ArticleEditorBar from './ArticleEditorBar';
import { useSelector, useDispatch } from 'react-redux';
import { useTabStopwatch } from '@gdi/hooks';
import { factory as store } from '@gdi/selectors';

const REPORT_INTERVAL_IN_SECONDS = 10;

export const ArticleEditorBarContainer = () => {
    const dispatch = useDispatch();
    const meta = useSelector(store.selectors.base.$articleMeta);

    useTabStopwatch(() => {
        if (!meta) {
            return;
        }
        const minutes = REPORT_INTERVAL_IN_SECONDS / 60;
        const nextMinutesSpentEditing = meta.minutesSpentEditing + minutes;

        dispatch(
            store.actions.articles.patch(meta.id, {
                minutesSpentEditing: nextMinutesSpentEditing,
            })
        );
    }, REPORT_INTERVAL_IN_SECONDS * 1000);

    return <ArticleEditorBar meta={meta} />;
};

export default ArticleEditorBarContainer;
