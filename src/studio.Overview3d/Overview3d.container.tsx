import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Overview3d from './Overview3d';
import { studio as store, dashboard } from '@gdi/selectors';

export const Overview3dContainer = () => {
    const dispatch = useDispatch();
    const currentIds = useSelector(store.selectors.raw.$rawStudioIds);
    const boards = useSelector(store.selectors.raw.$rawBoards);
    const { boardId } = currentIds;

    const boardIds = useMemo(() => Object.keys(boards), [boards]);

    const board = useSelector(store.selectors.base.$boardConfig);

    const callbacks = useMemo(
        () => ({
            onNudgeBoard: (delta: number) => {
                const index = boardIds.indexOf(boardId);
                let nextIndex = (index + delta) % boardIds.length;

                if (nextIndex < 0) {
                    nextIndex = boardIds.length - 1;
                }

                const nextBoardId = boardIds[nextIndex];

                dispatch(
                    store.actions.currentIdsStudio.patch({
                        boardId: nextBoardId,
                    })
                );
            },
        }),
        [boardIds, boardId]
    );

    if (!boardId || boardIds.length === 0) {
        return null;
    }

    return (
        <Overview3d
            board={board as IBoardConfig}
            onNudgeBoard={callbacks.onNudgeBoard}
        />
    );
};

export default Overview3dContainer;
