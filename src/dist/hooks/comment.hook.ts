import React, { useReducer } from "react";

export default function useComment(
    init: ICommentState
): [ICommentState, React.Dispatch<ICommentPayload>] {
    function commentReducer(prevState: ICommentState, action: ICommentPayload) {
        let newState = { ...prevState };

        switch (action.type) {
            case "addComment":
                let comment = action.payload as ICommentProperty;

                newState.comments.push(comment);

                break;
            case "addReply":
                let replyPayload = action.payload as ICommentProperty; 

                let replyCommentIndex = newState.comments.findIndex(
                    (r) => r.id === replyPayload.id
                );

                if (replyCommentIndex > -1) {
                    newState.comments[replyCommentIndex] = replyPayload;
                }

                break;
                case "restore":
                    let storage = action.payload as ICommentState;

                    newState = storage;
                    break;
        }

        window.localStorage.setItem("comments",JSON.stringify(newState));

        return newState;
    }

    return useReducer(commentReducer, init);
}
