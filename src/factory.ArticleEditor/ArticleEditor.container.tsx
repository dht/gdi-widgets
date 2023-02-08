import React, { useMemo } from 'react';
import ArticleEditor from './ArticleEditor';
import { useSelector, useDispatch } from 'react-redux';
import { ArticleEditorBarContainer } from '../factory.ArticleEditorBar/ArticleEditorBar.container';
import { ArticleContextProvider } from './ArticleEditor.context';
import { dateDbLong } from '@gdi/language';
import { factory as store } from '@gdi/selectors';

export const ArticleEditorContainer = () => {
    const dispatch = useDispatch();
    const article = useSelector(store.selectors.base.$article);

    const onSave = (change: Json) => {
        dispatch(
            store.actions.articles.patch(article.id, {
                ...change,
                lastSaveDate: dateDbLong(new Date()),
            })
        );
    };

    if (!article) {
        return null;
    }

    return (
        <ArticleContextProvider article={article} onSave={onSave}>
            <ArticleEditorBarContainer />
            <ArticleEditor />
        </ArticleContextProvider>
    );
};

export default ArticleEditorContainer;
