import React from "react";

export const CommentContext = React.createContext<ICommentContext>({
    state: undefined,
    dispatch: undefined
});
