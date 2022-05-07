import { FC } from "react";

export interface CommentProps {
  content: string;
  upvotes: number;
  downvotes: number;
  username: string;
  date: string;
}

const Comment: FC<CommentProps> = (props) => {
  return (
    <div className="flex flex-col p-3 border border-blue-200 text-black w-full gap-3">
      <div className="flex flex-row text-sm text-opacity-70 text-black gap-3">
        <p>{props.username}</p>
        <p>{props.date}</p>
      </div>

      <div>
        <p>{props.content}</p>
      </div>

      <div className="flex flex-row gap-3 font-semibold">
        <p className="text-red-300">{props.upvotes}</p>
        <p className="text-blue-300">{props.downvotes}</p>
      </div>
    </div>
  );
};

export default Comment;
