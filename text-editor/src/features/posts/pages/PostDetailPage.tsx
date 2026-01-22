import Body from "../components/Body";
import Title from "../components/Title";

type PostDetailPage = {
  content: string;
};

export default function PostDetailPage({ content }: PostDetailPage) {
  return (
    <>
      <Title />
      <Body content={content} />
    </>
  );
}
