interface ICommentProperty {
  id: number;
  title: string;
  content: string;
  reply: IReplyProperty[];
}

interface IReplyProperty {
  id: numberl;
  content: string;
}

interface ICommentState {
  comments: ICommentProperty[];
}

interface ICommentPayload {
  type: "restore" | "addComment" | "addReply";
  payload: ICommentState | ICommentProperty;
}

interface ICommentContext {
  state: ICommentState | undefined;
  dispatch: React.Dispatch<ICommentPayload> | undefined;
}
