import { FC } from "react";

export interface ArticleDetailsProps {
  title: string;
  content: string;
  username: string;
  date: number;
  score: number;
}

const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  return (
    <div className="flex flex-col p-3 border border-blue-200 text-black w-full gap-3">
      <div className="flex flex-row text-sm text-opacity-70 text-black gap-3">
        <p>{props.username}</p>
        <p>{new Date(props.date * 1000).toString()}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg">{props.title}</h2>
        <p className="h-24 overflow-hidden text-ellipsis break-words">
          {props.content}
        </p>
      </div>

      <div className="flex flex-row gap-3 font-semibold">
        <p className="text-red-400">{props.score}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
