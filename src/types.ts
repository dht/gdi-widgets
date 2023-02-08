export type IEngineContextState = {
    isReady: boolean;
    blocks: IBlocks;
    patchContext: (change: Partial<IEngineContextState>) => void;
};
