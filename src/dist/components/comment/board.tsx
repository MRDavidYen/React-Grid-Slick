import { FormEvent, useEffect, useRef } from "react";
import { CommentContext } from "../../hooks/comment.context";
import useComment from "../../hooks/comment.hook";
import Comment from "./comment";
import styles from "../../styles/comment/board.module.css";

export default function Board() {
    const [commentState, commentDispatch] = useComment({
        comments: []
    });
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        let storage = window.localStorage.getItem("comments");

        if (storage) {
            commentDispatch({
                type: "restore",
                payload: JSON.parse(storage)
            });
        }
    }, []);

    const commentSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(!textAreaRef.current!.value) {
            return;
        }

        commentDispatch({
            type: "addComment",
            payload: {
                id: commentState.comments.length,
                title: `Comment${commentState.comments.length + 1}`,
                content: textAreaRef.current!.value,
                reply: []
            }
        });

        textAreaRef.current!.value = "";
    };

    return (
        <CommentContext.Provider
            value={{
                state: commentState,
                dispatch: commentDispatch
            }}
        >
            <div className={`${styles.main}`}>
                <div>
                    <h1>Leave a Message</h1>
                    <form action="post" onSubmit={commentSubmit}>
                        <textarea
                            ref={textAreaRef}
                            placeholder="Leave a comment.."
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles.comments}>
                    {commentState.comments && commentState.comments.length > 0
                        ? commentState.comments.sort((c, d) => c.id > d.id ? -1 : 1).map((comment: ICommentProperty, index: number) => {
                            return <Comment key={index} {...comment} />;
                        })
                        : ""}
                </div>
            </div>
        </CommentContext.Provider>
    );
}
