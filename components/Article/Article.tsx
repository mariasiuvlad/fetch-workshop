import { FC } from "react";
import ArticleDetails, {
  ArticleDetailsProps,
} from "../ArticleDetails/ArticleDetails";
import Comment, { CommentProps } from "../Comment/Comment";

interface ArticleProps {
  details: ArticleDetailsProps;
  comments: CommentProps[];
}

const Article: FC<ArticleProps> = (props) => {
  return (
    <div>
      <ArticleDetails {...props.details} />
      {props.comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default Article;
