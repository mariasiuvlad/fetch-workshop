import { FC } from "react";

export interface ArticleDetailsProps {
  title: string;
  content: string;
  username: string;
  date: string;
  upvotes: number;
  downvotes: number;
}

const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  return (
    <div className="flex flex-col p-3 border border-blue-200 text-black w-full gap-3">
      <div className="flex flex-row text-sm text-opacity-70 text-black gap-3">
        <p>{props.username}</p>
        <p>{props.date}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg">{props.title}</h2>
        <p>{props.content}</p>
      </div>

      <div className="flex flex-row gap-3 font-semibold">
        <p className="text-red-300">{props.upvotes}</p>
        <p className="text-blue-300">{props.downvotes}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
