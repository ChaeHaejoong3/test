import MarkdownRenderer from "@/shared/ui/MarkdownRenderer";

type BodyProps = {
  content: string;
};

export default function Body({ content }: BodyProps) {
  return (
    <>
      <MarkdownRenderer content={content} />
    </>
  );
}
