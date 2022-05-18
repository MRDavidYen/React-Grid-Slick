import { FormEvent, useContext, useRef } from "react";
import { CommentContext } from "../../hooks/comment.context";
import styles from "../../styles/comment/comment.module.css";

export default function Comment({ ...settings }: ICommentProperty) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const commentContext = useContext(CommentContext);

    const replySubmit = (e: FormEvent) => {
        e.preventDefault();
        const newReplies = [...settings.reply];

        if(!textAreaRef.current!.value) {
            return;
        }

        newReplies.push({
            id: newReplies.length + 1,
            content: textAreaRef.current!.value
        });

        commentContext.dispatch!({
            type: "addReply",
            payload: { ...settings, reply: newReplies }
        });

        textAreaRef.current!.value = ""
    };

    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h2>{settings.title}</h2>
                <p>{settings.content}</p>
            </div>
            <div>
                <form action="post" className={styles.form} onSubmit={replySubmit}>
                    <textarea
                        id={`text-${settings.id}`}
                        ref={textAreaRef}
                        placeholder="Leave a comment..."
                    ></textarea>
                    <button type="submit">submit</button>
                </form>
            </div>
            <div className={styles.reply}>
                <h3>Reply</h3>
                <div>
                    {settings.reply
                        ? settings.reply.sort((a, b) => a.id > b.id ? -1 : 1).map((rep, index) => {
                            return (
                                <div key={rep.id}>
                                    <p>{rep.content}</p>
                                </div>
                            );
                        })
                        : ""}
                </div>
            </div>
        </div>
    );
}
